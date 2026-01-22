'use client';

import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <div className="w-full pb-6 border-b border-[#D9DBDD] flex flex-col justify-start items-start gap-4">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center gap-4 text-left group"
            >
                <h3 className="flex-1 text-black text-xl md:text-2xl font-medium font-articulat leading-tight md:leading-[33.60px]">
                    {question}
                </h3>
                <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                    {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="#0E0F10" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="#0E0F10" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </div>
            </button>
            {isOpen && (
                <p className="w-full text-[#5E6469] text-base md:text-xl font-normal font-articulat leading-relaxed md:leading-[28px]">
                    {answer}
                </p>
            )}
        </div>
    );
}

const faqData = [
    {
        question: "How is pricing determined?",
        answer: "Pricing is based on the modules you use, the scale of your workflows, and the level of support required. We design pricing around your needs, not generic plans."
    },
    {
        question: "Can we start with a single module?",
        answer: "Yes, you can start with a single module and expand as needed. We offer flexible adoption paths that let you add capabilities as your team's needs grow."
    },
    {
        question: "How long does onboarding take?",
        answer: "Initial setup can be completed within 7 business days post-contract. We provide expert-led workshops for each module, and most teams are fully productive within 2-3 weeks."
    },
    {
        question: "Is our data private and secure?",
        answer: "Yes, absolutely. We are SOC 2 Type II and ISO 27001 certified. Your data is isolated, encrypted, and never used to train models. We maintain enterprise-grade security controls and access policies."
    },
    {
        question: "Do you support global teams?",
        answer: "Yes, Finrep supports teams worldwide. Our platform is accessible globally, and our customer success team provides support across multiple time zones to ensure your team gets the help they need."
    }
];

export default function PricingFAQ() {
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

    return (
        <div className="w-full bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-[120px]">
                <div className="w-full flex flex-col justify-start items-center gap-8 md:gap-12">
                    {/* Header */}
                    <h2 className="text-center text-[#0E0F10] text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                        FAQs
                    </h2>

                    {/* FAQ Items */}
                    <div className="w-full flex flex-col justify-start items-start gap-6">
                        {faqData.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFAQIndex === index}
                                onToggle={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
