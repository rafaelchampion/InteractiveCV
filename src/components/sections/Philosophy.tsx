'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import {
  FaWandMagicSparkles,
  FaMicrochip,
  FaAtom,
  FaComments,
  FaPeopleGroup,
} from 'react-icons/fa6';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="interests" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('interests_title')}
        </h2>
        <Badge variant="accent">
          {t('vision_badge')}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured Card: AI as Force Multiplier */}
        <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-bg-surface/70 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-subtle rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 opacity-40 group-hover:opacity-80 transition-opacity" />

          <h3 className="font-heading font-bold text-lg sm:text-xl gradient-text flex items-center gap-2.5 mb-3">
            <FaWandMagicSparkles className="text-accent-primary" />
            <span>{t('interests_ai_title')}</span>
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3">
            {t('interests_ai_1')}
          </p>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
            {t('interests_ai_2')}
          </p>
        </div>

        {/* Technology & Craftsmanship */}
        <div className="p-6 rounded-2xl bg-bg-surface/50 hover:bg-bg-surface/80 shadow-sm transition-all">
          <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary flex items-center gap-2 mb-2">
            <FaMicrochip className="text-accent-primary" />
            <span>{t('interests_tech_title')}</span>
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
            {t('interests_tech')}
          </p>
        </div>

        {/* Scientific Rigor */}
        <div className="p-6 rounded-2xl bg-bg-surface/50 hover:bg-bg-surface/80 shadow-sm transition-all">
          <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary flex items-center gap-2 mb-2">
            <FaAtom className="text-accent-primary" />
            <span>{t('interests_science_title')}</span>
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
            {t('interests_science')}
          </p>
        </div>

        {/* Transparent Communication */}
        <div className="p-6 rounded-2xl bg-bg-surface/50 hover:bg-bg-surface/80 shadow-sm transition-all">
          <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary flex items-center gap-2 mb-2">
            <FaComments className="text-accent-primary" />
            <span>{t('interests_communication_title')}</span>
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
            {t('interests_communication')}
          </p>
        </div>

        {/* Collaborative Leadership */}
        <div className="p-6 rounded-2xl bg-bg-surface/50 hover:bg-bg-surface/80 shadow-sm transition-all">
          <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary flex items-center gap-2 mb-2">
            <FaPeopleGroup className="text-accent-primary" />
            <span>{t('interests_teamwork_title')}</span>
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
            {t('interests_teamwork')}
          </p>
        </div>
      </div>
    </section>
  );
};
