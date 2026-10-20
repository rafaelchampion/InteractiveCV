'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { FaBriefcase, FaCubes, FaGem } from 'react-icons/fa6';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about-me" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('about_title')}
        </h2>
        <Badge variant="accent">
          {t('status_available')}
        </Badge>
      </div>

      {/* Narrative Paragraph */}
      <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-10">
        {t('about_content')}
      </p>

      {/* Highlights Grid with minimalist card styling */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface transition-all">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary">
            <FaBriefcase className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_exp')}
          </span>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface transition-all">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary">
            <FaCubes className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_focus')}
          </span>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface transition-all">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary">
            <FaGem className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_quality')}
          </span>
        </div>
      </div>
    </section>
  );
};
