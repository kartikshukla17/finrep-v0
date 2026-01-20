import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-articulat">
            {/* Hero Section */}
            <div className="relative w-full min-h-screen bg-[#0D352A] overflow-hidden flex flex-col">
                {/* Capitol Building Image - Full width at bottom */}
                <div className="absolute bottom-0 left-0 right-0 w-full">
                    <div className="relative w-full" style={{ paddingBottom: '35.54%' }}>
                        <Image
                            src="/assets/images/image copy 2.png"
                            alt="US Capitol Building"
                            fill
                            className="object-cover"
                            style={{ mixBlendMode: 'multiply' }}
                            priority
                        />
                    </div>
                </div>

                {/* Header */}
                <div className="relative z-10">
                    <Header variant="light" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 py-20">
                    <div className="max-w-[736px] flex flex-col justify-start items-center gap-6">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-[52px] font-normal font-articulat leading-tight md:leading-[60px] lg:leading-[72px] text-center">
                            Everything a CFO office does. Now powered by AI.
                        </h1>
                        <button className="px-6 pr-4 py-2 bg-[#29AB87] rounded-lg flex justify-center items-center gap-2.5 hover:bg-[#238f73] transition-colors">
                            <span className="text-[#F4FBF8] text-base font-medium font-articulat">
                                Explore open roles
                            </span>
                            <ArrowRight className="w-6 h-6 text-[#F9F9FA]" strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Vision, Problem, Platform Section */}
            <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-[1440px] mx-auto flex flex-col gap-[120px]">
                    {/* The Vision */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 flex flex-col gap-1">
                            <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat">
                                The vision
                            </h2>
                            <p className="text-[#5E6469] text-xl font-normal font-articulat leading-8">
                                Finance professionals should think bigger. Not work longer.
                            </p>
                        </div>
                        <div className="flex-1 flex flex-col gap-[29px]">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-black text-lg font-semibold font-articulat">
                                    What we're building toward
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                        <div className="w-6 h-6 relative shrink-0">
                                            <Image
                                                src="/assets/icons/uil_arrow-growth.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="w-full h-full"
                                                style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                            />
                                        </div>
                                        <p className="flex-1 text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            A CFO office that scales with intelligence, not headcount
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                        <div className="w-6 h-6 relative shrink-0">
                                            <Image
                                                src="/assets/icons/mingcute_flash-fill.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="w-full h-full"
                                                style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                            />
                                        </div>
                                        <p className="flex-1 text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            A world where financial reporting happens in minutes, not weeks
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                        <div className="w-6 h-6 relative shrink-0">
                                            <Image
                                                src="/assets/icons/ri_target-fill.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="w-full h-full"
                                                style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                            />
                                        </div>
                                        <p className="flex-1 text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            A future where accuracy is assumed, not double-checked
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                        <div className="w-6 h-6 relative shrink-0">
                                            <Image
                                                src="/assets/icons/ic_round-star.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="w-full h-full"
                                                style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                            />
                                        </div>
                                        <p className="flex-1 text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Finance professionals empowered to do their best work, every day
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Problem */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 flex flex-col gap-1">
                            <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat">
                                The problem
                            </h2>
                            <p className="text-[#5E6469] text-xl font-normal font-articulat leading-8">
                                Finance work hasn't changed.<br />
                                The world around it has.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 py-4 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/mdi_puzzle.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(73%) saturate(1849%) hue-rotate(0deg) brightness(98%) contrast(101%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Fragmented Workflows
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            5–7 tools used to answer a single reporting question
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-4 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/pepicons-pop_repeat-circle-filled.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(73%) saturate(1849%) hue-rotate(0deg) brightness(98%) contrast(101%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Repetitive Disclosures
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            70–80% of disclosure content reused every quarter
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-4 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/mingcute_time-fill.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(73%) saturate(1849%) hue-rotate(0deg) brightness(98%) contrast(101%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Manual Research
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            20+ hours spent per cycle on filings and guidance review
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-4 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/ion_warning.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(73%) saturate(1849%) hue-rotate(0deg) brightness(98%) contrast(101%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Compliance Risk
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            100% manual verification across numbers and references
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Platform */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 flex flex-col gap-1">
                            <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat">
                                The platform
                            </h2>
                            <p className="text-[#5E6469] text-xl font-normal font-articulat leading-8">
                                A full-blown AI-powered CFO office.
                            </p>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <h3 className="text-black text-lg font-semibold font-articulat">
                                What Finrep enables
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="flex items-start gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/mingcute_flash-fill.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Research, instantly
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            Ask complex accounting and disclosure questions and get clear, cited answers across filings, guidance, and peer data.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/ri_pencil-ai-fill.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Draft disclosures faster
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            Generate structured, review-ready disclosures grounded in real filings and authoritative guidance.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/material-symbols_text-compare-rounded.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Benchmark with confidence
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            See how peers disclose, what they emphasize, and what they avoid without manual comparison.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 py-3 px-3 pr-4 bg-white rounded-lg border border-[#D9DBDD]">
                                    <div className="w-6 h-6 relative shrink-0">
                                        <Image
                                            src="/assets/icons/zondicons_book-reference.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-full h-full"
                                            style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1157%) hue-rotate(112deg) brightness(94%) contrast(88%)' }}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="text-[#0E0F10] text-base font-medium font-articulat leading-[19.20px]">
                                            Always referenced
                                        </h4>
                                        <p className="text-[#5E6469] text-sm font-normal font-articulat leading-[19.60px]">
                                            Every number, statement, and insight comes with traceable sources. No black boxes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Value Section */}
            <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
                    {/* Section Header */}
                    <div className="max-w-[462px] flex flex-col items-center gap-0.5 text-center">
                        <h2 className="text-black text-[42px] font-medium font-articulat">
                            The value
                        </h2>
                        <p className="text-[#3F4346] text-xl font-medium font-articulat">
                            We don't replace professionals. We amplify them.
                        </p>
                    </div>

                    {/* Value Cards */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[13px]">
                        {/* Card 1: Accuracy over hype */}
                        <div
                            className="relative h-[379px] p-6 rounded-lg overflow-hidden flex flex-col gap-3"
                            style={{
                                background: 'radial-gradient(ellipse 100% 100% at 100.09% 100%, #1B6651 0%, #134E3D 100%)'
                            }}
                        >
                            <div className="flex flex-col gap-3 relative z-10">
                                <h3 className="text-white text-[28px] font-medium font-articulat leading-[39.20px]">
                                    Accuracy over hype
                                </h3>
                                <p className="text-white text-xl font-normal font-articulat leading-7">
                                    Every insight must be defensible. Every answer must be traceable.
                                </p>
                            </div>
                            <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden">
                                <div className="absolute left-[18px] bottom-[18px] w-[180px] h-[180px]">
                                    <Image
                                        src="/assets/icons/value/mingcute_target-fill.svg"
                                        alt=""
                                        width={180}
                                        height={180}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Speed with accountability */}
                        <div
                            className="relative h-[379px] p-6 rounded-lg overflow-hidden flex flex-col gap-3"
                            style={{
                                background: 'radial-gradient(ellipse 100% 100% at 100.09% 100%, #1B6651 0%, #134E3D 100%)'
                            }}
                        >
                            <div className="flex flex-col gap-3 relative z-10">
                                <h3 className="text-white text-[28px] font-medium font-articulat leading-[39.20px]">
                                    Speed with accountability
                                </h3>
                                <p className="text-white text-xl font-normal font-articulat leading-7">
                                    Fast matters. But never at the cost of trust.
                                </p>
                            </div>
                            <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden">
                                <div className="absolute left-[18px] bottom-[18px] w-[180px] h-[180px]">
                                    <Image
                                        src="/assets/icons/value/material-symbols_speed-rounded.svg"
                                        alt=""
                                        width={180}
                                        height={180}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Judgment stays human */}
                        <div
                            className="relative h-[379px] p-6 rounded-lg overflow-hidden flex flex-col gap-3"
                            style={{
                                background: 'radial-gradient(ellipse 100% 100% at 100.09% 100%, #1B6651 0%, #134E3D 100%)'
                            }}
                        >
                            <div className="flex flex-col gap-3 relative z-10">
                                <h3 className="text-white text-[28px] font-medium font-articulat leading-[39.20px]">
                                    Judgment stays human
                                </h3>
                                <p className="text-white text-xl font-normal font-articulat leading-7">
                                    Every insight must be defensible. Every answer must be traceable.
                                </p>
                            </div>
                            <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden">
                                <div className="absolute left-[18px] bottom-[18px] w-[180px] h-[180px]">
                                    <Image
                                        src="/assets/icons/value/fluent_people-28-filled.svg"
                                        alt=""
                                        width={180}
                                        height={180}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Leaders Section */}
            <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
                    {/* Section Header */}
                    <div className="max-w-[462px] flex flex-col items-center gap-0.5 text-center">
                        <h2 className="text-black text-[42px] font-medium font-articulat">
                            Our leaders
                        </h2>
                        <p className="text-[#3F4346] text-xl font-medium font-articulat text-center">
                            Built by people who've lived the problem.
                        </p>
                    </div>

                    {/* Leaders Cards */}
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        {/* Gana Misra Card */}
                        <div className="flex-1 flex flex-col md:flex-row items-end gap-8">
                            <div className="w-[240px] h-[240px] relative overflow-hidden rounded-xl shrink-0">
                                <Image
                                    src="/assets/images/gana.png"
                                    alt="Gana Misra"
                                    width={240}
                                    height={240}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-[42px]">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#0E0F10] text-[36px] font-medium font-articulat leading-[43.20px]">
                                        Gana Misra
                                    </h3>
                                    <p className="text-[#3F4346] text-xl font-normal font-articulat leading-[30px]">
                                        CEO & Co-founder
                                    </p>
                                </div>
                                <div className="flex items-center gap-[7px]">
                                    <a href="#" className="w-8 h-8 relative overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="/assets/icons/pajamas_linkedin.svg"
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a href="#" className="w-8 h-8 relative overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="/assets/icons/bi_twitter-x.svg"
                                            alt="Twitter/X"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Tushar Varshney Card */}
                        <div className="flex-1 flex flex-col md:flex-row items-end gap-8">
                            <div className="w-[240px] h-[240px] relative overflow-hidden rounded-xl shrink-0">
                                <Image
                                    src="/assets/images/tushar.png"
                                    alt="Tushar Varshney"
                                    width={240}
                                    height={240}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-[42px]">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#0E0F10] text-[36px] font-medium font-articulat leading-[43.20px]">
                                        Tushar Varshney
                                    </h3>
                                    <p className="text-[#3F4346] text-xl font-normal font-articulat leading-[30px]">
                                        CTO & Co-founder
                                    </p>
                                </div>
                                <div className="flex items-center gap-[7px]">
                                    <a href="#" className="w-8 h-8 relative overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="/assets/icons/pajamas_linkedin.svg"
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a href="#" className="w-8 h-8 relative overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="/assets/icons/bi_twitter-x.svg"
                                            alt="Twitter/X"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Built with Experience Section */}
            <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col text-center">
                        <h2 className="text-black text-[42px] font-medium font-articulat">
                            Built with experience
                        </h2>
                        <p className="text-[#3F4346] text-xl font-medium font-articulat">
                            Shaped by teams operating in complex, high-stakes environments
                        </p>
                    </div>

                    {/* Company Logos Grid */}
                    <div className="flex flex-col gap-3">
                        {/* Row 1 */}
                        <div className="flex gap-3">
                            <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/assets/company_logos/Vector.svg"
                                    alt="JPMorgan Chase"
                                    width={182}
                                    height={26}
                                    className="opacity-80"
                                    style={{ mixBlendMode: 'luminosity' }}
                                />
                            </div>
                            <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/assets/company_logos/images 2.png"
                                    alt="Sixt"
                                    width={96}
                                    height={54}
                                    className="opacity-70"
                                    style={{ mixBlendMode: 'luminosity' }}
                                />
                            </div>
                            <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/assets/company_logos/image 3681.png"
                                    alt="Strive"
                                    width={140}
                                    height={73}
                                    className="opacity-70"
                                    style={{ mixBlendMode: 'luminosity' }}
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex gap-3">
                            <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/assets/company_logos/YC.png"
                                    alt="Y Combinator"
                                    width={194}
                                    height={37}
                                    style={{ mixBlendMode: 'luminosity' }}
                                />
                            </div>
                            <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/assets/company_logos/Meeso.png"
                                    alt="Meesho"
                                    width={114}
                                    height={40}
                                    className="opacity-70"
                                    style={{ mixBlendMode: 'luminosity' }}
                                />
                            </div>
                            <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/assets/company_logos/flipkart-logo 1.png"
                                    alt="Flipkart"
                                    width={212}
                                    height={84}
                                    style={{ mixBlendMode: 'luminosity' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backed with Conviction Section */}
            <div className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                    {/* Section Header */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-black text-[42px] font-medium font-articulat">
                            Backed with conviction
                        </h2>
                        <p className="text-[#3F4346] text-xl font-medium font-articulat">
                            Partners aligned with building durable finance infrastructure
                        </p>
                    </div>

                    {/* Partner Logos */}
                    <div className="flex gap-3">
                        <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                            <Image
                                src="/assets/company_logos/Accel_logo 1.svg"
                                alt="Accel"
                                width={125}
                                height={40}
                            />
                        </div>
                        <div className="flex-1 h-[100px] relative bg-white rounded-lg border border-[#D9DBDD] overflow-hidden flex items-center justify-center">
                            <Image
                                src="/assets/company_logos/PIE.svg"
                                alt="PIE - Pierian Services"
                                width={100}
                                height={42}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
