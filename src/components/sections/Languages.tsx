'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import { Badge } from '@/components/ui/Badge';

export const Languages: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="languages" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('languages_title')}
        </h2>
        <Badge variant="accent">
          {t('fluency_badge')}
        </Badge>
      </div>

      {/* Languages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Portuguese */}
        <div className="p-5 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface/90 shadow-sm flex items-center gap-4 transition-all">
          <img
            src={getAssetPath('/img/flags/bra.webp')}
            alt="Bandeira do Brasil"
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-border-subtle/50"
          />
          <div>
            <h3 className="font-heading font-semibold text-base text-text-primary">
              {t('language_portuguese')}
            </h3>
            <p className="text-xs text-accent-primary font-semibold mt-0.5">
              {t('proficiency_native')}
            </p>
          </div>
        </div>

        {/* English */}
        <div className="p-5 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface/90 shadow-sm flex items-center gap-4 transition-all">
          <img
            src={getAssetPath('/img/flags/usa.webp')}
            alt="Bandeira dos EUA"
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-border-subtle/50"
          />
          <div>
            <h3 className="font-heading font-semibold text-base text-text-primary">
              {t('language_english')}
            </h3>
            <p className="text-xs text-accent-primary font-semibold mt-0.5">
              {t('proficiency_fluent')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
