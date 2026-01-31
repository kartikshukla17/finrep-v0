"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    const whiteSectionEl = document.getElementById("white-section-start");

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
          rootMargin: "-75px 0px 0px 0px",
          threshold: 0,
        },
      );

      observer.observe(whiteSectionEl);

      // Also handle scroll for immediate updates
      const handleScroll = () => {
        const rect = whiteSectionEl.getBoundingClientRect();
        setIsScrolled(rect.top <= 72);
      };

      // Check initial position
      handleScroll();

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Fallback: use scroll position if marker element not found
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = window.innerHeight - 72;
        setIsScrolled(scrollY > threshold);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [variant]);

  const navLinks = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Security", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  const mobileMenuLinks = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Security", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Dynamic colors based on scroll state
  const textColor = isScrolled ? "text-[#0E0F10]" : "text-[#F4FBF8]";
  const bgStyle = isScrolled
    ? "bg-gradient-to-b from-white to-transparent"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[24px] transition-all duration-500 ease-in-out ${bgStyle}`}
      >
        {/* Container: max-width 1440px, consistent padding */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex justify-between items-center relative">
          {/* Logo - 93x40, positioned 40px from left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/icons/finrep-logo.svg"
              alt="finrep logo"
              width={93}
              height={40}
              priority
            />
          </Link>

          {/* Navigation Links - Absolutely centered in the header */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${textColor} text-base font-medium font-articulat hover:opacity-80 transition-all duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons - gap-4 (16px), 40px from right edge */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Login - Outline button with 24px horizontal padding, 8px vertical */}
            <a
              href="https://app.finrep.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-lg border transition-all duration-300 inline-flex items-center ${
                isScrolled
                  ? "border-[#29AB87] text-[#29AB87] hover:bg-[#29AB87]/10"
                  : "border-[#29AB87] text-[#F4FBF8] hover:bg-[#29AB87]/20"
              }`}
            >
              <span className="text-base font-medium font-articulat">
                Login
              </span>
            </a>
            {/* Request Access - Filled button */}
            <button className="px-6 py-2 bg-[#29AB87] hover:bg-[#238f73] rounded-lg transition-all duration-300">
              <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                Request Access
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${textColor} p-2 hover:opacity-80 transition-all duration-300`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel - Outside header to avoid overflow issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] sm:max-w-[360px] bg-white z-[70] lg:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 border-b border-[#ECEDEE]">
                <Link href="/" onClick={handleLinkClick}>
                  <Image
                    src="/assets/icons/finrep-logo.svg"
                    alt="finrep logo"
                    width={80}
                    height={32}
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#0E0F10] hover:opacity-80 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-6 flex flex-col gap-8">
                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {mobileMenuLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-[#0E0F10] text-xl font-medium font-articulat leading-7 hover:text-[#29AB87] transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href="https://app.finrep.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full"
                      onClick={handleLinkClick}
                    >
                      Login
                    </Button>
                  </a>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full bg-[#0E0F10] hover:bg-[#2a2c2e]"
                    onClick={handleLinkClick}
                  >
                    Request Access
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
