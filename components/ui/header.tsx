import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Text/Icon */}
          <span className="text-xl font-bold tracking-tight text-primary">
            Cast On Factory
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/#about" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/#features" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
            Service
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Trigger (Placeholder) */}
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
    </header>
  );
}
