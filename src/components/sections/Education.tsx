'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationDegrees } from '@/data/education';
import { Badge } from '@/components/ui/Badge';
import { FaBuildingColumns, FaSchool } from 'react-icons/fa6';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('education_title')}
        </h2>
        <Badge variant="accent">
          {t('academic_degrees_badge')}
        </Badge>
      </div>

      {/* Degrees List */}
      <div className="space-y-6">
        {educationDegrees.map((deg) => (
          <div
            key={deg.id}
            className="p-5 sm:p-6 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface/90 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-heading font-bold text-base sm:text-lg text-text-primary">
                {t(deg.degreeKey as any)}
              </h3>
              <Badge variant="subtle">
                {t(deg.dateKey as any)}
              </Badge>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-accent-subtle text-accent-primary mb-3">
              {deg.id === 'computer_engineering' ? (
                <FaBuildingColumns className="w-3 h-3" />
              ) : (
                <FaSchool className="w-3 h-3" />
              )}
              <span>{deg.institution}</span>
            </div>

            {deg.thesis1Key && (
              <p className="text-xs sm:text-sm text-text-secondary mb-2">
                <strong className="text-text-primary font-semibold">
                  {t('education_initiation_program')}{' '}
                </strong>
                {t(deg.thesis1Key as any)}
              </p>
            )}

            {deg.thesis2Key && (
              <p className="text-xs sm:text-sm text-text-secondary">
                <strong className="text-text-primary font-semibold">
                  {t('education_thesis')}{' '}
                </strong>
                {t(deg.thesis2Key as any)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
