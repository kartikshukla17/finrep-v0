"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserRoundCheck } from "lucide-react";
import Image from "next/image";
import Header from "../layout/Header";

// Company logos data
const companyLogos = [
  { id: 1, name: "FOX", src: "/assets/company_logos/fox.png" },
  { id: 2, name: "RingCentral", src: "/assets/company_logos/ringcentral.png" },
  { id: 3, name: "Infosys", src: "/assets/company_logos/infosys.png" },
  { id: 4, name: "Roku", src: "/assets/company_logos/roku.png" },
  { id: 5, name: "Massimo", src: "/assets/company_logos/massimo.png" },
  { id: 6, name: "Sixt", src: "/assets/company_logos/sixt.png" },
  { id: 7, name: "HP", src: "/assets/company_logos/hp.png" },
  { id: 8, name: "EXL", src: "/assets/company_logos/exl.png" },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function Hero() {
  return (
    <div className="relative w-full min-height:100vh bg-[#0D352A] overflow-hidden pb-5 lg:pb-0">
      {/* Fixed Header */}
      <Header variant="light" />

      {/* Container for content */}
      <div className="relative w-full max-w-[1440px] mx-auto h-full flex flex-col items-center pt-[72px]">
        {/* Hero Content - Centered */}
        <motion.div
          className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 lg:mt-[73px] w-full px-4 sm:px-6 md:px-8 lg:px-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Announcement Banner with gradient border */}
          <motion.div
            className="p-[2px] rounded-full shadow-[0px_0px_16px_rgba(0,0,0,0.25)] mb-9 max-w-full"
            style={{
              background:
                "linear-gradient(45deg, #134E3D 0%, rgba(255, 175, 66, 0.3) 50%, #134E3D 100%)",
            }}
            variants={fadeInDown}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 px-6 py-2 bg-[#134E3D] rounded-full overflow-hidden">
              {/* Fina Icon */}
              <div className="animate-spin-reverse flex-shrink-0 w-5 h-5">
                <Image
                  src="/assets/icons/fina-icon.svg"
                  alt="Fina icon"
                  width={20}
                  height={20}
                />
              </div>

              <div className="text-[#F4FBF8] text-sm md:text-base font-medium font-articulat truncate">
                Fina - Our most advanced AI is Live
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="w-full flex justify-center mb-6 sm:mb-8 px-4"
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal font-articulat leading-tight text-center">
                Financial disclosure intelligence
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-2">
                <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal font-articulat leading-tight">
                  you can
                </div>
                <motion.div
                  className="h-12 sm:h-14 md:h-[72px] lg:h-[92px] px-4 sm:px-6 md:px-8 lg:px-[37px] rounded-lg border border-[#FFAF42] flex justify-center items-center"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    borderColor: "rgba(255, 175, 66, 0)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    borderColor: "rgba(255, 175, 66, 1)",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="text-[#FFAF42] text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-normal font-bricolage leading-tight">
                    trust
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Descriptive Text */}
          <motion.div
            className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[750px] lg:max-w-[822px] text-center text-[#F4FBF8] text-base sm:text-lg md:text-xl lg:text-[20px] font-normal font-articulat leading-relaxed break-words mb-8 sm:mb-10 md:mb-12 px-4"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Analyze, compare, and generate insights across SEC, Section 16, 10K,
            10Q filings with enterprise grade accuracy and audit ready
            traceability.
          </motion.div>

          {/* Email Input and CTA - Mobile */}
          <motion.div
            className="lg:hidden flex flex-row bg-[#134E3D] rounded-full p-1 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[488px] mb-8 sm:mb-10 md:mb-12 mx-4"
            variants={scaleIn}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent text-[#F4FBF8] text-sm sm:text-base font-normal font-articulat outline-none border-none placeholder:text-[rgba(244,251,248,0.30)] text-left"
            />
            <button className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#29AB87] flex flex-shrink-0 justify-center items-center cursor-pointer hover:bg-[#238f73] transition-colors rounded-full">
              <span className="text-white text-sm sm:text-base font-medium font-articulat whitespace-nowrap">
                Book a Demo
              </span>
            </button>
          </motion.div>

          {/* Email Input and CTA - Desktop */}
          <motion.div
            className="hidden lg:flex flex-row bg-[#134E3D] rounded-[40px] p-0 w-full max-w-[488px] mb-9 overflow-hidden mx-4"
            variants={scaleIn}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-8 py-4 bg-transparent text-[#F4FBF8] text-[20px] font-normal font-articulat leading-8 outline-none border-none placeholder:text-[rgba(244,251,248,0.30)] text-left"
            />
            <a
              href="https://cal.com/gana-finrep/intro?duration=15"
              target="_blank"
              rel="noopener noreferrer"
              className="px-[30px] py-4 bg-[#29AB87] flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#238f73] transition-colors rounded-[40px] ml-[-20px] z-10"
            >
              <span className="text-white text-[20px] font-medium font-articulat leading-8 whitespace-nowrap">
                Request Access
              </span>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center items-start gap-3 sm:gap-4 md:gap-6 lg:gap-9 mb-6 sm:mb-9 md:mb-12 lg:mb-[74px] px-4"
            variants={staggerFast}
          >
            {/* Trusted by leading CFO teams */}
            <motion.div
              className="flex items-center gap-1"
              variants={fadeIn}
              transition={{ duration: 0.4 }}
            >
              <UserRoundCheck className="w-6 h-6 text-[#269C7B]" />
              <div className="text-center text-[rgba(255,255,255,0.40)] text-sm md:text-base font-normal font-articulat leading-6 break-words">
                Trusted by leading CFO teams
              </div>
            </motion.div>

            {/* Backed by Accel */}
            <motion.div
              className="flex items-center gap-1"
              variants={fadeIn}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center text-[rgba(255,255,255,0.40)] text-sm md:text-base font-normal font-articulat leading-6 break-words">
                Backed by
              </div>
              <div className="w-[49.90px] h-4 relative flex-shrink-0">
                <Image
                  src="/assets/company_logos/accel-badge.png"
                  alt="Accel logo"
                  width={50}
                  height={16}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Secure, SoC-II and ISO Compliant */}
            <motion.div
              className="flex items-center gap-1"
              variants={fadeIn}
              transition={{ duration: 0.4 }}
            >
              <ShieldCheck className="w-6 h-6 text-[#269C7B]" />
              <div className="text-center text-[rgba(255,255,255,0.40)] text-sm md:text-base font-normal font-articulat leading-6 break-words">
                Secure, SOC Type II and ISO 27001
              </div>
            </motion.div>
          </motion.div>

          {/* Company Logos Section - Ticker/Marquee */}
          <motion.div
            className="w-full lg:mb-18.75"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center text-[rgba(255,255,255,0.40)] text-sm mb-6 w-full px-4">
              Built and used by professionals from
            </div>

            {/* Logo Ticker with fade mask */}
            <div
              className="w-full overflow-hidden py-2"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <div className="logo-ticker-track">
                {/* Duplicate logos for seamless infinite scroll */}
                {[...companyLogos, ...companyLogos].map((logo, i) => (
                  <div key={`${logo.id}-${i}`} className="logo-ticker-item">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={200}
                      height={50}
                      className="object-contain h-[50px] lg:h-[70px] w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
