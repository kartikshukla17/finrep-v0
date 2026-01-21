'use client';

import type { Metadata } from "next";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { useState } from "react";

export default function PricingPage() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        company: '',
        role: '',
        subscribe: false
    });
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

    const isFormValid = formData.email && formData.phone && formData.company && formData.subscribe;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Form submitted:', formData);
            // Handle form submission
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-articulat">
            {/* Hero Section with Form */}
            <div className="relative w-full bg-[#0D352A] overflow-hidden">
                <Header variant="light" />

                <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
                        {/* Left Side - Content */}
                        <div className="w-full lg:w-[564px] flex flex-col justify-start items-start gap-8 lg:gap-[42px]">
                            <div className="flex flex-col justify-start items-start gap-6">
                                <h1 className="text-white text-3xl md:text-[36px] lg:text-[42px] font-medium font-articulat leading-tight lg:leading-[58.80px]">
                                    Custom, scalable pricing for modern finance teams
                                </h1>
                                <p className="text-[#F4FBF8] text-lg md:text-xl font-normal font-articulat leading-relaxed lg:leading-[30px]">
                                    Our pricing adapts to your organization's needs, based on the modules you use, the scope you operate at, and the level of support you require.
                                </p>
                            </div>

                            {/* Security Badges */}
                            <div className="flex justify-start items-start gap-4">
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center shrink-0">
                                    <img
                                        src="/assets/images/soc2.png"
                                        alt="SOC II badge"
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center shrink-0" >
                                    <img
                                        src="/assets/images/image 3628.png"
                                        alt="ISO 27001 badge"
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center shrink-0" >
                                    <img
                                        src="/assets/images/image copy.png"
                                        alt="Security badge"
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="w-full lg:w-[564px] p-6 bg-white rounded-xl">
                            <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start gap-9">
                                <div className="w-full flex flex-col justify-start items-start gap-5">
                                    {/* Company Logo */}
                                    <div className="w-12 h-12 relative overflow-hidden rounded-[6.75px] flex items-center justify-center" style={{
                                        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.16) 100%), linear-gradient(150deg, #48E3B9 0%, rgba(35, 177, 138, 0.30) 73%), #23B18A",
                                        backdropFilter: "blur(76.19px)"
                                    }}>
                                        <Image
                                            src="/assets/icons/Group 1814106612.svg"
                                            alt="Company logo"
                                            width={18}
                                            height={25}
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="w-full flex flex-col justify-start items-start gap-6">
                                        <h2 className="text-[#0E0F10] text-2xl md:text-[32px] font-semibold font-articulat leading-tight md:leading-[44.80px]">
                                            Get custom pricing
                                        </h2>

                                        <div className="w-full flex flex-col justify-start items-start gap-6">
                                            {/* Input Fields */}
                                            <div className="w-full flex flex-col justify-start items-start gap-4">
                                                {/* Work Email */}
                                                <div className="w-full flex flex-col justify-start items-start gap-3">
                                                    <label className="text-[#0A2920] text-sm font-medium font-inter leading-5">
                                                        Work Email*
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="name@company.com"
                                                        className="w-full h-9 px-3 py-1 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg border border-[#E5E5E5] text-[#525252] text-sm font-normal font-inter leading-5 focus:outline-none focus:ring-2 focus:ring-[#29AB87] focus:border-transparent"
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div className="w-full flex flex-col justify-start items-start gap-3">
                                                    <label className="text-[#0A2920] text-sm font-medium font-inter leading-5">
                                                        Phone*
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        placeholder="(XXX) XXX-XXXX"
                                                        className="w-full h-9 px-3 py-1 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg border border-[#E5E5E5] text-[#525252] text-sm font-normal font-inter leading-5 focus:outline-none focus:ring-2 focus:ring-[#29AB87] focus:border-transparent"
                                                    />
                                                </div>

                                                {/* Company */}
                                                <div className="w-full flex flex-col justify-start items-start gap-3">
                                                    <label className="text-[#0A2920] text-sm font-medium font-inter leading-5">
                                                        Company*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.company}
                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                        placeholder="ACME Corp"
                                                        className="w-full h-9 px-3 py-1 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg border border-[#E5E5E5] text-[#525252] text-sm font-normal font-inter leading-5 focus:outline-none focus:ring-2 focus:ring-[#29AB87] focus:border-transparent"
                                                    />
                                                </div>

                                                {/* Role */}
                                                <div className="w-full flex flex-col justify-start items-start gap-3">
                                                    <label className="text-[#0A2920] text-sm font-medium font-inter leading-5">
                                                        Role
                                                    </label>
                                                    <div className="relative w-full">
                                                        <select
                                                            value={formData.role}
                                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                            className="w-full h-9 px-3 py-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg border border-[#E5E5E5] text-sm font-normal font-inter leading-5 focus:outline-none focus:ring-2 focus:ring-[#29AB87] focus:border-transparent appearance-none pr-10 cursor-pointer transition-all hover:border-[#29AB87]/30"
                                                            style={{
                                                                color: formData.role ? '#525252' : '#9FA4A9'
                                                            }}
                                                        >
                                                            <option value="" disabled>Select Role</option>
                                                            <option value="cfo">CFO</option>
                                                            <option value="controller">Controller</option>
                                                            <option value="accountant">Accountant</option>
                                                            <option value="analyst">Financial Analyst</option>
                                                            <option value="director">Finance Director</option>
                                                            <option value="vp">VP Finance</option>
                                                            <option value="manager">Finance Manager</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 16 16"
                                                                className="transition-colors"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    stroke={formData.role ? '#29AB87' : '#9FA4A9'}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                    d="M4 6l4 4 4-4"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Checkbox */}
                                            <div className="w-full flex justify-start items-start gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="subscribe"
                                                    checked={formData.subscribe}
                                                    onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                                                    className="w-4 h-4 mt-0.5 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded border border-[#E5E5E5] text-[#29AB87] focus:ring-2 focus:ring-[#29AB87] cursor-pointer shrink-0"
                                                />
                                                <label htmlFor="subscribe" className="flex-1 text-[#0A2920] text-sm font-medium font-inter leading-5 cursor-pointer">
                                                    I would like to receive product updates, research insights, and regulatory content from Finrep.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className={`w-full px-6 py-2 rounded-lg flex justify-center items-center gap-2.5 text-[#F4FBF8] text-base font-medium font-articulat transition-all ${isFormValid
                                        ? 'bg-[#29AB87] hover:bg-[#238f73] cursor-pointer'
                                        : 'bg-[#9FA4A9] cursor-not-allowed opacity-50'
                                        }`}
                                >
                                    Get Pricing
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted Companies Section */}
            <div className="w-full bg-white border-b border-[#ECEDEE]">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-20">
                    <div className="w-full flex flex-col justify-center items-start gap-8 md:gap-10 lg:gap-[42px]">
                        {/* Header */}
                        <div className="w-full flex flex-col justify-start items-start gap-2">
                            <h2 className="w-full text-[#0E0F10] text-2xl md:text-[32px] lg:text-[36px] font-medium font-articulat leading-tight lg:leading-[43.20px]">
                                Trusted by teams operating at scale
                            </h2>
                            <p className="w-full text-[#3F4346] text-base md:text-lg lg:text-xl font-normal font-articulat leading-relaxed lg:leading-[30px]">
                                Leading enterprises rely on Finrep for accuracy, speed, and defensibility.
                            </p>
                        </div>

                        {/* Logo Grid */}
                        <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
                            {/* First Row */}
                            <div className="w-full flex flex-col sm:flex-row justify-start items-stretch gap-4 md:gap-6">
                                <div className="flex-1 h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden">
                                    <Image
                                        src="/assets/icons/company_logo/Circle_idESAy34no_0 1.svg"
                                        alt="Circle"
                                        width={164}
                                        height={42}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-1 h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden">
                                    <Image
                                        src="/assets/icons/company_logo/Infosys_idxq8SaZnR_0.svg"
                                        alt="Infosys"
                                        width={114}
                                        height={42}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-1 h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden">
                                    <Image
                                        src="/assets/icons/company_logo/Logo 1.svg"
                                        alt="EXL"
                                        width={99}
                                        height={36}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="w-full flex flex-col sm:flex-row justify-start items-stretch gap-4 md:gap-6">
                                <div className="flex-1 h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden">
                                    <Image
                                        src="/assets/icons/company_logo/Vector.svg"
                                        alt="HP"
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-1 h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden">
                                    <Image
                                        src="/assets/icons/company_logo/idYV5M9CYu_1768336934604 1.svg"
                                        alt="Wells Fargo"
                                        width={248}
                                        height={25}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-1 h-[100px] flex items-center justify-center bg-white rounded-lg border border-[#D9DBDD] overflow-hidden">
                                    <Image
                                        src="/assets/icons/company_logo/idlzlIlh4I_logos 1.svg"
                                        alt="RingCentral"
                                        width={226}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Table Section */}
            <div className="w-full bg-white">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-[120px]">
                    <div className="w-full flex flex-col justify-start items-start gap-8 md:gap-10 lg:gap-[42px]">
                        {/* Header */}
                        <div className="w-full flex flex-col justify-start items-start gap-2">
                            <h2 className="w-full text-[#0E0F10] text-2xl md:text-[32px] lg:text-[36px] font-medium font-articulat leading-tight lg:leading-[43.20px]">
                                Built for finance teams who cannot afford uncertainty
                            </h2>
                            <p className="w-full text-[#3F4346] text-base md:text-lg lg:text-xl font-normal font-articulat leading-relaxed lg:leading-[30px]">
                                Here is what you get with Finrep compared to traditional tools and generic AI platforms.
                            </p>
                        </div>

                        {/* Research and evidence */}
                        <ComparisonCategory
                            title="Research and evidence"
                            features={[
                                { name: "SEC filings research", finrep: true, others: true },
                                { name: "SEC comment letters access", finrep: true, others: true },
                                { name: "Evidence-backed answers with citations", finrep: true, others: false },
                                { name: "Source inspection for every answer", finrep: true, others: false },
                                { name: "Chat across filings, guidance, peers, comment letters", finrep: true, others: true },
                                { name: "True boolean keyword search + advanced filters", finrep: true, others: true },
                                { name: "Save searches, watchlists, repeatable workflows", finrep: true, others: false },
                                { name: "Chat with your private uploads in the same workflow", finrep: true, others: false },
                            ]}
                        />

                        {/* Benchmarking and comparisons */}
                        <ComparisonCategory
                            title="Benchmarking and comparisons"
                            features={[
                                { name: "Peer benchmarking workflows", finrep: true, others: true },
                                { name: "Structured benchmarking grids (matrix style)", finrep: true, others: true },
                                { name: "Verbatim excerpts plus AI crux summaries toggle", finrep: true, others: false },
                                { name: "Side-by-side disclosure comparison across peers and periods", finrep: true, others: true },
                                { name: "Evidence links embedded in comparison outputs", finrep: true, others: false },
                                { name: "Share-for-review flows built into the workflow", finrep: true, others: false },
                            ]}
                        />

                        {/* Drafting and disclosure quality */}
                        <ComparisonCategory
                            title="Drafting and disclosure quality"
                            features={[
                                { name: "Guidance-aware drafting grounded in precedent", finrep: true, others: false },
                                { name: "Draft companion integrated with research and benchmarking", finrep: true, others: false },
                                { name: "Checklist benchmarking mapped to evidence (FASB-aligned review)", finrep: true, others: false },
                                { name: "Roll-forward disclosure workflows (reuse with control)", finrep: true, others: false },
                            ]}
                        />

                        {/* SEC readiness and risk prevention */}
                        <ComparisonCategory
                            title="SEC readiness and risk prevention"
                            features={[
                                { name: "Comment letter analytics and focus-area reporting", finrep: true, others: false },
                                { name: "Proactive monitoring layer (alerts + dashboard)", finrep: true, others: false },
                                { name: "Central command center for ongoing reporting work", finrep: true, others: false },
                            ]}
                        />

                        {/* Section 16 operations and filing control */}
                        <ComparisonCategory
                            title="Section 16 operations and filing control"
                            features={[
                                { name: "Prepare Forms 3, 4, 5", finrep: true, others: true },
                                { name: "Electronic filing to SEC EDGAR (test + live)", finrep: true, others: true },
                                { name: "One-click filing and status retrieval from EDGAR", finrep: true, others: true },
                                { name: "File for multiple reporting owners", finrep: true, others: true },
                                { name: "Footnote capability / footnote library", finrep: true, others: true },
                                { name: "Central registry for securities and instruments", finrep: true, others: true },
                                { name: "Unified transaction ledger with states (unreported, in draft, filed)", finrep: true, others: false },
                                { name: "Unreported transactions queue with resolution paths", finrep: true, others: false },
                                { name: "Predictive triggers from vesting schedules", finrep: true, others: false },
                                { name: "Deterministic validations (math, table rules, XML compliance) before filing", finrep: true, others: false, longText: true },
                                { name: "Role-based permissions (admin file rights, editor, viewer)", finrep: true, others: false },
                                { name: "Audit trail: who changed what, when, and why", finrep: true, others: true },
                                { name: "Store accession numbers and archive filed history (draft + filed)", finrep: true, others: false },
                            ]}
                        />

                        {/* Security and enterprise readiness */}
                        <ComparisonCategory
                            title="Security and enterprise readiness"
                            features={[
                                { name: "Security and enterprise readiness", finrep: true, others: true },
                                { name: "ISO 27001", finrep: true, others: true },
                                { name: "Enterprise security documentation (trust center)", finrep: true, others: true },
                                { name: "Expert support and guided onboarding", finrep: true, others: true },
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* CFO Office Section */}
            <div className="w-full bg-[#0D352A]">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-[120px]">
                    <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
                        {/* Left Side - Header */}
                        <div className="w-full lg:w-[533px] flex flex-col justify-start items-start gap-6">
                            <h2 className="w-full text-white text-3xl md:text-[38px] lg:text-[42px] font-medium font-articulat leading-tight lg:leading-[58.80px]">
                                A complete CFO office, powered by AI
                            </h2>
                            <p className="w-full text-[#C7C7C7] text-base md:text-lg lg:text-xl font-normal font-articulat leading-relaxed lg:leading-[30px]">
                                One platform that brings research, benchmarking, drafting, and review into a single, intelligent workflow.
                            </p>
                        </div>

                        {/* Right Side - Features */}
                        <div className="flex-1 flex flex-col justify-center items-start gap-10 lg:gap-[52px]">
                            {/* Expert-led onboarding */}
                            <div className="w-full flex flex-col justify-start items-start gap-5">
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <h3 className="w-full text-white text-xl md:text-2xl font-medium font-articulat leading-tight lg:leading-[28.80px]">
                                        Expert-led onboarding
                                    </h3>
                                    <p className="w-full text-[#C7C7C7] text-sm md:text-base font-medium font-articulat leading-tight lg:leading-[19.20px]">
                                        We do not just provide software access. We guide adoption.
                                    </p>
                                </div>
                                <div className="w-full flex flex-col justify-center items-start gap-3">
                                    <FeatureItem
                                        icon="/assets/icons/category_search.svg"
                                        text="Initial workshops for each enabled module"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/animated_images.svg"
                                        text="Walkthrough videos and documentation"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/circles_ext.svg"
                                        text="Dedicated customer success manager during onboarding"
                                    />
                                </div>
                            </div>

                            {/* Implementation and support */}
                            <div className="w-full flex flex-col justify-start items-start gap-5">
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <h3 className="w-full text-white text-xl md:text-2xl font-medium font-articulat leading-tight lg:leading-[28.80px]">
                                        Implementation and support
                                    </h3>
                                    <p className="w-full text-[#C7C7C7] text-sm md:text-base font-medium font-articulat leading-tight lg:leading-[19.20px]">
                                        Finrep stays with you beyond go-live.
                                    </p>
                                </div>
                                <div className="w-full flex flex-col justify-center items-start gap-3">
                                    <FeatureItem
                                        icon="/assets/icons/acute.svg"
                                        text="Go-live within 7 business days post-contract"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/video_label.svg"
                                        text="Optional 4-week production pilot at no additional cost"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/event_repeat.svg"
                                        text="Weekly check-ins during early adoption"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/support_agent.svg"
                                        text="Same business-day support response"
                                    />
                                </div>
                            </div>

                            {/* Finrep-trained AI and enterprise-grade security */}
                            <div className="w-full flex flex-col justify-start items-start gap-5">
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <h3 className="w-full text-white text-xl md:text-2xl font-medium font-articulat leading-tight lg:leading-[28.80px]">
                                        Finrep-trained AI and enterprise-grade security
                                    </h3>
                                    <p className="w-full text-[#C7C7C7] text-sm md:text-base font-medium font-articulat leading-tight lg:leading-[19.20px]">
                                        Built specifically for finance, designed for trust.
                                    </p>
                                </div>
                                <div className="w-full flex flex-col justify-center items-start gap-3">
                                    <FeatureItem
                                        icon="/assets/icons/grid_view.svg"
                                        text="AI trained on filings, guidance, and regulatory precedent"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/attach_file.svg"
                                        text="Evidence-first responses with inspectable sources"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/lock.svg"
                                        text="SOC 2 Type II & ISO 27001 certified"
                                    />
                                    <FeatureItem
                                        icon="/assets/icons/password.svg"
                                        text="Secure data isolation and access controls"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs Section */}
            <div className="w-full bg-white">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-12 md:py-16 lg:py-[120px]">
                    <div className="w-full flex flex-col justify-start items-center gap-8 md:gap-12">
                        {/* Header */}
                        <h2 className="text-center text-[#0E0F10] text-3xl md:text-[36px] font-medium font-articulat leading-tight md:leading-[50.40px]">
                            FAQs
                        </h2>

                        {/* FAQ Items */}
                        <div className="w-full flex flex-col justify-start items-start gap-6">
                            <FAQItem
                                question="How is pricing determined?"
                                answer="Pricing is based on the modules you use, the scale of your workflows, and the level of support required. We design pricing around your needs, not generic plans."
                                index={0}
                                isOpen={openFAQIndex === 0}
                                onToggle={() => setOpenFAQIndex(openFAQIndex === 0 ? null : 0)}
                            />
                            <FAQItem
                                question="Can we start with a single module?"
                                answer="Yes, you can start with a single module and expand as needed. We offer flexible adoption paths that let you add capabilities as your team's needs grow."
                                index={1}
                                isOpen={openFAQIndex === 1}
                                onToggle={() => setOpenFAQIndex(openFAQIndex === 1 ? null : 1)}
                            />
                            <FAQItem
                                question="How long does onboarding take?"
                                answer="Initial setup can be completed within 7 business days post-contract. We provide expert-led workshops for each module, and most teams are fully productive within 2-3 weeks."
                                index={2}
                                isOpen={openFAQIndex === 2}
                                onToggle={() => setOpenFAQIndex(openFAQIndex === 2 ? null : 2)}
                            />
                            <FAQItem
                                question="Is our data private and secure?"
                                answer="Yes, absolutely. We are SOC 2 Type II and ISO 27001 certified. Your data is isolated, encrypted, and never used to train models. We maintain enterprise-grade security controls and access policies."
                                index={3}
                                isOpen={openFAQIndex === 3}
                                onToggle={() => setOpenFAQIndex(openFAQIndex === 3 ? null : 3)}
                            />
                            <FAQItem
                                question="Do you support global teams?"
                                answer="Yes, Finrep supports teams worldwide. Our platform is accessible globally, and our customer success team provides support across multiple time zones to ensure your team gets the help they need."
                                index={4}
                                isOpen={openFAQIndex === 4}
                                onToggle={() => setOpenFAQIndex(openFAQIndex === 4 ? null : 4)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

// Feature Item Component
interface FeatureItemProps {
    icon: string;
    text: string;
}

function FeatureItem({ icon, text }: FeatureItemProps) {
    return (
        <div className="w-full px-3 md:px-4 py-3 bg-[#134E3D] rounded-lg flex justify-start items-center gap-3">
            <Image
                src={icon}
                alt=""
                width={24}
                height={24}
                className="shrink-0"
                style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
            />
            <div className="flex-1 text-white text-sm font-semibold font-articulat leading-tight lg:leading-[19.60px]">
                {text}
            </div>
        </div>
    );
}

// FAQ Item Component
interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
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

// Comparison Category Component
interface ComparisonFeature {
    name: string;
    finrep: boolean;
    others: boolean;
    longText?: boolean;
}

interface ComparisonCategoryProps {
    title: string;
    features: ComparisonFeature[];
}

function ComparisonCategory({ title, features }: ComparisonCategoryProps) {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* Header Row */}
            <div className="w-full bg-white flex flex-col md:flex-row justify-start items-stretch">
                <div className="flex-1 h-auto md:h-12 px-2.5 py-2 md:py-[9px] flex justify-start items-center">
                    <h3 className="flex-1 text-[#0E0F10] text-xl md:text-[24px] lg:text-[28px] font-medium font-articulat leading-tight lg:leading-[33.60px]">
                        {title}
                    </h3>
                </div>
                <div className="flex-1 flex flex-row justify-start items-center">
                    <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                        <div className="flex-1 text-center text-[#269C7B] text-sm md:text-base font-medium font-articulat leading-[19.20px] tracking-[0.64px]">
                            FINREP
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                        <div className="flex-1 text-center text-[#5E6469] text-sm md:text-base font-medium font-articulat leading-[19.20px] tracking-[0.64px]">
                            OTHER PLAYERS
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Rows */}
            <div className="w-full flex flex-col justify-start items-start">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="w-full bg-white border-b border-black/10 flex flex-col md:flex-row justify-start items-stretch"
                    >
                        <div className={`flex-1 ${feature.longText ? 'h-auto py-2' : 'h-auto md:h-12'} px-2.5 py-2 md:py-[9px] flex justify-start items-center gap-2.5`}>
                            <Image
                                src="/assets/icons/Vector copy 3.svg"
                                alt="Arrow"
                                width={12}
                                height={12}
                                className="shrink-0 opacity-30"
                            />
                            <div className="flex-1 text-black text-base md:text-lg font-medium font-articulat">
                                {feature.name}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-row justify-start items-center">
                            <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                                <Image
                                    src={feature.finrep ? "/assets/icons/Compare cell-1.svg" : "/assets/icons/Compare cell.svg"}
                                    alt={feature.finrep ? "Supported" : "Not supported"}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1 flex justify-center items-center py-2 md:py-0">
                                <Image
                                    src={feature.others ? "/assets/icons/Compare cell-1.svg" : "/assets/icons/Compare cell.svg"}
                                    alt={feature.others ? "Supported" : "Not supported"}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
