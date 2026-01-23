"use client";

import Image from "next/image";
import Header from "../layout/Header";
import { UserRoundCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const staggerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05
        }
    }
};

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen bg-[#0D352A] overflow-hidden">
            {/* Fixed Header */}
            <Header variant="light" />

            {/* Container for content */}
            <div className="relative w-full max-w-[1440px] mx-auto h-full flex flex-col items-center pt-[72px]">
                {/* Hero Content - Centered */}
                <motion.div
                    className="flex flex-col items-center mt-[73px] w-full px-4 md:px-0"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Announcement Banner with gradient border */}
                    <motion.div
                        className="p-[1px] rounded-full shadow-[0px_0px_16px_rgba(0,0,0,0.25)] mb-8 max-w-full"
                        style={{
                            background: 'linear-gradient(90deg, #134E3D 0%, rgba(255, 175, 66, 0.3) 50%, #134E3D 100%)'
                        }}
                        variants={fadeInDown}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-2 px-6 py-2 bg-[#134E3D] rounded-full overflow-hidden">
                            {/* Fina Icon */}
                            <Image
                                src="/assets/icons/Group.svg"
                                alt="Fina icon"
                                width={20}
                                height={20}
                                className="animate-spin flex-shrink-0"
                            />

                            <div className="text-[#F4FBF8] text-sm md:text-base font-medium font-articulat truncate">
                                Fina - Our most Advanced AI is Live
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        className="w-full flex justify-center mb-8 px-4"
                        variants={fadeInUp}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-white text-4xl md:text-[64px] font-normal font-articulat leading-tight md:leading-[89.60px] text-center">
                                Financial Disclosure Intelligence
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mt-2">
                                <div className="text-white text-4xl md:text-[64px] font-normal font-articulat leading-tight md:leading-[89.60px]">
                                    You Can
                                </div>
                                <motion.div
                                    className="h-14 md:h-[92px] px-6 md:px-[37px] rounded-lg border border-[#FFAF42] flex justify-center items-center"
                                    initial={{ opacity: 0, scale: 0.9, borderColor: "rgba(255, 175, 66, 0)" }}
                                    animate={{ opacity: 1, scale: 1, borderColor: "rgba(255, 175, 66, 1)" }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="text-[#FFAF42] text-3xl md:text-[64px] font-normal font-bricolage leading-tight md:leading-[89.60px]">
                                        Trust
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Descriptive Text */}
                    <motion.div
                        className="w-full max-w-[822px] text-center text-[#F4FBF8] text-lg md:text-[20px] font-normal font-articulat leading-snug md:leading-[30px] break-words mb-12 px-4"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Analyze, compare, and generate insights across SEC, Section 16, 10K,
                        10Q filings with enterprise grade accuracy and audit ready
                        traceability.
                    </motion.div>

                    {/* Email Input and CTA */}
                    <motion.div
                        className="flex flex-col md:flex-row bg-[#134E3D] rounded-[40px] p-0 w-full max-w-[488px] mb-12 overflow-hidden mx-4"
                        variants={scaleIn}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="flex-1 px-8 py-4 bg-transparent text-[#F4FBF8] text-lg md:text-[20px] font-normal font-articulat leading-8 outline-none border-none placeholder:text-[rgba(244,251,248,0.30)] text-center md:text-left"
                        />
                        <button className="px-[30px] py-4 bg-[#29AB87] w-full md:w-auto flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#238f73] transition-colors rounded-[40px] md:ml-[-20px] z-10">
                            <div className="text-white text-lg md:text-[20px] font-medium font-articulat leading-8 whitespace-nowrap">
                                Request Access
                            </div>
                        </button>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        className="flex flex-wrap justify-center items-start gap-4 md:gap-9 mb-12 md:mb-[120px] px-4"
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
                                    src="/assets/company_logos/image.png"
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
                                Secure, SoC-II and ISO Compliant
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Company Logos Placeholders */}
                    <motion.div
                        className="w-full flex justify-center items-center gap-3 md:gap-4 mb-20 px-4 flex-wrap"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="text-center text-[rgba(255,255,255,0.40)] text-sm mb-4 w-full">
                            Built and used by professionals from
                        </div>
                        {/* 6 White Boxes as placeholders */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-[calc(33.333%-8px)] md:w-[120px] h-[50px] md:h-[80px] bg-white/10 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.8 + (i * 0.1),
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            />
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
