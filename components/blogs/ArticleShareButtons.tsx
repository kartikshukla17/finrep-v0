"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ArticleShareButtonsProps {
  slug: string;
  title: string;
}

function buildTwitterShareUrl(articleUrl: string, title: string): string {
  const text = encodeURIComponent(title);
  const url = encodeURIComponent(articleUrl);
  return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
}

function buildLinkedInShareUrl(articleUrl: string): string {
  const url = encodeURIComponent(articleUrl);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

export default function ArticleShareButtons({
  slug,
  title,
}: ArticleShareButtonsProps) {
  const [articleUrl, setArticleUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setArticleUrl(`${window.location.origin}/blogs/${slug}`);
    }
  }, [slug]);

  if (!articleUrl) {
    return (
      <div className="flex gap-4">
        <span className="w-6 h-6 block" aria-hidden />
        <span className="w-6 h-6 block" aria-hidden />
      </div>
    );
  }

  const twitterHref = buildTwitterShareUrl(articleUrl, title);
  const linkedInHref = buildLinkedInShareUrl(articleUrl);

  return (
    <div className="flex gap-4">
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 relative hover:opacity-70 transition-opacity"
        aria-label="Share on LinkedIn"
      >
        <Image
          src="/assets/icons/pajamas_linkedin.svg"
          alt="Share on LinkedIn"
          width={24}
          height={24}
          className="object-contain opacity-60"
        />
      </a>
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 relative hover:opacity-70 transition-opacity"
        aria-label="Share on Twitter"
      >
        <Image
          src="/assets/icons/bi_twitter-x.svg"
          alt="Share on Twitter"
          width={24}
          height={24}
          className="object-contain opacity-60"
        />
      </a>
    </div>
  );
}
