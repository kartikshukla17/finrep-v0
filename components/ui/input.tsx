import React from 'react';
import { cn } from '@/lib/utils';
import { colors, components } from '@/lib/design-system';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  helperText?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      size = 'md',
      error = false,
      helperText,
      label,
      leftIcon,
      rightIcon,
      fullWidth = false,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${React.useId()}`;

    // Base input styles
    const baseStyles = cn(
      'flex items-center border rounded-lg transition-all duration-200',
      'focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50'
    );

    // Size styles
    const sizeStyles = {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base',
      lg: 'h-12 text-lg',
    };

    // Padding styles (adjust for icons)
    const getPaddingStyles = () => {
      const basePadding = {
        sm: leftIcon ? 'pl-9 pr-3' : rightIcon ? 'pl-3 pr-9' : 'px-3',
        md: leftIcon ? 'pl-10 pr-4' : rightIcon ? 'pl-4 pr-10' : 'px-4',
        lg: leftIcon ? 'pl-12 pr-5' : rightIcon ? 'pl-5 pr-12' : 'px-5',
      };
      return basePadding[size];
    };

    // Error/default border styles
    const borderStyles = error
      ? 'border-red-500 focus-within:ring-red-500'
      : 'border-[#E5E7EB] focus-within:ring-[#29AB87] focus-within:border-[#29AB87]';

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : '')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[#0E0F10]"
          >
            {label}
          </label>
        )}

        <div className={cn('relative', widthStyles)}>
          {leftIcon && (
            <div className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none',
              'text-[#9FA4A9]',
              size === 'sm' && 'left-2.5',
              size === 'lg' && 'left-4'
            )}>
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            id={inputId}
            disabled={disabled}
            className={cn(
              baseStyles,
              sizeStyles[size],
              getPaddingStyles(),
              borderStyles,
              widthStyles,
              'bg-white text-[#0E0F10] placeholder:text-[#9FA4A9]',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none',
              'text-[#9FA4A9]',
              size === 'sm' && 'right-2.5',
              size === 'lg' && 'right-4'
            )}>
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && (
          <p className={cn(
            'text-xs',
            error ? 'text-red-500' : 'text-[#5E6469]'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
