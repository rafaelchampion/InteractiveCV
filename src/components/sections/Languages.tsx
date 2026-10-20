'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import { FaGlobe } from 'react-icons/fa6';

export const Languages: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="languages" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaGlobe className="text-accent-primary" />
          <span>{t('languages_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          Fluency
        </span>
      </div>

      {/* Languages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Portuguese */}
        <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm flex items-center gap-4 hover:border-border-medium hover:shadow-md transition-all">
          <img
            src={getAssetPath('/img/flags/bra.webp')}
            alt="Bandeira do Brasil"
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-border-subtle"
          />
          <div>
            <h3 className="font-heading font-semibold text-base text-text-primary">
              {t('language_portuguese')}
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              {t('proficiency_native')}
            </p>
          </div>
        </div>

        {/* English */}
        <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm flex items-center gap-4 hover:border-border-medium hover:shadow-md transition-all">
          <img
            src={getAssetPath('/img/flags/usa.webp')}
            alt="Bandeira dos EUA"
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-border-subtle"
          />
          <div>
            <h3 className="font-heading font-semibold text-base text-text-primary">
              {t('language_english')}
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              {t('proficiency_fluent')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
