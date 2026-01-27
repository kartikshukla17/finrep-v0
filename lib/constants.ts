/**
 * Application Constants
 * Centralized configuration for navigation, content, and settings
 */

export const NAV_LINKS = [
  { name: "Features", href: "/features" },
  { name: "Usecases", href: "/usecases" },
  { name: "Security", href: "/security" },
  { name: "Resources", href: "/resources" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
] as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/finrep",
  linkedin: "https://linkedin.com/company/finrep",
  github: "https://github.com/finrep",
} as const;

export const FOOTER_LINKS = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Use Cases", href: "/usecases" },
    { name: "Pricing", href: "/pricing" },
    { name: "Security", href: "/security" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Community", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Compliance", href: "/security" },
  ],
} as const;

export const TRUST_BADGES = [
  {
    name: "SOC 2 Type II",
    logo: "/assets/images/image 305.png",
    alt: "SOC 2 Type II Certified",
  },
  {
    name: "ISO 27001",
    logo: "/assets/images/image 3628.png",
    alt: "ISO 27001 Certified",
  },
] as const;

export const INVESTORS = [
  {
    name: "Accel",
    logo: "/assets/company_logos/accel-logo.svg",
    alt: "Accel Logo",
  },
] as const;

export const CONTACT_INFO = {
  email: "hello@finrep.com",
  phone: "+1 (555) 123-4567",
  address: "123 Financial St, San Francisco, CA 94105",
} as const;

// Feature categories for filtering
export const FEATURE_CATEGORIES = [
  "All",
  "SEC Reporting",
  "Technical Accounting",
  "Disclosure Analysis",
  "Comment Letters",
  "AI & Automation",
] as const;

// Blog categories
export const BLOG_CATEGORIES = [
  "Blogs",
  "Company",
  "AI & Tech",
  "SEC Journal",
] as const;

// Pricing tiers
export const PRICING_TIERS = {
  starter: {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals getting started",
    features: [
      "Comment Letter Explorer access",
      "Basic search capabilities",
      "Up to 10 searches per month",
      "Email support",
    ],
    highlighted: false,
  },
  pro: {
    name: "Pro",
    price: "$99",
    period: "per month",
    description: "For growing teams and power users",
    features: [
      "Unlimited searches",
      "Advanced AI analysis",
      "Disclosure comparison tools",
      "Priority support",
      "API access",
      "Custom reports",
    ],
    highlighted: true,
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "Advanced security features",
      "Unlimited team members",
      "Custom training",
    ],
    highlighted: false,
  },
} as const;

// Statistics/metrics
export const METRICS = {
  disclosures: "15K+",
  accuracyRate: "99.9%",
  timeSaved: "50%",
  customers: "500+",
} as const;

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;


// Maximum container width
export const CONTAINER_MAX_WIDTH = 1440;

// Default padding
export const CONTAINER_PADDING = {
  mobile: 24, // 6 * 4px
  desktop: 120, // 30 * 4px
} as const;

export type NavLink = typeof NAV_LINKS[number];
export type FeatureCategory = typeof FEATURE_CATEGORIES[number];
export type BlogCategory = typeof BLOG_CATEGORIES[number];
