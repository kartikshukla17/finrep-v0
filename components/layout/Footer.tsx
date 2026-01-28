"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Page-specific titles mapping
const pageTitles: Record<string, { mobile: string; desktop: string }> = {
  "/": {
    mobile: "Solve SEC reporting for good",
    desktop: "Solve SEC reporting for good",
  },
  "/pricing": {
    mobile: "Get custom pricing built around your workflow",
    desktop: "Get custom pricing built around your workflow",
  },
  "/about": {
    mobile: "Solve SEC reporting for good",
    desktop: "Solve SEC reporting for good",
  },
  "/blogs": {
    mobile: "Solve SEC reporting for good",
    desktop: "Solve SEC reporting for good",
  },
  "/security": {
    mobile: "Your data is safe with us",
    desktop: "Your data is safe with us",
  },
};

// Default titles for pages not in the mapping
const defaultTitles = {
  mobile: "Cut days off your SEC filings",
  desktop: "Solve SEC reporting for good",
};

// Navigation data
const navigationSections: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "mailto:support@finrep.ai" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blogs" },
      {
        label: "SEC Reporting Journal",
        href: "https://secreportingjournal.com/",
        external: true,
      },
      { label: "Security", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  // Get titles for current page, fallback to default
  const titles = pageTitles[pathname] || defaultTitles;

  return (
    <div className="relative w-full bg-white">
      {/* Footer Image at Start */}
      <div className="absolute left-0 top-0 w-full h-[195px] lg:h-[681px] overflow-hidden flex justify-center">
        <Image
          src="/assets/icons/footer.svg"
          alt="Footer background"
          width={1440}
          height={681}
          className="min-w-[412px] lg:min-w-[1440px] h-auto object-cover object-top"
        />
      </div>

      {/* Content - Overlaid on Image */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-10 pt-[50px] lg:pt-[202px] pb-12 flex flex-col justify-start items-center gap-20 lg:gap-[120px]">
        {/* CTA Section */}
        <div className="w-full max-w-[372px] lg:max-w-[590px] flex flex-col justify-center items-center gap-6 lg:gap-9 text-center">
          {/* Mobile Title */}
          <h2 className="lg:hidden w-full text-[#0E0F10] text-[36px] font-normal font-articulat leading-[50.40px] text-center">
            {titles.mobile}
          </h2>
          {/* Desktop Title */}
          <h2 className="hidden lg:block w-full max-w-[634px] text-[#0E0F10] text-[48px] font-normal font-articulat leading-[57.60px] whitespace-nowrap">
            {titles.desktop}
          </h2>

          {/* Mobile: Two buttons side by side, centered */}
          <div className="lg:hidden flex justify-center items-center gap-2">
            <button className="px-6 py-4 bg-[#29AB87] rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#238f73] transition-colors">
              <span className="text-[#F4FBF8] text-base font-medium font-articulat whitespace-nowrap">
                Book a Demo
              </span>
            </button>
            <button className="px-6 py-4 bg-[#0E0F10] rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#2a2c2e] transition-colors">
              <span className="text-[#F4FBF8] text-base font-medium font-articulat whitespace-nowrap">
                Register for a Free Trial
              </span>
            </button>
          </div>

          {/* Desktop: Single button */}
          <div className="hidden lg:flex justify-start items-start gap-6">
            <button className="w-[283px] px-6 py-4 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#238f73] transition-colors">
              <span className="text-[#F4FBF8] text-[20px] font-medium font-articulat whitespace-nowrap">
                Request Access
              </span>
            </button>
          </div>
        </div>

        {/* Navigation and Footer Content */}
        <div className="flex flex-col justify-start items-center gap-6 lg:gap-12 w-full">
          {/* Mobile Navigation - Stacked vertically */}
          <div className="lg:hidden w-full max-w-[372px] flex flex-row justify-start items-start gap-12">
            {navigationSections.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className="flex flex-col justify-start items-start gap-3"
              >
                <span className="text-[#9FA4A9] text-xs font-medium font-articulat leading-[16.80px]">
                  {section.title}
                </span>
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-[#0E0F10] text-sm font-normal font-articulat leading-[19.60px] hover:text-[#29AB87] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            {/* Security Badges - Mobile */}
            <div className="flex justify-start items-start gap-4">
              <img
                src="/assets/images/SOC2.png"
                alt="SOC II badge"
                className="w-[48px] h-[48px] object-contain"
              />
              <img
                src="/assets/images/iso.png"
                alt="ISO 27001 badge"
                className="w-[48px] h-[48px] object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Two columns with badges */}
          <div className="hidden lg:flex w-full justify-start items-start gap-12">
            {navigationSections.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className="flex flex-col justify-start items-start gap-4"
              >
                <span className="text-[#9FA4A9] text-base font-medium font-articulat leading-[22.40px]">
                  {section.title}
                </span>
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-[#0E0F10] text-base font-normal font-articulat leading-[22.40px] hover:text-[#29AB87] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            {/* Security Badges - Desktop */}
            <div className="flex justify-start items-center gap-4">
              <img
                src="/assets/images/SOC2.png"
                alt="SOC II badge"
                className="w-[48px] h-[48px] object-contain"
              />
              <img
                src="/assets/images/iso.png"
                alt="ISO 27001 badge"
                className="w-[48px] h-[48px] object-contain"
              />
            </div>
          </div>

          {/* Logo Section - finrep logo with 48px vertical padding */}
          <div className="flex justify-center items-center w-full py-12">
            <div className="relative w-full h-auto">
              <Image
                src="/assets/icons/finrep-logo.svg"
                alt="finrep logo"
                width={1360}
                height={300}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>

          {/* Bottom Footer Bar with 48px vertical padding */}
          <div className="w-full py-12 flex flex-row justify-between items-start lg:items-center">
            {/* Social Media Icons */}
            <div className="flex justify-start items-start gap-6">
              <Link
                href="https://www.linkedin.com/company/finrepai/"
                className="w-6 h-6 relative overflow-hidden hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferr"
                
              >
                <Image
                  src="/assets/icons/pajamas_linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
              <Link
                href="https://x.com/FinrepAI"
                className="w-6 h-6 relative overflow-hidden hover:opacity-80 transition-opacity"
                target="_blanck"
                rel="noopener noreferr"
              >
                <Image
                  src="/assets/icons/bi_twitter-x.svg"
                  alt="Twitter/X"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Backed by Accel */}
            <div className="flex justify-center items-center gap-1">
              <span className="text-center text-[#9FA4A9] text-base font-normal font-articulat leading-[25.60px]">
                Backed by
              </span>
              <Image
                src="/assets/company_logos/accel-logo.svg"
                alt="Accel logo"
                width={50}
                height={16}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
