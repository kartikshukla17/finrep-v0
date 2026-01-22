import React from 'react';
import { cn } from '@/lib/utils';
import { colors, components, transitions } from '@/lib/design-system';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2',
      'font-articulat font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'whitespace-nowrap'
    );

    // Variant styles
    const variantStyles = {
      primary: cn(
        'text-white shadow-sm hover:shadow-md',
        'focus:ring-[#29AB87]'
      ),
      secondary: cn(
        'bg-white border shadow-sm hover:shadow-md',
        'focus:ring-[#29AB87]'
      ),
      outline: cn(
        'border-2 bg-transparent hover:bg-opacity-5',
        'focus:ring-[#29AB87]'
      ),
      ghost: cn(
        'bg-transparent hover:bg-opacity-10',
        'focus:ring-[#29AB87]'
      ),
      link: cn(
        'bg-transparent underline-offset-4 hover:underline',
        'focus:ring-0 focus:ring-offset-0'
      ),
    };

    // Size styles
    const sizeStyles = {
      sm: 'h-8 px-4 text-sm rounded-lg',
      md: 'h-10 px-6 text-base rounded-lg',
      lg: 'h-12 px-8 text-lg rounded-xl',
      xl: 'h-14 px-10 text-xl rounded-xl',
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    // Get variant-specific background colors
    const getVariantColorStyles = () => {
      switch (variant) {
        case 'primary':
          return 'bg-[#29AB87] hover:bg-[#259A7A]';
        case 'secondary':
          return 'border-[#E5E7EB] text-[#0E0F10] hover:border-[#29AB87]';
        case 'outline':
          return 'border-[#29AB87] text-[#29AB87] hover:bg-[#29AB87] hover:text-white';
        case 'ghost':
          return 'text-[#29AB87] hover:bg-[#29AB87]';
        case 'link':
          return 'text-[#29AB87] hover:text-[#259A7A]';
        default:
          return '';
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          getVariantColorStyles(),
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
