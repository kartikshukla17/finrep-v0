'use client';

import Footer from "@/components/layout/Footer";
import {
    PricingHero,
    TrustedCompanies,
    ComparisonTable,
    CFOOfficeSection,
    PricingFAQ
} from "@/components/pricing";

export default function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col font-articulat">
            <PricingHero />
            <TrustedCompanies />
            <ComparisonTable />
            <CFOOfficeSection />
            <PricingFAQ />
            <Footer />
        </div>
    );
}
