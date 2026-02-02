import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type FeaturedArticle = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

interface BestPracticesProps {
  articles?: FeaturedArticle[];
}

export default function BestPractices({ articles = [] }: BestPracticesProps) {
  return (
    <div className="relative w-full bg-white">
      {/* Desktop Layout - 1200px content centered */}
      <div className="hidden lg:flex w-full max-w-[1200px] mx-auto px-6 md:px-8 flex-col gap-8 md:gap-10 lg:gap-12">
        {/* Header Row - Title/Subtitle left, View All Articles right */}
        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#0E0F10] text-[36px] font-medium font-articulat leading-[50.40px]">
              Best Practices & Insights
            </h2>
            <p className="max-w-[501px] text-[#5E6469] text-xl font-normal font-articulat leading-7">
              Expert insights on financial disclosure, compliance,
              <br />
              and the future of CFO operations
            </p>
          </div>
          <Link
            href="/blogs"
            className="flex justify-start items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-[#29AB87] text-base font-medium font-articulat leading-[25.60px] tracking-[0.32px]">
              View All Articles
            </span>
            <ArrowRight className="w-6 h-6 text-[#29AB87]" />
          </Link>
        </div>

        {/* Featured Content - Video and Article side by side */}
        <div className="w-full flex flex-row justify-start items-center gap-12">
          <div className="w-[570px] aspect-video rounded-lg overflow-hidden flex-shrink-0">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/34KQeckDHp4?si=i9fy5-16BNH9MlkC"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start gap-4">
            <h3 className="text-[#0E0F10] text-2xl font-medium font-articulat leading-[33.60px]">
              From Sanctions to Scrutiny: How OFAC Violations Create Immediate
              SEC Disclosure Triggers
            </h3>
            <p className="text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
              Jan 2, 2026
            </p>
          </div>
        </div>

        {/* Article Cards - Three columns (featured articles from CMS, max 3) */}
        <div className="w-full grid grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <Link key={article.slug} href={`/blogs/${article.slug}`}>
              <article className="flex flex-col justify-start items-start gap-6 hover:opacity-90 transition-opacity">
                <div className="w-full aspect-[384/248] rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={384}
                    height={248}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <h4 className="w-full text-[#0E0F10] text-xl font-medium font-articulat leading-7">
                    {article.title}
                  </h4>
                  <p className="w-full text-[#5E6469] text-base font-normal font-articulat leading-[22.40px]">
                    {article.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-4 sm:px-6 md:px-8 flex flex-col items-center gap-6 sm:gap-8">
        {/* Mobile Header - Centered */}
        <div className="w-full max-w-[372px] sm:max-w-[500px] md:max-w-[600px] flex flex-col justify-center items-center gap-4">
          <h2 className="text-center text-[#0E0F10] text-[28px] sm:text-[30px] md:text-[32px] font-medium font-articulat leading-tight">
            Best Practices & Insights
          </h2>
          <p className="text-center text-[#5E6469] text-base sm:text-lg font-normal font-articulat leading-relaxed">
            Expert insights on financial disclosure, compliance, and the future
            of CFO operations
          </p>
          <Link
            href="/blogs"
            className="flex justify-start items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-[#29AB87] text-base font-medium font-articulat leading-[25.60px] tracking-[0.32px]">
              View All Articles
            </span>
            <ArrowRight className="w-6 h-6 text-[#29AB87]" />
          </Link>
        </div>

        {/* Featured Content - Video and Article stacked */}
        <div className="w-full max-w-[372px] sm:max-w-[500px] md:max-w-[600px] flex flex-col justify-center items-start gap-4 sm:gap-5">
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/34KQeckDHp4?si=i9fy5-16BNH9MlkC"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="w-full text-[#0E0F10] text-lg sm:text-xl font-medium font-articulat leading-snug">
              From Sanctions to Scrutiny: How OFAC Violations Create Immediate
              SEC Disclosure Triggers
            </h3>
            <p className="w-full text-[#5E6469] text-sm sm:text-base font-normal font-articulat leading-relaxed">
              Jan 2, 2026
            </p>
          </div>
        </div>

        {/* Article Cards - Grid on tablet, stacked on mobile (featured articles, max 3) */}
        <div className="w-full max-w-[372px] sm:max-w-[500px] md:max-w-[600px] flex flex-col sm:flex-row sm:flex-wrap justify-start items-start gap-4 sm:gap-5 md:gap-6">
          {articles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="w-full sm:w-[calc(50%-10px)] md:w-[calc(50%-12px)]"
            >
              <article className="flex flex-col justify-start items-start gap-3 sm:gap-4 hover:opacity-90 transition-opacity">
                <div className="w-full aspect-[3/2] rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={372}
                    height={248}
                    className="object- w-full h-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <h4 className="w-full text-[#0E0F10] text-base sm:text-lg md:text-xl font-medium font-articulat leading-snug">
                    {article.title}
                  </h4>
                  <p className="w-full text-[#5E6469] text-sm sm:text-base font-normal font-articulat leading-relaxed">
                    {article.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
