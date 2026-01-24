"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, BarChart3, BookOpen, FileText, Landmark, SquareArrowOutUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

// Duration for each slide in milliseconds
const SLIDE_DURATION = 5000;

// --- Features Data ---
const features = [
    {
        id: "sec-reporting",
        title: "For SEC Reporting",
        shortDescription: "Manual cross-checks and version control nightmares",
        description: "SEC filings combine roll forwards, new guidance, peer alignment, and reviewer feedback under tight deadlines. Fragmented research and drafting create rework and late stage risk.",
        cta: "See how Finrep makes SEC easy",
        ctaDesktop: "Fix SEC filing workflows",
        icon: FileText,
        statValue: "95 hours /wk",
        statLabel: "Saved with Finrep",
    },
    {
        id: "technical-accounting",
        title: "For Technical Accounting",
        shortDescription: "Complex guidance interpretation challenges",
        description: "Accounting decisions require interpreting evolving guidance and defending conclusions under audit scrutiny. Scattered research across handbooks and filings slows resolution.",
        cta: "See Technical Accounting workflows",
        ctaDesktop: "See Technical Accounting workflows",
        icon: BookOpen,
        statValue: "60% faster",
        statLabel: "Research completion",
    },
    {
        id: "investor-relations",
        title: "For Investor Relations",
        shortDescription: "Last minute coordination and peer analysis",
        description: "Investor messaging must align with disclosures while reflecting peer and market context. Manual peer analysis and last minute coordination slow preparation.",
        cta: "See IR workflows",
        ctaDesktop: "See IR workflows",
        icon: BarChart3,
        statValue: "3x faster",
        statLabel: "Earnings prep",
    },
    {
        id: "corporate-counsel",
        title: "For Corporate Counsel",
        shortDescription: "Deadline pressure and filing status tracking",
        description: "Insider reporting carries strict deadlines and high visibility. Manual tracking of ownership changes and filing status increases compliance risk.",
        cta: "See Legal workflows",
        ctaDesktop: "See Legal workflows",
        icon: Landmark,
        statValue: "Zero",
        statLabel: "Missed deadlines",
    },
];

export default function BuiltForCFO() {
    const [activeTab, setActiveTab] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    // Auto-advance to next slide (desktop only behavior can be added)
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
        <div id="white-section-start" className="w-full bg-white py-12 lg:py-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] lg:px-[120px] flex flex-col gap-6 lg:gap-16">

                {/* Mobile Header - Centered & Stacked */}
                <div className="lg:hidden flex flex-col items-center gap-4">
                    <h2 className="text-[#0E0F10] text-[28px] font-medium font-articulat leading-tight text-center">
                        Built for the
                    </h2>
                    <div className="px-6 py-3 rounded-lg border border-[#D9DBDD]">
                        <span className="text-[#FFAF42] text-4xl font-medium font-bricolage leading-tight">
                            Office of the CFO
                        </span>
                    </div>
                    <p className="text-[#5E6469] text-base font-normal font-articulat leading-relaxed text-center max-w-[372px]">
                        <span className="font-semibold">CFO teams need a system</span> - not just software - that ensures consistency, traceability, and control across every disclosure touchpoint.
                    </p>
                </div>

                {/* Desktop Header */}
                <div className="hidden lg:flex flex-col gap-12">
                    <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat leading-tight whitespace-nowrap">
                        Built for the <span className="px-4 py-2 rounded-lg border border-[#D9DBDD] text-[#FFAF42] inline-block ml-2 font-bricolage">Office of the CFO</span>
                    </h2>

                    <div className="flex flex-row gap-[13px] items-center justify-between">
                        <div className="w-full max-w-[800px]">
                            <p className="text-[#5E6469] text-xl font-normal font-articulat leading-[30px]">
                                CFO teams need a system - not just software - that ensures
                                consistency,<br className="hidden md:block" /> traceability, and control across every disclosure
                                touchpoint.
                            </p>
                        </div>

                        <div className="w-px h-12 bg-[#C7C9CC] rounded-[20px]"></div>

                        <div className="px-4 py-2 bg-[#ADEBDA] rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#9ddecb] transition-colors whitespace-nowrap">
                            <Image src="/assets/icons/Ellipse 1.svg" alt="User" width={24} height={24} className="rounded-full" />
                            <span className="text-[#134E3D] text-base font-medium font-articulat">Why We&apos;re Building Finrep</span>
                            <SquareArrowOutUpRight className="w-4 h-4 text-[#134E3D]" />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Accordion Style */}
                <div className="lg:hidden flex flex-col will-change-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isActive = activeTab === index;

                        return (
                            <div
                                key={feature.id}
                                className={cn(
                                    "border-b transition-colors duration-300",
                                    isActive ? "border-[#269C7B]" : "border-[#D9DBDD]"
                                )}
                            >
                                <button
                                    onClick={() => handleTabClick(index)}
                                    className="w-full py-4 flex items-center gap-4 text-left"
                                >
                                    <div className={cn(
                                        "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                                        isActive
                                            ? "bg-[#29AB87]"
                                            : "bg-[#D9D9D9]"
                                    )}>
                                        <Icon className={cn(
                                            "w-5 h-5 transition-colors duration-300",
                                            isActive ? "text-white" : "text-[#5E6469]"
                                        )} />
                                    </div>
                                    <span className={cn(
                                        "text-xl font-medium font-articulat leading-8 tracking-[0.4px]",
                                        isActive ? "text-[#0E0F10]" : "text-[#0E0F10]"
                                    )}>
                                        {feature.title}
                                    </span>
                                </button>

                                {/* Expanded Content */}
                                <div
                                    className={cn(
                                        "grid transition-all duration-300 ease-in-out",
                                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-4 flex flex-col gap-4">
                                            {/* Short Description */}
                                            <p className="text-[#3F4346] text-sm font-normal font-articulat leading-relaxed tracking-[0.28px]">
                                                {feature.shortDescription}
                                            </p>

                                            {/* Mobile Stats Card */}
                                            <MobileStatsCard feature={feature} />

                                            {/* CTA Link */}
                                            <button className="flex items-center gap-2 text-[#29AB87] text-sm font-medium font-articulat">
                                                {feature.cta}
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex relative flex-row gap-16 items-start">
                    {/* Left Column: Slideshow List */}
                    <div className="w-5/12 flex flex-col">
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
                    <div className="w-7/12 sticky top-24 h-fit">
                        <RightSideCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Mobile Stats Card Component
function MobileStatsCard({ feature }: { feature: typeof features[0] }) {
    return (
        <div className="w-full aspect-square max-h-[373px] relative overflow-hidden rounded-lg bg-[#0D352A]">
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(231deg, rgba(0, 135, 67, 0.3) 1%, rgba(13, 53, 42, 0) 48%, #03251B 100%)'
                }}
            />

            {/* Floating Dollar Signs */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute text-[#29AB87] text-lg font-medium"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + (i % 3) * 20}%`,
                        }}
                    >
                        $
                    </span>
                ))}
            </div>

            {/* Stats Content */}
            <div className="absolute top-6 left-6 right-6 pb-4 border-b border-[#134E3D]">
                <h3 className="text-white text-4xl font-medium font-articulat leading-tight tracking-[0.72px]">
                    {feature.statValue}
                </h3>
                <p className="text-[#F9F9FA] text-base font-normal font-articulat mt-2">
                    {feature.statLabel}
                </p>
            </div>

            {/* Tags */}
            <div className="absolute left-6 top-40 flex flex-col gap-2">
                {['Compliance Risk', 'Monitoring Industry Trends', 'FASB Guideline Updates', 'SEC Comment Letters', 'Peer Benchmarking'].map((tag) => (
                    <div
                        key={tag}
                        className="px-2 py-1 bg-[#0D352A] border border-[#075E37] rounded text-[#ADEBDA] text-[9px] font-medium font-articulat"
                    >
                        {tag}
                    </div>
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute right-6 bottom-20 w-[190px] h-[135px] border border-white/20 backdrop-blur-sm" />
            <div className="absolute right-4 bottom-8 w-12 h-12 bg-gradient-to-br from-[#23B18A] to-[#23B18A]/30 rounded-xl border border-white/45 backdrop-blur-lg flex items-center justify-center">
                <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0V22M0 7.5H15M0 14.5H15" stroke="white" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    );
}

interface FeatureItemProps {
    feature: {
        id: string;
        title: string;
        description: string;
        ctaDesktop: string;
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

                    {/* Expanded Content - Framer Motion for smooth desktop animation */}
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
                                        {feature.ctaDesktop}
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
