"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Navigation tabs data
const navigationTabs = [
    {
        id: "sec-reporting",
        label: "SEC Reporting",
        image: "/assets/images/image copy 4.png",
        sections: [
            {
                id: 1,
                title: "Ground Disclosures in SEC Precedent with Ask Fina",
                description: "Research SEC filings, guidance, peer disclosures, comment letters, and internal documents in one place with inspectable citations to defend disclosure decisions during audit and SEC review.",
                benefits: [
                    { text: "SEC filing citations", badge: null },
                    { text: "Peer disclosure precedent", badge: null },
                    { text: "Inspectable source trails", badge: "Most Liked" }
                ]
            },
            {
                id: 2,
                title: "Avoid EDGAR Blind Spots with Keyword Search + Alerts",
                description: "Run precise boolean searches across EDGAR filings and receive alerts when new disclosures match your criteria, reducing the risk of missed peer language.",
                benefits: [
                    { text: "EDGAR boolean logic", badge: null },
                    { text: "Filing metadata filters", badge: null },
                    { text: "Automated disclosure alerts", badge: "Most Liked" }
                ]
            },
            {
                id: 3,
                title: "Benchmark Peer Disclosures Correctly with AI Grid Reports",
                description: "Compare peer disclosures across companies and periods using structured grids with verbatim excerpts or AI summaries for consistent benchmarking.",
                benefits: [
                    { text: "Structured peer grids", badge: null },
                    { text: "Period comparisons", badge: null },
                    { text: "Verbatim and AI views", badge: "Most Liked" }
                ]
            },
            {
                id: 4,
                title: "Prevent Disclosure Drift with Disclosure Comparison + Checklists",
                description: "Review disclosures side by side and validate required coverage using FASB-aligned checklists to catch drift, omissions, and over-disclosure early.",
                benefits: [
                    { text: "Side-by-side disclosures", badge: null },
                    { text: "FASB-aligned checklists", badge: null },
                    { text: "Language drift detection", badge: "Most Liked" }
                ]
            },
            {
                id: 5,
                title: "Anticipate SEC Scrutiny with Comment Letter Explorer",
                description: "Analyze historical and recent SEC comment letters to identify recurring focus areas and pressure-test disclosures before filing.",
                benefits: [
                    { text: "SEC focus analytics", badge: null },
                    { text: "Full comment threads", badge: null },
                    { text: "Recurring issue tracking", badge: "Most Liked" }
                ]
            }
        ]
    },
    {
        id: "investor-relations",
        label: "Investor Relations",
        image: "/assets/images/image copy 4.png",
        sections: [
            {
                id: 1,
                title: "Calibrate Peer Messaging with Disclosure Comparison",
                description: "Compare disclosure language across peers and prior periods to ensure messaging aligns with investor expectations before earnings and public communications.",
                benefits: [
                    { text: "Peer disclosure alignment", badge: null },
                    { text: "Cross-period consistency", badge: null },
                    { text: "Narrative comparison", badge: "Most Liked" }
                ]
            },
            {
                id: 2,
                title: "Extract Investor-Relevant Themes with AI Grid Reports",
                description: "Analyze MD&A and risk disclosures across peers using structured grids to surface patterns and themes relevant for earnings prep and leadership briefings.",
                benefits: [
                    { text: "MD&A pattern analysis", badge: null },
                    { text: "Peer theme extraction", badge: null },
                    { text: "Verbatim disclosure support", badge: "Most Liked" }
                ]
            },
            {
                id: 3,
                title: "Prepare Defensible Investor Answers with Ask Fina",
                description: "Generate citeable answers to investor questions using public filings, peer disclosures, and approved internal documents to reduce misstatement risk.",
                benefits: [
                    { text: "Filing-backed responses", badge: null },
                    { text: "Scoped disclosure context", badge: null },
                    { text: "Fast Q&A preparation", badge: "Most Liked" }
                ]
            }
        ]
    },
    {
        id: "legal",
        label: "Legal",
        image: "/assets/images/image copy 4.png",
        sections: [
            {
                id: 1,
                title: "File Section 16 Forms Correctly with Form Creation and EDGAR Submission",
                description: "Draft and file Forms 3, 4, and 5 directly from a validated transaction ledger with controlled EDGAR submission to reduce filing and math errors under deadline pressure.",
                benefits: [
                    { text: "Inline form validation", badge: null },
                    { text: "EDGAR submission control", badge: null },
                    { text: "Accession tracking", badge: "Most Liked" }
                ]
            },
            {
                id: 2,
                title: "Avoid Missed Form 4 Deadlines with Insider Dashboard",
                description: "Monitor Form 4 risk, drafts in progress, and upcoming ownership events daily to ensure statutory deadlines are met.",
                benefits: [
                    { text: "Filing risk signals", badge: null },
                    { text: "Draft status visibility", badge: null },
                    { text: "Vesting-based alerts", badge: "Most Liked" }
                ]
            },
            {
                id: 3,
                title: "Surface Unreported Ownership Events with Unreported Transactions Queue",
                description: "Identify and resolve ownership events not yet reflected in SEC filings before they become compliance issues.",
                benefits: [
                    { text: "Unreported event queue", badge: null },
                    { text: "Reportable classification", badge: null },
                    { text: "Draft promotion", badge: "Most Liked" }
                ]
            },
            {
                id: 4,
                title: "Defend Legal Review Positions with Ask Fina",
                description: "Support disclosure and filing decisions with citeable SEC precedent, guidance, and internal policy references during legal and audit review.",
                benefits: [
                    { text: "SEC-backed citations", badge: null },
                    { text: "Source inspection", badge: null },
                    { text: "Policy comparison", badge: "Most Liked" }
                ]
            },
            {
                id: 5,
                title: "Anticipate SEC Enforcement Focus with Comment Letter Explorer",
                description: "Analyze historical and recent SEC comment letters to understand enforcement trends and pressure-test disclosures proactively.",
                benefits: [
                    { text: "Enforcement pattern analysis", badge: null },
                    { text: "Full comment threads", badge: null },
                    { text: "Risk-focused reporting", badge: "Most Liked" }
                ]
            }
        ]
    },
    {
        id: "technical-accounting",
        label: "Technical Accounting",
        image: "/assets/images/image copy 4.png",
        sections: [
            {
                id: 1,
                title: "Support Accounting Judgments with Ask Fina",
                description: "Research authoritative guidance, peer filings, and internal accounting memos in one place with inspectable citations to support technical conclusions and policy decisions.",
                benefits: [
                    { text: "FASB-linked citations", badge: null },
                    { text: "Peer filing precedent", badge: null },
                    { text: "Source inspection", badge: "Most Liked" }
                ]
            },
            {
                id: 2,
                title: "Ensure Disclosure Completeness with Checklist Benchmarking",
                description: "Review disclosures against FASB-aligned checklists mapped to evidence in your filing and peer filings to identify gaps early.",
                benefits: [
                    { text: "FASB-aligned checklists", badge: null },
                    { text: "Evidence-linked items", badge: null },
                    { text: "Gap identification", badge: "Most Liked" }
                ]
            },
            {
                id: 3,
                title: "Analyze Peer Accounting Treatment with AI Grid Reports",
                description: "Compare how peers disclose complex accounting topics across periods using structured grids with verbatim excerpts or AI summaries.",
                benefits: [
                    { text: "Consistent review lens", badge: null },
                    { text: "Verbatim disclosure excerpts", badge: null },
                    { text: "Cross-period analysis", badge: "Most Liked" }
                ]
            },
            {
                id: 4,
                title: "Reduce Wording Risk with Disclosure Comparison",
                description: "Validate disclosure wording and completeness by comparing exact peer language side by side before finalizing disclosures.",
                benefits: [
                    { text: "Exact language comparison", badge: null },
                    { text: "Completeness validation", badge: null },
                    { text: "Faster review", badge: "Most Liked" }
                ]
            }
        ]
    }
];

export default function CommentLetterExplorer() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentTab = navigationTabs[activeTab];
    const sections = currentTab.sections;

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update active section based on scroll progress with smoother transitions
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        const adjustedProgress = Math.max(0, Math.min(1, progress));
        // Smoothstep easing for smoother section transitions
        const easedProgress = adjustedProgress * adjustedProgress * (3 - 2 * adjustedProgress);
        const sectionIndex = Math.min(
            Math.floor(easedProgress * sections.length),
            sections.length - 1
        );
        if (sectionIndex !== activeSection) {
            setActiveSection(sectionIndex);
        }
    });

    // Handle tab change - reset section
    const handleTabChange = (idx: number) => {
        setActiveTab(idx);
        setActiveSection(0);
    };

    return (
        // Outer container with height based on number of sections
        <div
            ref={containerRef}
            className="relative w-full bg-white"
            style={{ height: `${sections.length * 100}vh` }}
        >
            {/* Sticky content that stays in view */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="max-w-full pl-6 md:pl-[60px] lg:pl-[120px]  h-full pr-0">
                    <div className="w-full h-full flex flex-col lg:flex-row items-start gap-7">

                        <div className="flex-1 flex flex-col justify-start items-start gap-12 ">

                            <div className="w-full rounded-[50px] flex justify-start items-center gap-2 flex-wrap bg-white z-10 pb-[48px] pt-[30px]">
                                {navigationTabs.map((tab, idx) => {
                                    const isActive = idx === activeTab;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => handleTabChange(idx)}
                                            className={cn(
                                                "px-[19px] py-2 rounded-[60px] flex justify-center items-center cursor-pointer transition-all",
                                                isActive
                                                    ? "bg-[#D6F5EC] shadow-[0px_0px_8px_rgba(0,135,67,0.09)_inset]"
                                                    : "bg-white hover:border-[#29AB87]"
                                            )}
                                            style={{
                                                outline: isActive ? '1px solid #21886B' : '1px solid #D9DBDD',
                                                outlineOffset: '-1px'
                                            }}
                                        >
                                            <span className={cn(
                                                "text-sm font-articulat leading-[19.60px]",
                                                isActive ? "text-[#134E3D] font-medium" : "text-[#0E0F10] font-normal"
                                            )}>
                                                {tab.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Main Content with Numbered List and Active Section */}
                            <div className="w-full flex justify-start items-start gap-[60px]">
                                {/* Numbered List - Clickable */}
                                <div className="flex flex-col justify-start items-start">
                                    {sections.map((section, index) => (
                                        <button
                                            key={section.id}
                                            onClick={() => setActiveSection(index)}
                                            className="flex justify-start items-center gap-1 cursor-pointer"
                                        >
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
                                        </button>
                                    ))}
                                </div>

                                {/* Active Section Only */}
                                <div className="flex-1 flex flex-col justify-start items-start gap-6">
                                    <AnimatePresence mode="wait">
                                        <SectionContent key={`${activeTab}-${activeSection}`} section={sections[activeSection]} />
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex justify-center items-center gap-2 pl-[60px]">
                                <button
                                    className="px-6 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-gray-50 transition-colors"
                                    style={{
                                        outline: '1px solid #29AB87',
                                        outlineOffset: '-1px'
                                    }}
                                >
                                    <span className="text-[#269C7B] text-base font-medium font-articulat">
                                        Try Now
                                    </span>
                                    <ArrowRight className="w-6 h-6 text-[#29AB87]" strokeWidth={2} />
                                </button>
                                <button className="px-6 py-2 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 hover:bg-[#238f73] transition-colors">
                                    <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                                        Request Access
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Interface Mockup */}
                        <div className="hidden lg:block flex-1 h-full z-0">
                            <InterfaceMockup image={currentTab.image} />
                        </div>
                    </div>

                    {/* Mobile Interface Mockup */}
                    <div className="lg:hidden pr-6 md:pr-[60px]">
                        <InterfaceMockup image={currentTab.image} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionContent({ section }: {
    section: {
        id: number;
        title: string;
        description: string;
        benefits: { text: string; badge: string | null }[];
    }
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col justify-start items-start gap-9"
        >
            {/* Title and Description */}
            <div className="flex flex-col justify-start items-start gap-6">
                <h3 className="max-w-[477px] text-[#0E0F10] text-2xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[43.20px]">
                    {section.title}
                </h3>
                <p className="max-w-[525px] text-[#5E6469] text-base md:text-xl font-normal font-articulat leading-relaxed md:leading-7">
                    {section.description}
                </p>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col justify-start items-start gap-3">
                {section.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex justify-center items-center gap-2.5">
                        {/* Checkbox Icon */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="4" fill="#0E0F10" />
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
            </div>
        </motion.div>
    );
}

function InterfaceMockup({ image }: { image: string }) {
    return (
        <div className="w-full h-full relative overflow-hidden rounded-tl-[20px] rounded-bl-[20px]">
            <Image
                src={image}
                alt="Interface Mockup"
                fill
            />
        </div>
    );
}
