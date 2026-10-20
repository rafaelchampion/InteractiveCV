'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { careerJobs } from '@/data/career';
import { FaBriefcase, FaBuilding, FaChevronDown } from 'react-icons/fa6';

export const CareerTimeline: React.FC = () => {
  const { t } = useLanguage();
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({});

  const toggleJob = (id: string) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="career" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaBriefcase className="text-accent-primary" />
          <span>{t('career_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          Timeline
        </span>
      </div>

      {/* Vertical Stepper Timeline */}
      <div className="relative border-l-2 border-border-subtle ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {careerJobs.map((job) => {
          const isExpanded = !!expandedJobs[job.id];

          return (
            <div key={job.id} className="relative group">
              {/* Timeline Glowing Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg-surface border-2 border-accent-primary group-hover:scale-125 group-hover:shadow-[0_0_12px_var(--accent-primary)] transition-all" />

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm hover:border-border-medium hover:shadow-md transition-all">
                {/* Header: Title and Date Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-text-primary">
                    {t(job.titleKey as any)}
                  </h3>
                  <span className="self-start sm:self-auto text-xs font-medium px-2.5 py-1 rounded-full bg-bg-elevated text-text-secondary border border-border-subtle whitespace-nowrap">
                    {t(job.dateKey as any)}
                  </span>
                </div>

                {/* Company Pill */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-accent-subtle text-accent-primary mb-3">
                  <FaBuilding className="w-3 h-3" />
                  <span>{t(job.companyKey as any)}</span>
                </div>

                {/* Summary */}
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                  {t(job.summaryKey as any)}
                </p>

                {/* Deep Dive Accordion Toggle Button */}
                <button
                  onClick={() => toggleJob(job.id)}
                  aria-expanded={isExpanded}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
                >
                  <span>
                    {isExpanded ? t('career_collapse_details') : t('career_expand_details')}
                  </span>
                  <FaChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expandable Technical Deep Dive Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border-subtle animate-fade-in">
                    <ul className="space-y-2.5 pl-4 list-disc text-xs sm:text-sm text-text-secondary">
                      {job.descriptionKeys.map((descKey) => (
                        <li key={descKey} className="leading-relaxed">
                          {t(descKey as any)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
