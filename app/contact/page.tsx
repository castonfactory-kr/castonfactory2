import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      
      <main className="flex-1 py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-black tracking-tight text-gray-900">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                궁금하신 점이 있으신가요? 언제든 문의해 주세요.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-sm text-gray-500">
                    <a href="mailto:support@castonfactory.com" className="hover:text-primary">
                      support@castonfactory.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone Support</h3>
                  <p className="text-sm text-gray-500">
                    <a href="tel:02-1234-5678" className="hover:text-primary">
                      02-1234-5678
                    </a>
                  </p>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-green-50 rounded-full text-green-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Live Chat</h3>
                  <p className="text-sm text-gray-500">
                    월-금 09:00 - 18:00
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    주말 및 공휴일 휴무
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8 text-center">FAQ - 자주 묻는 질문</h2>
              <div className="space-y-6">
                
                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">제품 문의는 어떻게 하나요?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    이메일 또는 전화로 문의해 주시면 상세히 안내해 드립니다.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">견적 요청은 어떻게 진행되나요?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    프로젝트 규모 파악 후 24시간 이내에 1차 견적서를 보내드립니다.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">A/S 및 기술 지원은 어떻게 받을 수 있나요?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    전담 엔지니어가 배정되어 신속하게 처리해 드립니다.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">납품 기간은 얼마나 소요되나요?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    주문 확정 후 일반적으로 2주 ~ 4주 정도 소요됩니다.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">해외 배송도 가능한가요?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    네, 가능합니다. 해외 배송비 및 절차는 별도로 안내해 드립니다.
                  </p>
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
