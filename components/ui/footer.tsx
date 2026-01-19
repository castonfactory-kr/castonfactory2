import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-gray-50 py-12 text-sm text-gray-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-2 md:items-start">
            <span className="text-lg font-bold text-gray-900">Cast On Factory</span>
            <p className="text-xs">© 2026 Cast On Factory. All rights reserved.</p>
          </div>
          
          <nav className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary hover:underline underline-offset-4">
              개인정보처리방침
            </Link>
            <Link href="/legal" className="hover:text-primary hover:underline underline-offset-4">
              법적고지
            </Link>
            <Link href="/contact" className="hover:text-primary hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
