"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";


const sections = [
    {
        id: 1,
        title: "Minimize Scrutiny with Comment Letter Explorer",
        description: "Leverage our AI to get insights, summaries, conclusion, and focus areas-tagged, so you know what triggers scrutiny.",
        benefits: [
            { text: "Early SEC focus visibility", badge: null },
            { text: "Fewer Late Replies", badge: null },
            { text: "Reduced Comment Risk", badge: "Most Liked" }
        ]
    },
    {
        id: 2,
        title: "SEC-Backed Research with Ask Fina",
        description: "Get citation-backed answers across SEC filings, guidance, peer disclosures, and internal documents.",
        benefits: [
            { text: "SEC filing citations", badge: null },
            { text: "Peer disclosure precedent", badge: null },
            { text: "Inspectable source trails", badge: "Most Liked" }
        ]
    },
    {
        id: 3,
        title: "Peer Benchmarking & Comparisons",
        description: "Compare your disclosures against industry peers to identify gaps and align with best practices.",
        benefits: [
            { text: "Industry peer analysis", badge: null },
            { text: "Gap identification", badge: null },
            { text: "Best practice alignment", badge: "Most Liked" }
        ]
    },
    {
        id: 4,
        title: "Automated Draft Generation",
        description: "Generate disclosure drafts automatically with proper citations and compliance checks built-in.",
        benefits: [
            { text: "Auto-generated drafts", badge: null },
            { text: "Built-in compliance checks", badge: null },
            { text: "Citation management", badge: "Most Liked" }
        ]
    },
    {
        id: 5,
        title: "Audit-Ready Documentation",
        description: "Maintain complete traceability of all research, decisions, and source materials for audit compliance.",
        benefits: [
            { text: "Full traceability", badge: null },
            { text: "Source citations", badge: null },
            { text: "Audit trail", badge: "Most Liked" }
        ]
    }
];

// Navigation tags
const tags = [
    "SEC Reporting",
    "Technical Accounting",
    "Controllers",
    "Investor Relations",
    "For Audit Teams"
];

export default function CommentLetterExplorer() {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className="w-full bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-[60px]">
                <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-start items-start gap-12">
                        {/* Navigation Tags */}
                        <div className="w-full rounded-[50px] flex justify-start items-center gap-2 flex-wrap sticky top-0 bg-white z-10 pb-[48px] pt-[24px]">
                            {tags.map((tag, idx) => {
                                const isActive = idx === activeSection;
                                return (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "px-[19px] py-2 rounded-[60px] flex justify-center items-center cursor-pointer transition-all",
                                            isActive
                                                ? "bg-[#D6F5EC] shadow-[0px_0px_8px_rgba(0,135,67,0.09)_inset] border border-[#21886B]"
                                                : "bg-white border border-[#D9DBDD] hover:border-[#29AB87]"
                                        )}
                                    >
                                        <span className={cn(
                                            "text-sm font-articulat leading-[19.60px]",
                                            isActive ? "text-[#134E3D] font-medium" : "text-[#0E0F10] font-normal"
                                        )}>
                                            {tag}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Main Content with Numbered List and Scrollable Sections */}
                        <div className="w-full flex justify-start items-start gap-8 md:gap-16">
                            {/* Numbered List - Fixed/Sticky */}
                            <div className="flex flex-col justify-start items-start sticky top-[140px]">
                                {sections.map((section, index) => (
                                    <div key={section.id} className="flex justify-start items-center gap-1">
                                        <div className={cn(
                                            "w-px h-20 transition-colors duration-300",
                                            activeSection === index ? "bg-[#29AB87]" : "bg-[#ECEDEE]"
                                        )}></div>
                                        <div className={cn(
                                            "text-xs font-normal font-articulat transition-colors duration-300 w-3",
                                            activeSection === index ? "text-[#29AB87]" : "text-[#0E0F10]"
                                        )}>
                                            {section.id}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Content Sections */}
                            <div className="flex-1 flex flex-col justify-start items-start">
                                {sections.map((section, index) => (
                                    <SectionItem
                                        key={section.id}
                                        section={section}
                                        index={index}
                                        setActiveSection={setActiveSection}
                                        isActive={activeSection === index}
                                        isLast={index === sections.length - 1}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Interface Mockup (Sticky) */}
                    <div className="hidden lg:block flex-1 sticky top-24 h-fit">
                        <InterfaceMockup />
                    </div>
                </div>

                {/* Mobile Interface Mockup */}
                <div className="lg:hidden mt-12">
                    <InterfaceMockup />
                </div>
            </div>
        </div>
    );
}

function SectionItem({ section, index, setActiveSection, isActive, isLast }: {
    section: typeof sections[0],
    index: number,
    setActiveSection: (i: number) => void,
    isActive: boolean,
    isLast: boolean
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveSection(index);
        }
    }, [isInView, index, setActiveSection]);

    return (
        <div
            ref={ref}
            className={cn(
                "transition-opacity duration-500",
                isLast ? "" : "min-h-[400px] pb-24",
                isActive ? "opacity-100" : "opacity-30"
            )}
        >
            <div className="flex flex-col justify-start items-start gap-9">
                {/* Title and Description */}
                <div className="flex flex-col justify-start items-start gap-6">
                    <h3 className="max-w-[477px] text-[#0E0F10] text-2xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                        {section.title}
                    </h3>
                    <p className="max-w-[525px] text-[#5E6469] text-base md:text-xl font-normal font-articulat leading-relaxed md:leading-7">
                        {section.description}
                    </p>
                </div>

                {/* Benefits List */}
                <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col justify-start items-start gap-3"
                >
                    {section.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex justify-center items-center gap-2.5">
                            {/* Checkbox Icon */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" rx="4" fill="#0E0F10" />
                                <path d="M10 0C10 5.52285 14.4772 10 20 10C14.4772 10 10 14.4772 10 20C10 14.4772 5.52285 10 0 10C5.52285 10 10 5.52285 10 0Z" fill="#1F2322" />
                                <path d="M10 0C10 5.52285 14.4772 10 20 10C14.4772 10 10 14.4772 10 20C10 14.4772 5.52285 10 0 10C5.52285 10 10 5.52285 10 0Z" fill="#0E0F10" />
                                <path d="M10 0C10 5.52285 14.4772 10 20 10C14.4772 10 10 14.4772 10 20C10 14.4772 5.52285 10 0 10C5.52285 10 10 5.52285 10 0Z" fill="#0E0F10" />
                                <path d="M10 0C10 5.52285 14.4772 10 20 10C14.4772 10 10 14.4772 10 20C10 14.4772 5.52285 10 0 10C5.52285 10 10 5.52285 10 0Z" fill="#F9FAFA" />
                            </svg>

                            <div className="text-[#0E0F10] text-base md:text-xl font-medium font-articulat leading-7">
                                {benefit.text}
                            </div>
                            {benefit.badge && (
                                <div className="p-1 bg-gradient-to-br from-[#CC1C0F] to-[#FFAF42] rounded-lg flex justify-center items-center gap-1">
                                    <Image
                                        src="/assets/icons/solar_star-fall-2-bold-duotone.svg"
                                        alt="Star"
                                        width={16}
                                        height={16}
                                    />
                                    <div className="text-white text-xs font-semibold font-articulat leading-[16.80px]">
                                        {benefit.badge}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex justify-start items-center gap-4 mt-6"
                >
                    <button className="px-6 py-2 rounded-lg border border-[#29AB87] flex justify-center items-center gap-1 hover:bg-gray-50 transition-colors">
                        <span className="text-[#269C7B] text-base font-medium font-articulat">
                            Try Now
                        </span>
                        <ArrowRight className="w-6 h-6 text-[#29AB87]" strokeWidth={2} />
                    </button>
                    <button className="px-6 py-2 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 hover:bg-[#238f73] transition-colors">
                        <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                            Book a Demo
                        </span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

function InterfaceMockup() {
    return (
        <div className="w-full max-w-[720px] relative overflow-hidden rounded-[20px]">
            <Image
                src="/assets/images/image copy 4.png"
                alt="Comment Letter Explorer Interface"
                width={720}
                height={800}
                className="w-full h-auto"
            />
        </div>
    );
}
