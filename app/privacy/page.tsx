import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      
      <main className="flex-1 py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h1 className="text-3xl md:text-4xl font-black mb-12 text-center border-b border-gray-100 pb-8">
                개인정보처리방침
              </h1>

              <div className="space-y-12 text-gray-600 leading-relaxed">
                
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">01</span>
                    개인정보의 수집 및 이용목적
                  </h2>
                  <p className="pl-9">
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  </p>
                  <ul className="list-disc pl-14 mt-2 space-y-1 text-sm text-gray-500">
                    <li>서비스 제공 및 계약의 이행</li>
                    <li>회원 관리 및 본인 확인</li>
                    <li>신규 서비스 개발 및 마케팅 활용</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">02</span>
                    수집하는 개인정보의 항목
                  </h2>
                  <p className="pl-9">
                    회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                  </p>
                  <div className="pl-9 mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-4">
                        <span className="w-24 text-gray-500 font-medium">필수항목</span>
                        <span>이름, 이메일, 휴대전화번호, 비밀번호</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="w-24 text-gray-500 font-medium">선택항목</span>
                        <span>회사명, 직급, 유입경로</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="w-24 text-gray-500 font-medium">자동수집</span>
                        <span>서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">03</span>
                    개인정보의 보유 및 이용기간
                  </h2>
                  <p className="pl-9">
                    회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 보유·이용합니다.
                  </p>
                  <p className="pl-9 mt-2 text-sm text-gray-500">
                    원칙적으로 개인정보 수집 및 파기 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">04</span>
                    개인정보의 제3자 제공
                  </h2>
                  <p className="pl-9">
                    회사는 정보주체의 개인정보를 제1조(개인정보의 수집 및 이용목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-xs px-2 py-1 rounded-full text-white">05</span>
                    개인정보의 파기절차 및 방법
                  </h2>
                  <p className="pl-9">
                    회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                  </p>
                </section>

                <div className="border-t border-gray-100 pt-8 mt-12 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
                  <p>시행일자 : 2024년 1월 1일</p>
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
