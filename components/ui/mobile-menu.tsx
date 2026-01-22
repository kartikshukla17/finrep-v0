'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from './button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'light' | 'dark';
  navLinks: Array<{ name: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, variant = 'light', navLinks }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[280px] sm:w-[320px]',
          'bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out lg:hidden',
          'flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <h2 className="text-lg font-semibold font-articulat text-[#0E0F10]">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-[#0E0F10]" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium font-articulat',
                    'text-[#0E0F10] hover:bg-[#F4FBF8] hover:text-[#29AB87]',
                    'transition-colors duration-200'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="p-6 border-t border-[#E5E7EB] space-y-3">
          <Button variant="outline" size="md" fullWidth>
            Login
          </Button>
          <Button variant="primary" size="md" fullWidth>
            Request Access
          </Button>
        </div>
      </div>
    </>
  );
}
