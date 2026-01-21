'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const textColor = variant === "light" ? "text-[#F4FBF8]" : "text-[#0E0F10]";
  const borderColor = variant === "light" ? "border-[#29AB87]" : "border-[#29AB87]";

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-[120px] py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/icons/Group 14.svg"
            alt="finrep logo"
            width={93}
            height={40}

          />
        </Link>

        {/* Navigation Links - Hidden on mobile, visible on lg */}
        <div className="hidden lg:flex justify-start items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="flex justify-start items-center gap-1">
              <Link
                href={link.href}
                className={`${textColor} text-base font-medium font-articulat break-words hover:opacity-80 transition-opacity`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Action Buttons - Hidden on mobile, visible on md */}
        <div className="hidden md:flex justify-start items-center gap-4">
          <Button
            variant="outline"
            size="md"
            className={variant === "light" ? "text-[#F4FBF8] border-[#29AB87] hover:bg-white/10" : ""}
          >
            Login
          </Button>
          <Button variant="primary" size="md">
            Request Access
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`${textColor} p-2 hover:opacity-80 transition-opacity`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        variant={variant}
        navLinks={navLinks}
      />
    </div >
  );
}
