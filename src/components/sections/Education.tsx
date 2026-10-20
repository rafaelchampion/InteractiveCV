'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationDegrees } from '@/data/education';
import { FaGraduationCap, FaBuildingColumns, FaSchool } from 'react-icons/fa6';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaGraduationCap className="text-accent-primary" />
          <span>{t('education_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          Academic Degrees
        </span>
      </div>

      {/* Degrees List */}
      <div className="relative border-l-2 border-border-subtle ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-6">
        {educationDegrees.map((deg) => (
          <div key={deg.id} className="relative group">
            {/* Timeline Glowing Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg-surface border-2 border-accent-primary group-hover:scale-125 group-hover:shadow-[0_0_12px_var(--accent-primary)] transition-all" />

            <div className="p-5 sm:p-6 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm hover:border-border-medium hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-heading font-bold text-base sm:text-lg text-text-primary">
                  {t(deg.degreeKey as any)}
                </h3>
                <span className="self-start sm:self-auto text-xs font-medium px-2.5 py-1 rounded-full bg-bg-elevated text-text-secondary border border-border-subtle whitespace-nowrap">
                  {t(deg.dateKey as any)}
                </span>
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
          </div>
        ))}
      </div>
    </section>
  );
};
