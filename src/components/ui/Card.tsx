import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass';
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const styles = {
    default:
      'bg-bg-surface/70 border border-border-subtle rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-border-medium hover:bg-bg-surface shadow-sm',
    elevated:
      'bg-bg-elevated/80 border border-border-subtle rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-border-medium hover:bg-bg-surface shadow-sm',
    glass:
      'bg-bg-glass backdrop-blur-xl border border-border-subtle rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm',
  };

  return (
    <div className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
