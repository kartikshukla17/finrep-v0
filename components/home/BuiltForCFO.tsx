"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, SquareArrowOutUpRight, FileText, BookOpen, BarChart3, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";


// --- Left Side: Accordion Data ---
const features = [
    {
        id: "For SEC Reporting",
        title: "For SEC Reporting",
        description: "SEC filings combine roll forwards, new guidance, peer alignment, and reviewer feedback under tight deadlines. Fragmented research and drafting create rework and late stage risk.",
        cta: "See how Finrep makes SEC easy",
        icon: FileText,
    },
    {
        id: "For Technical Accounting",
        title: "For Technical Accounting",
        description: "Accounting decisions require interpreting evolving guidance and defending conclusions under audit scrutiny. Scattered research across handbooks and filings slows resolution.",
        cta: "See Technical Accounting workflows",
        icon: BookOpen,
    },
    {
        id: "For Investor Relations",
        title: "For Controllers",
        description: "Investor messaging must align with disclosures while reflecting peer and market context. Manual peer analysis and last minute coordination slow preparation.",
        cta: "See Controller workflows",
        icon: BarChart3,
    },
    {
        id: "For Corporate Counsel",
        title: "For Investor Relations",
        description: "Insider reporting carries strict deadlines and high visibility. Manual tracking of ownership changes and filing status increases compliance risk.",
        cta: "See IR workflows",
        icon: Landmark,
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
                                consistency,<br /> traceability, and control across every disclosure
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
    const Icon = feature.icon;

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
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                    isActive
                        ? "bg-[#29AB87] shadow-lg"
                        : "bg-[#E8F5F1]"
                )}>
                    <Icon
                        className={cn(
                            "w-6 h-6 transition-colors duration-300",
                            isActive ? "text-white" : "text-[#29AB87]"
                        )}
                    />
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

        >
            <img src="/assets/images/image copy 3.png" alt="assets" className="object-cover rounded-lg w-full h-full" />
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
