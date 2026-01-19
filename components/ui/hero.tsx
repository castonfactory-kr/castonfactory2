import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-white pt-16">
      {/* Background/Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -left-[10%] bottom-[10%] h-[40vw] w-[40vw] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            New Generation of Photo Booth
          </div>
          
          <h1 className="max-w-4xl text-6xl font-black leading-tight tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            F&P <br />
            <span className="text-secondary/60">(Figure & Poto)</span>
          </h1>
          
          <p className="max-w-2xl text-xl font-medium text-gray-600 md:text-2xl lg:text-3xl break-keep">
            생성형 AI를 이용한 <br className="md:hidden" />
            <span className="text-primary font-bold">피규어 주문제작</span>이 가능한 포토부스
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white transition-transform hover:scale-105"
            >
              제휴 문의하기
            </Link>
            <Link
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
