"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, SquareArrowOutUpRight, FileText, BookOpen, BarChart3, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

// Duration for each slide in milliseconds
const SLIDE_DURATION = 5000;

// --- Left Side: Accordion Data ---
const features = [
    {
        id: "sec-reporting",
        title: "For SEC Reporting",
        description: "SEC filings combine roll forwards, new guidance, peer alignment, and reviewer feedback under tight deadlines. Fragmented research and drafting create rework and late stage risk.",
        cta: "Fix SEC filing workflows",
        icon: FileText,
    },
    {
        id: "technical-accounting",
        title: "For Technical Accounting",
        description: "Accounting decisions require interpreting evolving guidance and defending conclusions under audit scrutiny. Scattered research across handbooks and filings slows resolution.",
        cta: "See Technical Accounting workflows",
        icon: BookOpen,
    },
    {
        id: "investor-relations",
        title: "For Investor Relations",
        description: "Investor messaging must align with disclosures while reflecting peer and market context. Manual peer analysis and last minute coordination slow preparation.",
        cta: "See IR workflows",
        icon: BarChart3,
    },
    {
        id: "corporate-counsel",
        title: "For Corporate Counsel",
        description: "Insider reporting carries strict deadlines and high visibility. Manual tracking of ownership changes and filing status increases compliance risk.",
        cta: "See Legal workflows",
        icon: Landmark,
    },
];

export default function BuiltForCFO() {
    const [activeTab, setActiveTab] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    // Auto-advance to next slide
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveTab((prev) => (prev + 1) % features.length);
            setAnimationKey((k) => k + 1);
        }, SLIDE_DURATION);

        return () => clearTimeout(timer);
    }, [activeTab, animationKey]);

    // Handle manual tab change
    const handleTabClick = useCallback((index: number) => {
        if (index === activeTab) return;
        setActiveTab(index);
        setAnimationKey((k) => k + 1);
    }, [activeTab]);

    return (
        <div id="white-section-start" className="w-full bg-white py-24">
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
                                consistency,<br className="hidden md:block" /> traceability, and control across every disclosure
                                touchpoint.
                            </p>
                        </div>

                        <div className="hidden lg:block w-px h-12 bg-[#C7C9CC] rounded-[20px]"></div>

                        <div className="px-4 py-2 bg-[#ADEBDA] rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#9ddecb] transition-colors whitespace-nowrap">
                            <Image src="/assets/icons/Ellipse 1.svg" alt="User" width={24} height={24} className="rounded-full" />
                            <span className="text-[#134E3D] text-base font-medium font-articulat">Why We&apos;re Building Finrep</span>
                            <SquareArrowOutUpRight className="w-4 h-4 text-[#134E3D]" />
                        </div>
                    </div>
                </div>

                {/* Main Content: 2 Columns */}
                <div className="relative flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column: Slideshow List */}
                    <div className="w-full lg:w-5/12 flex flex-col">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={feature.id}
                                feature={feature}
                                isActive={activeTab === index}
                                animationKey={animationKey}
                                onClick={() => handleTabClick(index)}
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

interface FeatureItemProps {
    feature: {
        id: string;
        title: string;
        description: string;
        cta: string;
        icon: React.ComponentType<{ className?: string }>;
    };
    isActive: boolean;
    animationKey: number;
    onClick: () => void;
}

function FeatureItem({ feature, isActive, animationKey, onClick }: FeatureItemProps) {
    const Icon = feature.icon;

    return (
        <div
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
            className={cn(
                "py-6 relative text-left w-full cursor-pointer select-none",
                "transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
            )}
        >
            <div className="flex items-start gap-4">
                {/* Icon Circle */}
                <div
                    className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                        isActive
                            ? "bg-[#29AB87] shadow-[inset_0px_-8px_16px_rgba(0,0,0,0.25)]"
                            : "bg-[#E8F5F1]"
                    )}
                >
                    <Icon
                        className={cn(
                            "w-6 h-6 transition-colors duration-300",
                            isActive ? "text-white" : "text-[#29AB87]"
                        )}
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1 pt-1">
                    <h3 className="text-xl font-medium font-articulat text-[#0E0F10] leading-8 tracking-[0.4px]">
                        {feature.title}
                    </h3>

                    {/* Expanded Content - Only shown when active */}
                    <AnimatePresence mode="wait">
                        {isActive && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-col gap-4 pt-2">
                                    <p className="text-[#3F4346] text-base font-normal leading-[25.6px] tracking-[0.32px]">
                                        {feature.description}
                                    </p>
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15, duration: 0.25 }}
                                        className="flex items-center gap-2 text-[#29AB87] font-medium hover:underline text-base"
                                    >
                                        {feature.cta}
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Progress Bar Border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9DBDD] overflow-hidden">
                {isActive && (
                    <div
                        key={`progress-${feature.id}-${animationKey}`}
                        className="h-full bg-[#269C7B] animate-progress-fill"
                    />
                )}
            </div>
        </div>
    );
}

// --- Right Side Component ---
function RightSideCard() {
    return (
        <div className="w-full h-full">
            <Image
                src="/assets/images/image copy 3.png"
                alt="Finrep Platform"
                width={800}
                height={600}
                className="object-cover rounded-lg w-full h-full"
            />
        </div>
    );
}
