import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { Zap, Sparkles, Handshake } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      
      <main className="flex-1">
        <Hero />

        {/* Introduction Section */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-8">
                  단순한 포토부스가 아닙니다.
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed word-break-keep">
                  <p>
                    <strong>F&P (Figure & Poto) 부스</strong>는 사진에 찍힌 모습을 즉석에서 피규어로 제작할 수 있게 해주는 혁신적인 서비스입니다.
                  </p>
                  <p>
                    대학에서 조소를 전공하고 피규어 업계에 종사하며, "이 기술을 대중적인 포토부스와 결합할 수는 없을까?"라는 고민 끝에 탄생했습니다.
                  </p>
                  <p>
                    지난 4~5년간 대중화된 포토부스 시장과, 연매출 수억 원 규모로 성장한 리얼 피규어 시장. 이 두 가지를 AI 기술로 결합하여 <strong>"가장 접근성 좋고, 싸고, 빠른"</strong> 피규어 제작 솔루션을 제안합니다.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl bg-gray-200 overflow-hidden shadow-2xl">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-100 to-gray-200">
                  F&P Concept Visual
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-black tracking-tight mb-4">Core Features</h2>
              <p className="text-xl text-gray-500">
                AI와 3D 기술의 결합으로 기존의 한계를 뛰어넘었습니다.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard 
                number="01"
                title="공정의 신속화"
                description="부스에서 촬영된 2D 이미지를 3D 데이터베이스로 변환하여 클라우드에서 처리. 메쉬 수정 작업을 신속히 처리하여 작업 시간과 비용을 획기적으로 절감합니다."
                icon={Zap}
              />
              <FeatureCard 
                number="02"
                title="AI가 만들어내는 나"
                description="단순 피규어를 넘어, 실사 이미지를 기반으로 캐릭터형 변환 필터를 적용해 나를 닮은 나만의 고유한 캐릭터를 생성할 수 있습니다."
                icon={Sparkles}
              />
              <FeatureCard 
                number="03"
                title="무한 확장성"
                description="브랜드의 정체성을 위트있게 구현한 부스 디자인과 배경 제작으로 협력사와 소비자가 교감하며 강력한 바이럴 마케팅 효과를 창출합니다."
                icon={Handshake}
              />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-24 bg-secondary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <p className="text-primary font-bold tracking-widest uppercase mb-4">Our Vision</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                "Subculture to Core Culture"
              </h2>
              <p className="max-w-2xl text-xl md:text-2xl text-gray-400 leading-relaxed word-break-keep break-keep">
                독특한 문화로 치부되던 서브컬처가 이제는 코어 컬처가 되고 있습니다. <br/>
                취향이 존중받는 시대, <strong>나를 캐릭터로 만들어주는 즐거움</strong>을 선사합니다.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
