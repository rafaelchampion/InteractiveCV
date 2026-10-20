import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'subtle' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className = '',
}) => {
  const variantStyles = {
    accent:
      'bg-accent-subtle text-accent-primary border border-focus shadow-[0_0_10px_var(--accent-glow)]',
    subtle:
      'bg-bg-surface text-text-secondary border border-subtle',
    success:
      'bg-status-success/10 text-status-success border border-status-success/30',
  };

  return (
    <span
      className={`inline-flex items-center text-[12px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full transition-all whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
