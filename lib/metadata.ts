import type { Metadata } from 'next';

/**
 * SEO Metadata Configuration
 * Centralized metadata for all pages
 */

export const siteConfig = {
  name: 'Finrep',
  description: 'AI-powered financial reporting intelligence platform for CFO offices. Streamline SEC reporting, technical accounting, and financial disclosure analysis.',
  url: 'https://finrep.com', // Update with actual domain
  ogImage: '/assets/images/og-image.png', // Add OG image
  links: {
    twitter: 'https://twitter.com/finrep',
    linkedin: 'https://linkedin.com/company/finrep',
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
    'financial reporting',
    'SEC reporting',
    'technical accounting',
    'CFO software',
    'financial disclosure',
    'EDGAR',
    'AI accounting',
    'comment letter',
    'financial intelligence',
  ],
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@finrep',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const pageMetadata = {
  home: {
    title: 'Finrep - AI-Powered Financial Reporting Intelligence',
    description: 'Transform your financial reporting workflow with AI. Built for CFO offices to streamline SEC reporting, technical accounting, and disclosure analysis.',
    openGraph: {
      title: 'Finrep - AI-Powered Financial Reporting Intelligence',
      description: 'Transform your financial reporting workflow with AI. Built for CFO offices to streamline SEC reporting, technical accounting, and disclosure analysis.',
    },
  },
  features: {
    title: 'Features - Financial Reporting Tools',
    description: 'Explore Finrep\'s powerful features: Comment Letter Explorer, SEC filing analysis, technical accounting automation, and AI-powered insights.',
    openGraph: {
      title: 'Features - Financial Reporting Tools | Finrep',
      description: 'Explore Finrep\'s powerful features for CFO offices and finance teams.',
    },
  },
  usecases: {
    title: 'Use Cases - Solutions for Finance Teams',
    description: 'Discover how CFOs, Controllers, Auditors, and IR teams use Finrep to streamline SEC reporting, technical accounting, and financial disclosure.',
    openGraph: {
      title: 'Use Cases - Solutions for Finance Teams | Finrep',
      description: 'Discover how finance teams use Finrep to streamline reporting workflows.',
    },
  },
  pricing: {
    title: 'Pricing - Choose Your Plan',
    description: 'Flexible pricing for teams of all sizes. Start free or choose Pro/Enterprise plans with advanced features for financial reporting intelligence.',
    openGraph: {
      title: 'Pricing - Choose Your Plan | Finrep',
      description: 'Flexible pricing for financial reporting intelligence.',
    },
  },
  security: {
    title: 'Security & Compliance - Enterprise-Grade Protection',
    description: 'SOC 2 Type II certified. Zero data residency. Enterprise-grade security for your financial data with EDGAR-native architecture.',
    openGraph: {
      title: 'Security & Compliance | Finrep',
      description: 'Enterprise-grade security and compliance for financial reporting.',
    },
  },
  resources: {
    title: 'Resources - Insights & Best Practices',
    description: 'Stay updated with financial reporting insights, SEC guidance, technical accounting best practices, and industry trends.',
    openGraph: {
      title: 'Resources - Insights & Best Practices | Finrep',
      description: 'Financial reporting insights and best practices.',
    },
  },
  blogs: {
    title: 'Blog - Financial Reporting Insights',
    description: 'Read the latest insights on SEC reporting, technical accounting, financial disclosure, and CFO office best practices.',
    openGraph: {
      title: 'Blog - Financial Reporting Insights | Finrep',
      description: 'Latest insights on financial reporting and accounting.',
    },
  },
  about: {
    title: 'About Us - Our Story',
    description: 'Learn about Finrep\'s mission to transform financial reporting for CFO offices with AI-powered intelligence and automation.',
    openGraph: {
      title: 'About Us - Our Story | Finrep',
      description: 'Learn about Finrep\'s mission to transform financial reporting.',
    },
  },
};
