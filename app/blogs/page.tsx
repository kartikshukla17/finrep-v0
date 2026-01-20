"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState("Blogs");

  const tabs = ["Blogs", "Company", "AI & Tech", "SEC Journal"];
  return (
    <div className="relative w-full bg-[#0D352A] min-h-screen flex flex-col font-articulat">
      <Header variant="light" />

      {/* Main Content */}
      <div className="w-full flex-grow flex flex-col justify-start items-center gap-12 md:gap-24 pt-12 md:pt-32 pb-24 px-6 md:px-[60px] lg:px-[120px]">
        {/* Title and Subtitle Section */}
        <div className="flex flex-col justify-start items-center gap-6 text-center">
          <h1 className="text-white text-4xl md:text-[64px] font-normal leading-tight md:leading-[89.60px]">
            Blogs
          </h1>
          <p className="max-w-[822px] text-[#F4FBF8] text-lg md:text-xl font-normal leading-8">
            Expert insights on financial disclosure, compliance, and the future
            of CFO operations
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Blog Card */}
          <div className="flex flex-col justify-start items-start gap-6 w-full lg:w-1/2">
            <h2 className="w-full text-[#F9F9FA] text-2xl md:text-3xl font-medium leading-tight">
              From Sanctions to Scrutiny: How OFAC Violations Create Immediate
              SEC Disclosure Triggers
            </h2>
            <button className="px-9 py-3 rounded-lg border border-[#29AB87] flex justify-center items-center gap-2 hover:bg-[#29AB87]/10 transition-colors">
              {/* PDF Icon */}
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/assets/images/vscode-icons_file-type-pdf2.svg"
                  alt="PDF icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />

              </div>
              <div className="text-[#F4FBF8] text-base font-medium">
                Free Download
              </div>
            </button>
          </div>

          {/* Right Blog Card - Image */}
          <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[496px] relative rounded-2xl border-2 border-[#269C7B] overflow-hidden">
            <Image
              src="/assets/images/blog-image.png"
              alt="How OFAC Violations Create Immediate SEC Disclosure Triggers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Blog Content Section - White Background */}
      <div className="relative w-full bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] py-16 flex flex-col justify-center items-start gap-16">
          {/* Tab Navigation */}
          <div className="w-full flex justify-center items-center overflow-x-auto">
            <div className="flex gap-4 md:gap-0 min-w-max">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 md:px-0 md:w-[240px] pb-2 border-b flex justify-center items-center gap-2.5 cursor-pointer transition-colors ${isActive
                      ? "border-[#269C7B]"
                      : "border-[#D9DBDD] hover:border-[#269C7B]/50"
                      }`}
                  >
                    <div
                      className={`text-base font-medium whitespace-nowrap ${isActive
                        ? "text-[#269C7B]"
                        : "text-[#5E6469] hover:text-[#269C7B]"
                        }`}
                    >
                      {tab}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Article Section */}
          <Link href="/blogs/from-sanctions-to-scrutiny" className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12 hover:opacity-90 transition-opacity">
            {/* Featured Image */}
            <div className="w-full lg:flex-1 h-[250px] md:h-[396px] relative rounded-lg overflow-hidden">
              <Image
                src="/assets/images/featured-blog-image.png"
                alt="Featured blog article"
                fill
                className="object-cover"
              />
            </div>

            {/* Featured Article Info */}
            <div className="w-full lg:w-auto flex flex-col justify-start items-start gap-4">
              <h3 className="max-w-md text-[#0E0F10] text-xl md:text-2xl font-medium leading-tight">
                From Sanctions to Scrutiny: How OFAC Violations Create Immediate
                SEC Disclosure Triggers
              </h3>
              <div className="text-[#5E6469] text-base font-normal leading-[22.40px]">
                Jan 2, 2026
              </div>
            </div>
          </Link>

          {/* Blog Posts Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <Link
                key={index}
                href={`/blogs/article-${index}`}
                className="flex flex-col justify-start items-start gap-6 hover:opacity-90 transition-opacity"
              >
                <div className="w-full h-[240px] md:h-[248px] relative rounded-lg overflow-hidden">
                  <Image
                    src={`/assets/images/blog-card-${index}.png`}
                    alt="Blog post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <h3 className="text-[#0E0F10] text-lg md:text-xl font-medium leading-7 line-clamp-2">
                    From Sanctions to Scrutiny: How OFAC Violations Create
                    Immediate SEC Disclosure Triggers
                  </h3>
                  <div className="text-[#5E6469] text-base font-normal leading-[22.40px]">
                    Jan 2, 2026
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View More Button */}
          <div className="w-full flex flex-col justify-center items-center gap-2.5">
            <button className="px-[19px] py-2 bg-white rounded-[60px] border border-[#D9DBDD] flex justify-center items-center gap-2.5 hover:bg-[#F9F9FA] transition-colors">
              <div className="text-[#0E0F10] text-sm font-normal leading-[19.60px]">
                View More
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
