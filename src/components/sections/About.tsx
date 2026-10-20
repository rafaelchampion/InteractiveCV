'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Text } from '@/components/ui/Typography';
import { FaBriefcase, FaCubes, FaGem } from 'react-icons/fa6';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="about-me">
      <SectionHeader
        title={t('about_title')}
        badgeText={t('status_available')}
      />

      <Text variant="body" className="mb-10">
        {t('about_content')}
      </Text>

      {/* Highlights Grid with standardized Card styling */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card variant="default" className="flex items-center gap-3.5 p-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary shrink-0">
            <FaBriefcase className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_exp')}
          </span>
        </Card>

        <Card variant="default" className="flex items-center gap-3.5 p-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary shrink-0">
            <FaCubes className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_focus')}
          </span>
        </Card>

        <Card variant="default" className="flex items-center gap-3.5 p-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary shrink-0">
            <FaGem className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_quality')}
          </span>
        </Card>
      </div>
    </Section>
  );
};
