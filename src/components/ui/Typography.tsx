import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className = '',
  ...props
}) => {
  const styles = {
    1: 'font-heading font-bold text-3xl sm:text-4xl text-text-primary tracking-tight',
    2: 'font-heading font-medium weight-500 text-xl sm:text-2xl text-text-primary tracking-tight',
    3: 'font-heading font-bold text-lg sm:text-xl text-text-primary',
    4: 'font-heading font-semibold text-base sm:text-lg text-text-primary',
  };

  const Component = `h${level}` as React.ElementType;

  return (
    <Component className={`${styles[level]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'lead' | 'body' | 'muted' | 'small' | 'mono';
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as: Component = 'p',
  children,
  className = '',
  ...props
}) => {
  const styles = {
    lead: 'text-base sm:text-lg text-text-primary leading-relaxed',
    body: 'text-sm sm:text-base text-text-secondary !leading-8',
    muted: 'text-xs sm:text-sm text-text-tertiary leading-relaxed',
    small: 'text-xs text-text-secondary leading-normal',
    mono: 'font-mono text-xs sm:text-sm text-text-secondary',
  };

  return (
    <Component className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};
