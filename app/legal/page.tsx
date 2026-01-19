import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      
      <main className="flex-1 py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h1 className="text-3xl md:text-4xl font-black mb-12 text-center border-b border-gray-100 pb-8">
                법적고지
              </h1>

              <div className="space-y-12 text-gray-600 leading-relaxed">
                
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">01</span>
                    저작권 정보
                  </h2>
                  <p className="pl-9">
                    본 웹사이트에서 제공하는 모든 콘텐츠(텍스트, 이미지, 영상, 로고, 디자인, 소프트웨어 등)에 대한 저작권은 <strong>Cast On Factory</strong> 및 해당 콘텐츠 제공자에게 있습니다.
                  </p>
                  <p className="pl-9 mt-2 text-sm text-gray-500">
                    사전 서면 동의 없이 본 웹사이트의 콘텐츠를 무단 복제, 배포, 변형, 전송하거나 상업적 목적으로 이용하는 행위는 저작권법에 의해 금지됩니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">02</span>
                    면책 조항 (Disclaimer)
                  </h2>
                  <p className="pl-9">
                    회사는 본 웹사이트에 포함된 정보의 정확성, 완전성, 신뢰성을 보장하기 위해 노력하나, 이에 대한 명시적 또는 묵시적인 보증을 제공하지 않습니다.
                  </p>
                  <p className="pl-9 mt-2 text-sm text-gray-500">
                    본 웹사이트의 이용으로 인해 발생한 직접적, 간접적, 부수적 손해에 대해 회사는 법적 책임을 지지 않습니다. 사용자는 제공된 정보의 활용에 대한 책임을 전적으로 부담합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">03</span>
                    링크된 사이트
                  </h2>
                  <p className="pl-9">
                    본 웹사이트는 사용자 편의를 위해 외부 웹사이트에 대한 링크를 제공할 수 있습니다. 회사는 링크된 사이트의 콘텐츠나 운영에 대해 통제 권한이 없으며, 링크된 사이트 이용으로 인한 어떠한 책임도 지지 않습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">04</span>
                    상표권
                  </h2>
                  <p className="pl-9">
                    "Cast On Factory", "F&P" 및 관련 로고는 회사의 등록 상표 또는 출원 중인 상표입니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">05</span>
                    준거법 및 관할
                  </h2>
                  <p className="pl-9">
                    본 고지 내용의 해석 및 적용에 관하여는 대한민국 법령을 따르며, 본 웹사이트 이용과 관련하여 발생한 분쟁에 대해서는 서울중앙지방법원을 전속 관할 법원으로 합니다.
                  </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    연락처
                  </h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                      <span className="text-gray-500 w-20">Email</span>
                      <a href="mailto:legal@castonfactory.com" className="hover:text-primary transition-colors">legal@castonfactory.com</a>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                      <span className="text-gray-500 w-20">Phone</span>
                      <a href="tel:02-1234-5678" className="hover:text-primary transition-colors">02-1234-5678</a>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                      <span className="text-gray-500 w-20">Address</span>
                      <span>서울특별시 강남구 테헤란로 123</span>
                    </div>
                  </div>
                </section>

                <div className="border-t border-gray-100 pt-8 mt-12 text-sm text-gray-500 text-right">
                  <p>최종수정일 : 2026. 1. 19.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
