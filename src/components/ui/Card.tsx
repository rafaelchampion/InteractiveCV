import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass';
  gradient?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  gradient = false,
  children,
  className = '',
  ...props
}) => {
  const styles = {
    default:
      'bg-bg-surface/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-border-medium hover:bg-bg-surface shadow-sm',
    elevated:
      'bg-bg-elevated/80 border border-subtle rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-border-medium hover:bg-bg-surface shadow-sm',
    glass:
      'bg-bg-glass backdrop-blur-xl border border-subtle rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm',
  };

  return (
    <div
      className={`${styles[variant]} ${gradient ? 'relative overflow-hidden' : ''} ${className}`}
      {...props}
    >
      {gradient && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(to top right, transparent 0%, transparent 20%, var(--accent-subtle) 100%)',
          }}
        />
      )}
      {children}
    </div>
  );
};
