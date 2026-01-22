"use client";

import { useState } from "react";

export default function FAQ() {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0); // Start with FAQ 1 (index 1) expanded

    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Finrep?",
            answer: 
                "Finrep is a platform that makes SEC research easy — search disclosures, explore comment letters, and benchmark filings in seconds. Unlock deeper insights with our AI-powered summaries and comparisons.",
        },
        {
            question: "How to use Finrep?",
            answer:
                "Finrep makes SEC research easy — search disclosures, explore comment letters, and benchmark filings in seconds. Unlock deeper insights with our AI-powered summaries and comparisons.",
        },
        {
            question: "Can I try it for free?",
            answer: 
                "Finrep makes SEC research easy — search disclosures, explore comment letters, and benchmark filings in seconds. Unlock deeper insights with our AI-powered summaries and comparisons.",
        },
        {
            question: "Is my data safe?",
            answer: 
                "Finrep makes SEC research easy — search disclosures, explore comment letters, and benchmark filings in seconds. Unlock deeper insights with our AI-powered summaries and comparisons.",
        },
        {
            question: "Did you fine-tune your AI on my data?",
            answer: 
            "Finrep makes SEC research easy — search disclosures, explore comment letters, and benchmark filings in seconds. Unlock deeper insights with our AI-powered summaries and comparisons.",
        },
    ];

    return (
        <div className="relative w-full bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 flex flex-col justify-start items-center gap-12">
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-start gap-12">
                    <div className="text-center md:text-left text-[#0E0F10] text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                        FAQs
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="w-full flex flex-col justify-start items-start gap-6">
                    {faqs.map((faq, index) => {
                        const isExpanded = expandedFAQ === index;
                        return (
                            <div
                                key={index}
                                className="w-full max-w-[1200px] border-b border-[#D9DBDD] flex flex-col justify-start items-start gap-4 transition-all duration-300 ease-in-out"
                            >
                                <div
                                    className="w-full flex justify-between items-center cursor-pointer py-4"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="text-black text-xl md:text-2xl font-medium font-articulat leading-tight md:leading-[33.60px] pr-8">
                                        {faq.question}
                                    </div>
                                    <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center shrink-0">
                                        {isExpanded ? (
                                            /* Minus Icon */
                                            <div className="w-[14px] h-[14px] relative">
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2px] bg-[#0E0F10]"></div>
                                            </div>
                                        ) : (
                                            /* Plus Icon */
                                            <div className="w-[14px] h-[14px] relative">
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2px] bg-[#0E0F10]"></div>
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[14px] bg-[#0E0F10]"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {isExpanded && faq.answer && (
                                    <div className="w-full text-[#5E6469] text-lg md:text-xl font-normal font-articulat leading-7 pb-6">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
