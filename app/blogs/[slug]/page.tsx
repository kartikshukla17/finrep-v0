"use client";

import {
    ArticleContent,
    ArticleHeader,
    ArticleSidebar,
    ArticleSkeleton,
    RelatedArticles,
    TableOfContents,
} from "@/components/blogs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { use, useEffect, useState } from "react";

import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import GithubSlugger from "github-slugger";

interface RelatedArticle {
  slug: string;
  title: string;
  date: string;
  image: string;
}

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
  content: string; // markdown now
  excerpt?: string;
  tags?: string[];
  readTime?: number;
  pdfUrl?: string;
  tableOfContents?: {
    title: string;
    slug: string;
    sections?: { title: string; slug: string }[];
  }[];
  relatedArticles?: RelatedArticle[];
}

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Build TOC from markdown headings (## and ###) with slugs for anchor links
// Uses github-slugger to match rehype-slug's output exactly
function buildTOC(markdown: string) {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const toc: { title: string; slug: string; sections?: { title: string; slug: string }[] }[] = [];

  let current: { title: string; slug: string; sections?: { title: string; slug: string }[] } | null = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) toc.push(current);
      const title = line.replace("## ", "").trim();
      current = { title, slug: slugger.slug(title), sections: [] };
    }
    if (line.startsWith("### ") && current) {
      const title = line.replace("### ", "").trim();
      current.sections?.push({ title, slug: slugger.slug(title) });
    }
  }

  if (current) toc.push(current);
  return toc;
}

// Custom components for ReactMarkdown
const markdownComponents: Components = {
  h1: ({ children, id }) => (
    <h1 id={id} className="text-3xl md:text-4xl font-semibold text-[#0E0F10] mt-10 mb-6 font-articulat scroll-mt-28">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2 id={id} className="text-2xl md:text-[28px] font-medium text-[#0E0F10] mt-10 mb-4 font-articulat leading-tight scroll-mt-28">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="text-xl md:text-2xl font-medium text-[#0E0F10] mt-8 mb-3 font-articulat scroll-mt-28">
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4 id={id} className="text-lg md:text-xl font-medium text-[#0E0F10] mt-6 mb-2 font-articulat scroll-mt-28">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-base leading-7 text-[#0E0F10] mb-4 font-articulat">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 my-4 space-y-2 text-[#0E0F10] font-articulat">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 my-4 space-y-2 text-[#0E0F10] font-articulat">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-7 text-[#0E0F10]">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#17453E] pl-4 my-6 italic text-[#5E6469] font-articulat">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#17453E] underline hover:text-[#0D352A] transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => {
    const imgSrc = typeof src === "string" ? src : "";
    return (
      <figure className="my-8">
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src={imgSrc}
            alt={alt || ""}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        {alt && (
          <figcaption className="text-sm text-[#5E6469] text-center mt-2 font-articulat">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-[#F5F5F5] text-[#17453E] px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    return (
      <code className={`${className} block`}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-[#1E1E1E] text-[#D4D4D4] p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-[#E5E7EB]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#F9FAFB]">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="border border-[#E5E7EB] px-4 py-2 text-left font-medium text-[#0E0F10]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-[#E5E7EB] px-4 py-2 text-[#0E0F10]">
      {children}
    </td>
  ),
  hr: () => (
    <hr className="my-8 border-t border-[#E5E7EB]" />
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#0E0F10]">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),
};

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = use(params);

  const [article, setArticle] = useState<BlogArticle | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/blogs/${slug}`);
      if (!res.ok) return;
      const data = await res.json();

      const toc = buildTOC(data.content || "");

      // Format related articles dates
      const formattedRelatedArticles = (data.relatedArticles || []).map((article: RelatedArticle) => ({
        ...article,
        date: article.date ? new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "",
      }));

      setArticle({
        id: slug,
        slug,
        title: data.title,
        date: new Date(data.date).toDateString(),
        author: data.author,
        category: "Blogs",
        categories: Array.isArray(data.categories) ? data.categories : [],
        featuredImage: data.featuredImage || "/assets/images/article-featured.png",
        content: data.content || "",
        excerpt: data.excerpt,
        tags: data.tags,
        readTime: data.readTime,
        pdfUrl: data.pdfUrl,
        tableOfContents: toc,
        relatedArticles: formattedRelatedArticles,
      });
    };

    load();
  }, [slug]);


  // loading state
  if (!article) {
    return (
      <div className="relative w-full bg-white min-h-screen flex flex-col font-articulat">
        <Header variant="dark" />
        <main className="flex-1 w-full pt-[72px]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-10 py-8 md:py-12">
            <ArticleSkeleton />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative w-full bg-white min-h-screen flex flex-col font-articulat">
      <Header variant="dark" />

      <main className="flex-1 w-full pt-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-10 py-8 md:py-12">
          <div className="flex gap-8 lg:gap-12 justify-center">
            <ArticleSidebar author={article.author} />

            <div className="flex-1 min-w-0 max-w-[800px]">
              <div className="lg:hidden mb-6">
                {article.author && (
                  <div className="flex items-center gap-2 text-sm text-[#5E6469]">
                    <span>By {article.author.name}</span>
                    {article.author.role && (
                      <>
                        <span>•</span>
                        <span>{article.author.role}</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <ArticleHeader
                title={article.title}
                date={article.date}
                categories={article.categories}
              />

              {/* Article content with featured image and markdown body from CMS */}
              <ArticleContent featuredImage={article.featuredImage} title={article.title}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
                  components={markdownComponents}
                >
                  {article.content}
                </ReactMarkdown>
              </ArticleContent>
            </div>

            {article.tableOfContents && (
              <TableOfContents sections={article.tableOfContents} />
            )}
          </div>
        </div>

        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <RelatedArticles articles={article.relatedArticles} />
        )}
      </main>

      <Footer />
    </div>
  );
}
