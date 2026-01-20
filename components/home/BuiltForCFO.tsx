"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

// --- Left Side: Accordion Data ---
const features = [
    {
        id: "sec-reporting",
        title: "For SEC Reporting",
        description: "Manual cross-checks and version control nightmares",
        cta: "See how Finrep makes SEC easy",
    },
    {
        id: "technical-accounting",
        title: "For Technical Accounting",
        description: "Hours spent searching for relevant guidance and precedents",
        cta: "See Technical Accounting workflows",
    },
    {
        id: "controllers",
        title: "For Controllers",
        description: "Endless reconciliation loops and data integrity risks",
        cta: "See Controller workflows",
    },
    {
        id: "investor-relations",
        title: "For Investor Relations",
        description: "Uncertainty in market sentiment and peer benchmarking",
        cta: "See IR workflows",
    },
    {
        id: "audit-teams",
        title: "For Audit Teams",
        description: "Scattered evidence and painful audit walkthroughs",
        cta: "See Audit support",
    },
];

export default function BuiltForCFO() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] flex flex-col gap-16">
                {/* Header */}
                <div className="flex flex-col gap-12">
                    <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat leading-tight whitespace-nowrap">
                        Built for the <span className="px-4 py-2 rounded-lg border border-[#D9DBDD] text-[#FFAF42] inline-block ml-2">Office of the CFO</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[13px] items-start lg:items-center justify-between">
                        <div className="w-full max-w-[800px]">
                            <p className="text-[#5E6469] text-xl font-normal font-articulat leading-[30px]">
                                CFO teams need a system - not just software - that ensures
                                consistency, traceability, and control across every disclosure
                                touchpoint.
                            </p>
                        </div>

                        <div className="hidden lg:block w-px h-12 bg-[#C7C9CC] rounded-[20px]"></div>

                        <div className="px-4 py-2 bg-[#ADEBDA] rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#9ddecb] transition-colors whitespace-nowrap">
                            {/* Placeholder for user avatar */}
                            <Image src="/assets/icons/Ellipse 1.svg" alt="User" width={24} height={24} className="rounded-full" />
                            <span className="text-[#134E3D] text-base font-medium font-articulat">Why We're Building Finrep</span>
                            <SquareArrowOutUpRight className="w-4 h-4 text-[#134E3D]" />
                        </div>
                    </div>
                </div>


                {/* Main Content: 2 Columns */}
                <div className="relative flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column: Scrollable List */}
                    <div className="w-full lg:w-5/12 flex flex-col py-12">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={feature.id}
                                feature={feature}
                                index={index}
                                setActiveTab={setActiveTab}
                                isActive={activeTab === index}
                            />
                        ))}
                    </div>

                    {/* Right Column: Sticky Card */}
                    <div className="hidden lg:block w-full lg:w-7/12 sticky top-24 h-fit">
                        <RightSideCard />
                    </div>
                </div>

                {/* Mobile Right Card */}
                <div className="lg:hidden w-full">
                    <RightSideCard />
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ feature, index, setActiveTab, isActive }: { feature: any, index: number, setActiveTab: (i: number) => void, isActive: boolean }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveTab(index);
        }
    }, [isInView, index, setActiveTab]);

    return (
        <div
            ref={ref}
            className={cn(
                "py-8 border-b border-[#D9DBDD] last:border-0 relative transition-opacity duration-500",
                isActive ? "opacity-100" : "opacity-40"
            )}
        >
            <div className="flex items-start gap-4">
                <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                    // Using green gradient or similar for active, grey for inactive
                    isActive ? "bg-gradient-to-b from-[#23B18A] to-[#104233] shadow-lg" : "bg-[#D9D9D9]"
                )}>
                    {isActive && (
                        <span className="text-white font-medium text-lg">N</span>
                    )}
                </div>

                <div className="flex flex-col gap-4 pt-2">
                    <h3 className="text-xl font-medium font-articulat text-[#0E0F10]">
                        {feature.title}
                    </h3>

                    <motion.div
                        layout
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-4">
                            <p className="text-[#5E6469] text-base font-normal leading-relaxed max-w-sm">
                                {feature.description}
                            </p>
                            <div className="flex items-center gap-2 text-[#29AB87] font-medium cursor-pointer hover:underline text-base group">
                                {feature.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

// --- Right Side Component ---
function RightSideCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const pill1Ref = useRef<HTMLDivElement>(null);
    const pill2Ref = useRef<HTMLDivElement>(null);
    const pill3Ref = useRef<HTMLDivElement>(null);
    const pill4Ref = useRef<HTMLDivElement>(null);
    const pill5Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="w-full h-[600px] md:w-[592px] md:h-[594px] relative bg-[#0D352A] rounded-lg overflow-hidden shrink-0"
        >
            {/* Background Gradient */}
            <div className="absolute left-[592px] top-[594px] w-[592px] h-[594px] transform rotate-180 origin-top-left bg-gradient-to-tr from-[#008743] via-transparent to-[#03251B] rounded-lg pointer-events-none"></div>

            {/* Dollar Signs Overlay */}
            <div className="absolute left-[260px] top-[-318.98px] w-[862.16px] h-[572.98px] opacity-20 pointer-events-none">
                <div className="absolute left-[519px] top-[0px] text-[#29AB87] text-[26.94px] font-medium font-clash leading-[33.68px]">$</div>
                <div className="absolute left-[380px] top-[245px] text-[#29AB87] text-[26.94px] font-medium font-clash leading-[33.68px]">$</div>
                <div className="absolute left-[472px] top-[492px] text-[#29AB87] text-[26.94px] font-medium font-clash leading-[33.68px]">$</div>
                <div className="absolute left-[100px] top-[541px] text-[#29AB87] text-[26.94px] font-medium font-clash leading-[33.68px]">$</div>
                <div className="absolute left-[194px] top-[344px] text-[#29AB87] text-[26.94px] font-medium font-clash leading-[33.68px]">$</div>
            </div>

            {/* '95 hours /wk' Text Block */}
            <div className="absolute left-12 top-10 flex flex-col gap-4 z-10">
                <div className="text-white text-5xl font-medium font-articulat leading-[76.80px] tracking-wide">
                    95 hours /wk
                </div>
                <div className="text-[#F9F9FA] text-2xl font-normal font-articulat leading-[38.40px] tracking-wide opacity-90">
                    Saved with Finrep
                </div>
            </div>

            {/* List of Pills (Sources) */}
            <div className="absolute left-12 top-[308px] flex flex-col gap-3 z-20">
                <Pill ref={pill1Ref}>Compliance Risk</Pill>
                <Pill ref={pill2Ref}>Monitoring Industry Trends</Pill>
                <Pill ref={pill3Ref}>FASB Guideline Updates</Pill>
                <Pill ref={pill4Ref}>SEC Comment Letters</Pill>
                <Pill ref={pill5Ref}>Peer Benchmarking</Pill>
            </div>

            {/* Glass Box Container (Visual only, behind the logo logic) */}
            <div className="hidden absolute left-[172.39px] top-[325.69px] w-[303.12px] h-[215.14px] outline outline-[0.95px] outline-white outline-offset-[-0.47px] backdrop-blur-[23.65px] rounded-xl pointer-events-none"></div>

            {/* Target Logo */}
            <div
                ref={logoRef}
                className="absolute left-[462px] top-[416px] w-20 h-20 rounded-[20px] z-20 flex items-center justify-center border border-white/40 shadow-[0px_2.5px_12.9px_rgba(0,0,0,0.12)] backdrop-blur-[129px]"
                style={{
                    background: "linear-gradient(150deg, #23B18A 0%, rgba(35, 177, 138, 0.30) 100%)"
                }}
            >
                {/* Logo graphics */}
                <div className="relative w-8 h-10">
                    <div className="absolute left-0 bottom-0 w-6 h-9 bg-gradient-to-t from-white to-white opacity-100 rounded-sm"></div>
                    <div className="absolute right-0 top-0 w-[9px] h-[9px] bg-white rounded-full"></div>
                </div>
            </div>

            {/* Beams */}
            <AnimatedBeam containerRef={containerRef} fromRef={pill1Ref} toRef={logoRef} startXOffset={10} curvature={-50} pathColor="#29AB87" gradientStartColor="#3FE2B3" gradientStopColor="#29AB87" delay={0} duration={3} />
            <AnimatedBeam containerRef={containerRef} fromRef={pill2Ref} toRef={logoRef} startXOffset={10} curvature={-30} pathColor="#29AB87" gradientStartColor="#3FE2B3" gradientStopColor="#29AB87" delay={0.5} duration={4} />
            <AnimatedBeam containerRef={containerRef} fromRef={pill3Ref} toRef={logoRef} startXOffset={10} curvature={0} pathColor="#29AB87" gradientStartColor="#3FE2B3" gradientStopColor="#29AB87" delay={1} duration={3} />
            <AnimatedBeam containerRef={containerRef} fromRef={pill4Ref} toRef={logoRef} startXOffset={10} curvature={30} pathColor="#29AB87" gradientStartColor="#3FE2B3" gradientStopColor="#29AB87" delay={1.5} duration={5} />
            <AnimatedBeam containerRef={containerRef} fromRef={pill5Ref} toRef={logoRef} startXOffset={10} curvature={50} pathColor="#29AB87" gradientStartColor="#3FE2B3" gradientStopColor="#29AB87" delay={2} duration={4} />
        </div>
    );
}

const Pill = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
    return (
        <div
            ref={ref}
            className="p-2 bg-[#0D352A] rounded-lg border border-[#075E37] flex items-center justify-center gap-[5px] z-20"
        >
            <div className="text-[#ADEBDA] text-sm font-medium font-articulat leading-[22.40px] tracking-wide whitespace-nowrap">
                {children}
            </div>
        </div>
    )
});
Pill.displayName = "Pill";
