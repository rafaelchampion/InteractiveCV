import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 scroll-mt-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
