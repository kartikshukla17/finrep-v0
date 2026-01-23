'use client';

import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // For dark variant pages (like blog articles), always show white bg
    if (variant === "dark") {
      setIsScrolled(true);
      return;
    }

    // Find the white section marker element
    const whiteSectionEl = document.getElementById('white-section-start');

    if (whiteSectionEl) {
      // Use Intersection Observer to detect when white section reaches the header
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When white section enters the viewport at the top (header area)
            // boundingClientRect.top <= 72 means the white section has reached the header
            const isInWhiteSection = entry.boundingClientRect.top <= 36;
            setIsScrolled(isInWhiteSection);
          });
        },
        {
          // Trigger when the element crosses the top 72px of the viewport (header height)
          rootMargin: '-72px 0px 0px 0px',
          threshold: 0,
        }
      );

      observer.observe(whiteSectionEl);

      // Also handle scroll for immediate updates
      const handleScroll = () => {
        const rect = whiteSectionEl.getBoundingClientRect();
        setIsScrolled(rect.top <= 72);
      };

      // Check initial position
      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // Fallback: use scroll position if marker element not found
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = window.innerHeight - 72;
        setIsScrolled(scrollY > threshold);
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant]);

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
  ];

  // Dynamic colors based on scroll state
  const textColor = isScrolled ? "text-[#0E0F10]" : "text-[#F4FBF8]";
  const bgStyle = isScrolled
    ? "bg-gradient-to-b from-white to-transparent"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-[24px] transition-all duration-500 ease-in-out ${bgStyle}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[120px] py-4 flex justify-between items-center relative">
        {/* Logo - no changes applied */}
        <Link href="/">
          <Image
            src="/assets/icons/Group 14.svg"
            alt="finrep logo"
            width={93}
            height={40}
          />
        </Link>

        {/* Navigation Links - Centered absolutely */}
        <div className="hidden lg:flex justify-center items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <div key={link.name} className="flex justify-center items-center gap-1">
              <Link
                href={link.href}
                className={`${textColor} text-base font-medium font-articulat break-words hover:opacity-80 transition-all duration-500 ease-in-out`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Action Buttons - Hidden on mobile, visible on md */}
        <div className="hidden md:flex justify-start items-center gap-4">
          <Button
            variant="primary"
            size="md"
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
            className={`${textColor} p-2 hover:opacity-80 transition-all duration-500 ease-in-out`}
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
        variant={isScrolled ? "dark" : "light"}
        navLinks={navLinks}
      />
    </header>
  );
}
