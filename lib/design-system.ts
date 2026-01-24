/**
 * Finrep Design System
 * Centralized design tokens for colors, typography, spacing, and effects
 */

export const colors = {
  // Brand Colors
  brand: {
    primary: '#0D352A',      // Dark teal - primary brand color
    secondary: '#29AB87',    // Teal accent - CTAs and highlights
    accent: '#FFAF42',       // Orange/yellow - secondary accent
    dark: '#134E3D',         // Dark teal variant
    darker: '#075E37',       // Darker teal variant
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',      // White
    secondary: '#F9F9FA',    // Light gray
    tertiary: '#F4FBF8',     // Light teal tint
    dark: '#0D352A',         // Dark brand background
    darkAlt: '#0E0F10',      // Near black
  },

  // Text Colors
  text: {
    primary: '#0E0F10',      // Dark - main text
    secondary: '#5E6469',    // Medium gray - secondary text
    tertiary: '#9FA4A9',     // Light gray - tertiary text
    inverse: '#FFFFFF',      // White - text on dark backgrounds
    brand: '#29AB87',        // Teal - brand text
  },

  // Border Colors
  border: {
    light: '#E5E7EB',        // Light gray border
    medium: '#D1D5DB',       // Medium gray border
    dark: '#9FA4A9',         // Dark gray border
    brand: '#29AB87',        // Teal border
  },

  // State Colors
  state: {
    success: '#10B981',      // Green
    warning: '#F59E0B',      // Amber
    error: '#EF4444',        // Red
    info: '#3B82F6',         // Blue
  },
} as const;

export const typography = {
  // Font Families
  fontFamily: {
    articulat: 'var(--font-articulat)',
    bricolage: 'var(--font-bricolage)',
    clash: 'var(--font-clash)',
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  // Font Weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacing = {
  px: '1px',
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  base: '0.25rem',    // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',
} as const;

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

export const transitions = {
  // Duration
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  // Easing
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;



export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
} as const;

// Component-specific design tokens
export const components = {
  button: {
    // Height by size
    height: {
      sm: '2rem',      // 32px
      md: '2.5rem',    // 40px
      lg: '3rem',      // 48px
      xl: '3.5rem',    // 56px
    },

    // Padding by size
    padding: {
      sm: '0.5rem 1rem',
      md: '0.75rem 1.5rem',
      lg: '1rem 2rem',
      xl: '1.25rem 2.5rem',
    },

    // Font size by size
    fontSize: {
      sm: '0.875rem',  // 14px
      md: '1rem',      // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
    },
  },

  input: {
    height: {
      sm: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },

    padding: {
      sm: '0.5rem 0.75rem',
      md: '0.75rem 1rem',
      lg: '1rem 1.25rem',
    },
  },

  card: {
    padding: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },
  },
} as const;

// Type exports for TypeScript
export type ColorKey = keyof typeof colors;
export type SpacingKey = keyof typeof spacing;
export type BorderRadiusKey = keyof typeof borderRadius;
