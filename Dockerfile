# ===== Dependencies Stage =====
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 의존성 설치 (package*.json만 먼저 복사하여 캐싱 최적화)
COPY package.json package-lock.json* ./
RUN npm ci

# ===== Builder Stage =====
FROM node:24-alpine AS builder
WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js telemetry 비활성화 (선택사항)
ENV NEXT_TELEMETRY_DISABLED=1

# 프로덕션 빌드
RUN npm run build

# ===== Runner Stage =====
FROM node:24-alpine AS runner
WORKDIR /app

# 프로덕션 환경 설정
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 보안: non-root 유저 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 필요한 파일만 복사
COPY --from=builder /app/public ./public

# Standalone 출력 모드 사용시 자동으로 최적화된 파일 복사
# next.config.ts에서 output: 'standalone' 설정 필요
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# non-root 유저로 전환
USER nextjs

# Next.js는 기본적으로 3000 포트 사용
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# 서버 실행
CMD ["node", "server.js"]