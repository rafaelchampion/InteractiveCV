import React from 'react';

interface BadgeProps {
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
      'bg-accent-subtle text-accent-primary border border-accent-secondary/30 shadow-[0_0_10px_var(--accent-glow)]',
    subtle:
      'bg-bg-elevated/70 text-text-secondary border border-border-subtle',
    success:
      'bg-status-success/10 text-status-success border border-status-success/30',
  };

  return (
    <span
      className={`inline-flex items-center text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full transition-all whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
