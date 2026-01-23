import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  centerContent?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      maxWidth = 'xl',
      padding = true,
      centerContent = false,
      children,
      ...props
    },
    ref
  ) => {
    // Max width styles
    const maxWidthStyles = {
      sm: 'max-w-[640px]',
      md: 'max-w-[768px]',
      lg: 'max-w-[1024px]',
      xl: 'max-w-[1440px]',
      '2xl': 'max-w-[1536px]',
      full: 'max-w-full',
    };

    // Padding styles - px-4 on mobile, px-6 on sm, px-[120px] on md+
    const paddingStyles = padding ? 'px-4 sm:px-6 md:px-[60px] lg:px-[120px]' : '';

    // Center content styles
    const centerStyles = centerContent ? 'mx-auto' : '';

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          maxWidthStyles[maxWidth],
          paddingStyles,
          centerStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container };
