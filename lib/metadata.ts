import type { Metadata } from "next";

/**
 * SEO Metadata Configuration
 * Centralized metadata for all pages
 */

export const siteConfig = {
  name: "Finrep",
  description:
    "AI-powered financial reporting intelligence platform for CFO offices. Streamline SEC reporting, technical accounting, and financial disclosure analysis.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://finrep.ai", // Use env var or fallback
  ogImage: "/assets/images/og-image.png",
  links: {
    twitter: "https://x.com/FinrepAI",
    linkedin: "https://www.linkedin.com/company/finrepai/",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "financial reporting",
    "SEC reporting",
    "technical accounting",
    "CFO software",
    "financial disclosure",
    "EDGAR",
    "AI accounting",
    "comment letter",
    "financial intelligence",
  ],
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@finrep",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const pageMetadata = {
  home: {
    title: "Finrep - AI-Powered Financial Reporting Intelligence",
    description:
      "Transform your financial reporting workflow with AI. Built for CFO offices to streamline SEC reporting, technical accounting, and disclosure analysis.",
    openGraph: {
      title: "Finrep - AI-Powered Financial Reporting Intelligence",
      description:
        "Transform your financial reporting workflow with AI. Built for CFO offices to streamline SEC reporting, technical accounting, and disclosure analysis.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Finrep - AI-Powered Financial Reporting Intelligence",
        },
      ],
    },
  },
  features: {
    title: "Features - Financial Reporting Tools",
    description:
      "Explore Finrep's powerful features: Comment Letter Explorer, SEC filing analysis, technical accounting automation, and AI-powered insights.",
    openGraph: {
      title: "Features - Financial Reporting Tools | Finrep",
      description:
        "Explore Finrep's powerful features for CFO offices and finance teams.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Features - Financial Reporting Tools",
        },
      ],
    },
  },
  usecases: {
    title: "Use Cases - Solutions for Finance Teams",
    description:
      "Discover how CFOs, Controllers, Auditors, and IR teams use Finrep to streamline SEC reporting, technical accounting, and financial disclosure.",
    openGraph: {
      title: "Use Cases - Solutions for Finance Teams | Finrep",
      description:
        "Discover how finance teams use Finrep to streamline reporting workflows.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Use Cases - Solutions for Finance Teams",
        },
      ],
    },
  },
  pricing: {
    title: "Pricing - Choose Your Plan",
    description:
      "Flexible pricing for teams of all sizes. Start free or choose Pro/Enterprise plans with advanced features for financial reporting intelligence.",
    openGraph: {
      title: "Pricing - Choose Your Plan | Finrep",
      description: "Flexible pricing for financial reporting intelligence.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Pricing - Choose Your Plan",
        },
      ],
    },
  },
  security: {
    title: "Security & Compliance - Enterprise-Grade Protection",
    description:
      "SOC 2 Type II certified. Zero data residency. Enterprise-grade security for your financial data with EDGAR-native architecture.",
    openGraph: {
      title: "Security & Compliance | Finrep",
      description:
        "Enterprise-grade security and compliance for financial reporting.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Security & Compliance",
        },
      ],
    },
  },
  resources: {
    title: "Resources - Insights & Best Practices",
    description:
      "Stay updated with financial reporting insights, SEC guidance, technical accounting best practices, and industry trends.",
    openGraph: {
      title: "Resources - Insights & Best Practices | Finrep",
      description: "Financial reporting insights and best practices.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Resources - Insights & Best Practices",
        },
      ],
    },
  },
  blogs: {
    title: "Blog - Financial Reporting Insights",
    description:
      "Read the latest insights on SEC reporting, technical accounting, financial disclosure, and CFO office best practices.",
    openGraph: {
      title: "Blog - Financial Reporting Insights | Finrep",
      description: "Latest insights on financial reporting and accounting.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Blog - Financial Reporting Insights",
        },
      ],
    },
  },
  about: {
    title: "About Us - Our Story",
    description:
      "Learn about Finrep's mission to transform financial reporting for CFO offices with AI-powered intelligence and automation.",
    openGraph: {
      title: "About Us - Our Story | Finrep",
      description:
        "Learn about Finrep's mission to transform financial reporting.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "About Us - Our Story",
        },
      ],
    },
  },
  terms: {
    title: "Terms and Conditions - Finrep",
    description:
      "Terms of Service for Finrep. Read our terms and conditions governing your use of our financial reporting intelligence platform.",
    openGraph: {
      title: "Terms and Conditions | Finrep",
      description: "Terms of Service for Finrep.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Terms and Conditions",
        },
      ],
    },
  },
  privacy: {
    title: "Privacy Policy - Finrep",
    description:
      "Privacy Policy for Finrep. Learn how we collect, use, and protect your personal information.",
    openGraph: {
      title: "Privacy Policy | Finrep",
      description: "Privacy Policy for Finrep.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Privacy Policy",
        },
      ],
    },
  },
};
