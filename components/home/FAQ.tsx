"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0); // Start with FAQ 2 (index 1) expanded

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="relative w-full bg-white section-screen">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col justify-start items-center gap-4 sm:gap-5 md:gap-6">
        {/* Header */}
        <h2 className="w-full max-w-[1200px] text-left text-[#0E0F10] text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] font-medium font-articulat leading-tight">
          FAQs
        </h2>

        {/* FAQ Items */}
        <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-4 lg:gap-6">
          {faqs.map((faq, index) => {
            const isExpanded = expandedFAQ === index;
            return (
              <div
                key={index}
                className="w-full border-b border-[#D9DBDD] flex flex-col justify-start items-start"
              >
                <button
                  className="w-full flex justify-between items-center cursor-pointer pb-4"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isExpanded}
                >
                  <span className="text-black text-lg sm:text-xl md:text-[22px] lg:text-2xl font-medium font-articulat leading-snug pr-4 text-left">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center shrink-0">
                    {isExpanded ? (
                      /* Minus Icon */
                      <div className="w-[14px] h-[14px] relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2px] bg-[#0E0F10]" />
                      </div>
                    ) : (
                      /* Plus Icon */
                      <div className="w-[14px] h-[14px] relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2px] bg-[#0E0F10]" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[14px] bg-[#0E0F10]" />
                      </div>
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isExpanded && faq.answer && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="w-full text-[#5E6469] text-base sm:text-lg lg:text-xl font-normal font-articulat leading-relaxed pb-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
