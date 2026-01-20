"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

// Define the article data structure
interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  category: string;
  categories?: string[];
  featuredImage: string;
  content: string; // HTML content or markdown
  excerpt?: string;
  tags?: string[];
  readTime?: number;
  pdfUrl?: string;
  tableOfContents?: {
    title: string;
    sections?: string[];
  }[];
}

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = use(params);

  // TODO: Fetch article data from backend API
  // This is a placeholder - replace with actual API call
  // const article = await fetchArticleBySlug(slug);

  // Mock data structure - replace with actual data from backend
  const article: BlogArticle = {
    id: "1",
    slug: slug,
    title: "Auditor's Watch: How Increased SEC Scrutiny of Gatekeepers Impacts Your Next 10-K/20-F Audit",
    date: "Jan 1, 2023",
    author: {
      name: "Aman Gupta",
      role: "Guest Author",
      avatar: "/assets/images/author-avatar.png",
    },
    category: "Blogs",
    categories: ["Category 1", "Category 1"],
    featuredImage: "/assets/images/article-featured.png",
    content: "<p>Article content will come from backend...</p>",
    excerpt: "Expert insights on financial disclosure, compliance, and the future of CFO operations",
    tags: ["SEC Reporting", "Compliance", "OFAC"],
    readTime: 5,
    pdfUrl: "/documents/article.pdf",
    tableOfContents: [
      {
        title: "Section 1",
        sections: ["Section 1", "Section 1", "Section 1", "Section 1"],
      },
      {
        title: "Section 2",
      },
      {
        title: "Section 2",
      },
    ],
  };

  return (
    <div className="relative w-full bg-white min-h-screen overflow-hidden">
      {/* Header - White Background */}
      <div className="absolute left-0 top-0 w-full border-b border-[#D9DBDD] z-10">
        <Header variant="dark" />
      </div>

      {/* Left Sidebar - Authors & Share */}
      <div className="absolute left-[120px] top-[123px] w-[200px] flex flex-col justify-start items-start gap-12">
        {/* Authors Section */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="text-[#0E0F10] text-sm font-medium font-articulat leading-[22.40px]">
            Authors
          </div>
          <div className="w-[182.78px] flex flex-col justify-start items-start gap-3">
            {article.author && (
              <div className="px-2 py-2 bg-[#ECEDEE] rounded-[40px] flex justify-start items-center gap-1.5">
                {article.author.avatar && (
                  <div className="w-5 h-5 relative rounded-full overflow-hidden">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-[#0E0F10] text-sm font-normal font-articulat leading-5">
                  {article.author.name}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Share Section */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="text-[#0E0F10] text-sm font-medium font-articulat leading-[22.40px]">
            Share
          </div>
          <div className="flex justify-start items-start gap-4">
            {/* Share icons - LinkedIn, Twitter, etc. */}
            <div className="w-6 h-6 relative">
              <Image
                src="/assets/images/pajamas_linkedin.svg"
                alt="Share on LinkedIn"
                width={24}
                height={24}
                className="object-contain opacity-60"
              />
            </div>
            <div className="w-6 h-6 relative">
              <Image
                src="/assets/images/bi_twitter-x.svg"
                alt="Share on Twitter"
                width={24}
                height={24}
                className="object-contain opacity-60"
              />
            </div>
            <div className="w-6 h-6 relative">
              <div className="w-[21.50px] h-[21.50px] bg-[#9FA4A9] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute left-[320px] top-[123px] w-[800px] flex flex-col justify-start items-start">
        {/* Article Header */}
        <div className="w-full pb-12 px-12 flex justify-center items-center gap-[428px]">
          <div className="flex-1 flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-[#5E6469] text-base font-normal font-articulat leading-[25.60px]">
                {article.date}
              </div>
              <div className="w-[723px] text-[#0E0F10] text-[36px] font-medium font-articulat leading-[43.20px]">
                {article.title}
              </div>
            </div>
            {/* Categories */}
            {article.categories && article.categories.length > 0 && (
              <div className="flex justify-start items-start gap-2">
                {article.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 bg-[#ECEDEE] rounded-[64px] flex justify-start items-start gap-2"
                  >
                    <div className="text-[#5E6469] text-sm font-medium font-articulat leading-4">
                      {cat}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full px-12 flex flex-col justify-start items-center gap-12">
          {/* Featured Image */}
          <div className="w-full h-[540px] relative rounded-lg overflow-hidden">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Body - Content will come from backend */}
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-[704px] flex flex-col justify-start items-start gap-6">
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                Navigating the New Era of Regulatory Oversight
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                If you're a CFO, audit committee member, or financial controller
                preparing for your annual 10-K or 20-F filing, there's an
                elephant in the room that's getting harder to ignore: the SEC
                isn't just watching your financial statements anymore—they're
                watching the watchers.
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                The Securities and Exchange Commission has dramatically
                intensified its scrutiny of auditors, audit firms, and other
                financial gatekeepers over the past few years. And this
                heightened oversight isn't just causing headaches for the Big
                Four—it's fundamentally changing how your next audit will unfold.
              </div>
              {/* Content Image */}
              <div className="w-full h-[658.62px] relative">
                <Image
                  src="/assets/images/article-content-image.png"
                  alt="Article content"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Section: Why the Sudden Spotlight */}
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="flex justify-start items-center gap-4">
                <div className="text-[#0E0F10] text-[28px] font-medium font-articulat leading-[33.60px]">
                  Why the Sudden Spotlight on Auditors?
                </div>
                <div className="w-6 h-6 relative">
                  <div className="w-[19.89px] h-[19.87px] border-2 border-[#C7C9CC] rounded"></div>
                </div>
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                The SEC's renewed focus on gatekeepers didn't emerge in a
                vacuum. A perfect storm of accounting scandals, high-profile
                audit failures, and the increasing complexity of financial
                instruments has pushed regulators to take a harder line. From the
                Luckin Coffee fraud to concerns about SPAC audits and
                cryptocurrency valuations, the message from Washington is clear:
                trust, but verify—especially when it comes to those we trust to
                verify.
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                SEC Chair Gary Gensler has been particularly vocal about
                strengthening the "three lines of defense" in corporate
                governance, with auditors firmly in the crosshairs as the
                critical external check on financial reporting.
              </div>

              {/* Subsection */}
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <div className="flex justify-start items-center gap-4">
                  <div className="text-[#0E0F10] text-2xl font-medium font-articulat leading-[28.80px]">
                    What Does This Mean for You?
                  </div>
                </div>
                <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                  Your auditors are under more pressure than ever before. They're
                  being second-guessed on methodology, documentation standards,
                  and professional skepticism. And guess what? That pressure flows
                  downhill—directly to your finance team and your audit
                  preparation process.
                </div>
              </div>
            </div>

            {/* Section: The New Audit Landscape */}
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="flex justify-start items-center gap-4">
                <div className="text-[#0E0F10] text-[28px] font-medium font-articulat leading-[33.60px]">
                  The New Audit Landscape: What's Changed
                </div>
              </div>
              {/* Chart Image */}
              <div className="w-full h-[438.81px] relative">
                <Image
                  src="/assets/images/article-chart.png"
                  alt="Audit landscape chart"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Numbered Sections */}
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <div className="flex justify-start items-center gap-4">
                  <div className="text-[#0E0F10] text-2xl font-medium font-articulat leading-[28.80px]">
                    1. Heightened Professional Skepticism
                  </div>
                </div>
                <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                  Gone are the days when a friendly relationship with your
                  auditors meant smooth sailing. Today's auditors are applying
                  what the PCAOB calls "enhanced skepticism"—essentially, they're
                  questioning everything, even items that sailed through in prior
                  years. Management representations? Expect them to be tested more
                  rigorously. Historical precedents? Not as persuasive as they
                  used to be.
                </div>

                <div className="h-[25px] flex justify-start items-center gap-4">
                  <div className="text-[#0E0F10] text-2xl font-medium font-articulat leading-[28.80px]">
                    2. Documentation, Documentation, Documentation
                  </div>
                </div>
                <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                  If you thought your audit file was detailed before, buckle up.
                  Auditors are now documenting their thought processes, decision
                  trees, and alternative considerations in exhaustive
                  detail—because they know the SEC or PCAOB might come knocking.
                  For you, this means more information requests, more follow-up
                  questions, and more time spent explaining the "why" behind your
                  accounting judgments.
                </div>

                <div className="flex justify-start items-center gap-4">
                  <div className="text-[#0E0F10] text-2xl font-medium font-articulat leading-[28.80px]">
                    3. Technology and Data Analytics
                  </div>
                </div>
                <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                  Your auditors are deploying sophisticated data analytics tools
                  to test entire populations of transactions rather than samples.
                  This is generally good news for audit quality, but it means
                  anomalies and outliers that might have slipped through
                  traditional sampling methods are now getting flagged for
                  investigation.
                </div>
              </div>
            </div>

            {/* Section: Red Flags */}
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="flex justify-start items-center gap-4">
                <div className="text-[#0E0F10] text-[28px] font-medium font-articulat leading-[33.60px]">
                  Red Flags That Will Trigger Extra Scrutiny
                </div>
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                Be especially mindful of these areas that are likely to draw
                heightened attention:
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                Late adjustments to financial statements, especially in material
                areas
                <br />
                <span className="font-semibold">
                  Complex or unusual transactions in the fourth quarter
                  <br />
                  Significant management estimates without robust supporting
                  documentation
                  <br />
                  Related party transactions that lack clear business purpose
                  <br />
                </span>
                Revenue recognition patterns that deviate from industry norms
                <br />
                Changes in accounting policies or estimates without clear
                justification
              </div>
            </div>

            {/* Section: How to Prepare */}
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="flex justify-start items-center gap-4">
                <div className="text-[#0E0F10] text-[28px] font-medium font-articulat leading-[33.60px]">
                  How to Prepare for Your Next Audit in This New Environment
                </div>
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-2xl font-medium font-articulat leading-[28.80px]">
                Proactive Steps for Finance Teams
              </div>
              <div className="w-full text-justify text-[#0E0F10] text-base font-normal font-articulat leading-6">
                Start earlier: The days of cramming audit prep into the final
                weeks are over. Begin documentation and analysis well before
                year-end.
                <br />
                Strengthen internal controls: The SEC is heavily focused on ICFR
                (Internal Control over Financial Reporting). Any material
                weaknesses will draw extra scrutiny.
                <br />
                Document your judgments: For any significant accounting judgment
                or estimate, create contemporaneous documentation of your
                analysis, alternatives considered, and rationale.
                <br />
                Pre-clear complex transactions: Don't surprise your auditors with
                novel structures or unusual transactions. Involve them early in
                the accounting assessment.
                <br />
                Invest in your technical accounting team: Having deep expertise
                in-house for complex areas (revenue recognition, leases,
                derivatives) pays dividends.
                <br />
                Enhance communication: Schedule regular touchpoints with your
                auditors throughout the year, not just during the audit period.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Table of Contents */}
      <div className="absolute left-[1120px] top-[123px] w-[200px] flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center">
          <div className="text-justify text-[#9FA4A9] text-sm font-normal font-articulat leading-[22.40px]">
            On this page
          </div>
        </div>
        <div className="text-justify text-[#0E0F10] text-base font-normal font-articulat leading-[25.60px]">
          TL;DR
        </div>
        {article.tableOfContents &&
          article.tableOfContents.map((section, idx) => (
            <div key={idx} className="flex flex-col justify-start items-start gap-3">
              <div className="text-justify text-[#269C7B] text-base font-medium font-articulat leading-[25.60px]">
                {section.title}
              </div>
              {section.sections &&
                section.sections.map((subSection, subIdx) => (
                  <div
                    key={subIdx}
                    className="px-4 py-0 flex justify-center items-center gap-2.5"
                  >
                    <div className="text-justify text-[#0E0F10] text-sm font-normal font-articulat leading-[22.40px]">
                      {subSection}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>

      {/* You might also like Section */}
      <div className="absolute left-0 top-[4296.43px] w-full flex flex-col justify-center items-center">
        <div className="w-[1200px] pt-[120px] flex flex-col justify-start items-center gap-9">
          <div className="w-full text-center text-black text-[36px] font-medium font-articulat leading-[50.40px]">
            You might also like
          </div>
          <div className="w-full flex justify-start items-start gap-6">
            {[1, 2, 3].map((index) => (
              <Link
                key={index}
                href={`/blogs/article-${index}`}
                className="w-[384px] flex flex-col justify-start items-start gap-6 hover:opacity-90 transition-opacity"
              >
                <div className="w-[384px] h-[248px] relative rounded-lg overflow-hidden">
                  <Image
                    src={`/assets/images/blog-card-${index}.png`}
                    alt="Related article"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="w-[384px] text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                    From Sanctions to Scrutiny: How OFAC Violations Create
                    Immediate SEC Disclosure Triggers
                  </div>
                  <div className="w-[384px] text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                    Jan 2, 2026
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full pt-[120px] relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}
