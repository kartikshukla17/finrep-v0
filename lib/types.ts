/**
 * Global TypeScript Type Definitions
 * Centralized types for the Finrep application
 */

// ============================================================================
// Navigation & Links
// ============================================================================

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

// ============================================================================
// Content Types
// ============================================================================

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt?: string;
  content: string;
  category: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  tags: string[];
  readTime?: number;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'Blog' | 'Case Study' | 'Guide' | 'Whitepaper' | 'Webinar';
  date: string;
  image: string;
  url: string;
}

// ============================================================================
// Feature & Product Types
// ============================================================================

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  benefits?: string[];
  link?: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  targetAudience: string;
  image?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaLink?: string;
}

// ============================================================================
// Team & Company Types
// ============================================================================

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Investor {
  name: string;
  logo: string;
  alt: string;
  website?: string;
}

// ============================================================================
// Security & Compliance
// ============================================================================

export interface Certification {
  id: string;
  name: string;
  description: string;
  logo: string;
  issuer: string;
  validUntil?: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ============================================================================
// Form Types
// ============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface DemoRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle?: string;
  phone?: string;
  message?: string;
}

// ============================================================================
// API Response Types
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============================================================================
// UI State Types
// ============================================================================

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

export interface ModalState {
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
  onClose?: () => void;
}

// ============================================================================
// Analytics & Tracking
// ============================================================================

export interface AnalyticsEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

export interface PageView {
  path: string;
  title: string;
  referrer?: string;
  timestamp: number;
}

// ============================================================================
// Search & Filtering
// ============================================================================

export interface SearchParams {
  query: string;
  filters?: Record<string, any>;
  sort?: SortOption;
  page?: number;
  pageSize?: number;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterOption {
  id: string;
  label: string;
  value: string | number | boolean;
  count?: number;
}

// ============================================================================
// Component Prop Types
// ============================================================================

export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ColorScheme = 'light' | 'dark';
export type ButtonType = 'button' | 'submit' | 'reset';

// ============================================================================
// Utility Types
// ============================================================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ValueOf<T> = T[keyof T];
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

// ============================================================================
// Date & Time
// ============================================================================

export type DateString = string; // ISO 8601 format
export type Timestamp = number; // Unix timestamp

// ============================================================================
// Image Types
// ============================================================================

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

// ============================================================================
// FAQ Types
// ============================================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ============================================================================
// Testimonial Types
// ============================================================================

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating?: number;
}

// ============================================================================
// Metrics & Statistics
// ============================================================================

export interface Metric {
  id: string;
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
}

// ============================================================================
// Export groups for convenience
// ============================================================================

export type {
  // Re-export commonly used types
  NavLink,
  Feature,
  BlogPost,
  PricingTier,
  ApiResponse,
  LoadingState,
};
