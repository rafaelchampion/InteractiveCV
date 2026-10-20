'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FaUserTie, FaBriefcase, FaCubes, FaGem } from 'react-icons/fa6';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about-me" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaUserTie className="text-accent-primary" />
          <span>{t('about_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          {t('status_available')}
        </span>
      </div>

      {/* Narrative Paragraph */}
      <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-8">
        {t('about_content')}
      </p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm hover:border-accent-primary/40 hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary">
            <FaBriefcase className="w-5 h-5" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_exp')}
          </span>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm hover:border-accent-primary/40 hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary">
            <FaCubes className="w-5 h-5" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_focus')}
          </span>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm hover:border-accent-primary/40 hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary">
            <FaGem className="w-5 h-5" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary">
            {t('about_highlight_quality')}
          </span>
        </div>
      </div>
    </section>
  );
};
