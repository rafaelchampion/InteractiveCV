import React from 'react';
import { Heading } from './Typography';
import { Badge } from './Badge';

interface SectionHeaderProps {
  title: React.ReactNode;
  badgeText?: string;
  badgeVariant?: 'accent' | 'subtle' | 'success';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  badgeText,
  badgeVariant = 'accent',
  action,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 ${className}`}
    >
      <div className="flex items-center gap-3">
        <Heading level={2}>{title}</Heading>
      </div>

      <div className="flex items-center gap-3">
        {action}
        {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
      </div>
    </div>
  );
};
