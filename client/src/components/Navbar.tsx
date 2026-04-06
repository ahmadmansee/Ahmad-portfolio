import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="w-full bg-black sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-5 flex items-center justify-between">
        <Link href="/">
          <img className="h-8 cursor-pointer" alt="Logo" src="/figmaAssets/logo.svg" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <div className="inline-flex flex-col items-center gap-1 cursor-pointer group">
                <span
                  className={`font-['Inter_Tight',Helvetica] text-white text-lg leading-[1.6] transition-opacity duration-200 ${
                    isActive(link.href) ? "font-medium" : "font-normal opacity-70 group-hover:opacity-100"
                  }`}
                >
                  {link.label}
                </span>
                {isActive(link.href) && (
                  <div className="h-px w-full bg-white rounded-full" />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span
                className={`font-['Inter_Tight',Helvetica] text-white text-xl leading-[1.6] block ${
                  isActive(link.href) ? "font-medium underline underline-offset-4" : "font-normal"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
