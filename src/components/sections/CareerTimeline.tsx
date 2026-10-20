'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { careerJobs } from '@/data/career';
import { Badge } from '@/components/ui/Badge';
import { FaBuilding, FaChevronDown } from 'react-icons/fa6';

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
    <section id="career" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('career_title')}
        </h2>
        <Badge variant="accent">
          {t('timeline_badge')}
        </Badge>
      </div>

      {/* Stepper Timeline Container */}
      <div className="relative space-y-6 sm:space-y-8 pl-8 sm:pl-10">
        {careerJobs.map((job, index) => {
          const isExpanded = !!expandedJobs[job.id];
          const isFirst = index === 0;
          const isLast = index === careerJobs.length - 1;

          return (
            <div key={job.id} className="relative group">
              {/* Connecting vertical line segment */}
              {!isLast ? (
                // Line from this item's vertical center down to the next item
                <div className="absolute -left-6 sm:-left-7 top-1/2 w-0.5 h-[calc(100%+1.5rem)] sm:h-[calc(100%+2rem)] bg-border-medium/60 z-0 pointer-events-none transition-all duration-300" />
              ) : (
                // Line below the oldest item: fades smoothly to transparent
                <div className="absolute -left-6 sm:-left-7 top-1/2 w-0.5 h-16 bg-gradient-to-b from-border-medium/60 via-accent-primary/30 to-transparent z-0 pointer-events-none" />
              )}

              {/* Marker: Centered to the exact vertical midpoint of the card */}
              <div
                className="absolute -left-[31px] sm:-left-[35px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-bg-surface border-2 border-accent-primary shadow-[0_0_8px_var(--accent-glow)] z-10 group-hover:scale-125 group-hover:bg-accent-primary group-hover:shadow-[0_0_14px_var(--accent-primary)] transition-all duration-300"
                style={{
                  // Smoothly shifts with card expansion
                  transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease, background-color 0.2s',
                }}
              />

              {/* Card Container with smooth height stretch */}
              <div
                className="p-5 sm:p-6 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface/90 transition-all duration-300 shadow-sm"
              >
                {/* Header Row: Title and Date Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-text-primary">
                    {t(job.titleKey as any)}
                  </h3>
                  <Badge variant="subtle">
                    {t(job.dateKey as any)}
                  </Badge>
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
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Smooth Expansion Container using CSS Grid rows + text blur-fade */}
                <div
                  className={`grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                    isExpanded ? 'grid-rows-[1fr] mt-4 pt-4 border-t border-border-subtle/50' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0">
                    <ul
                      className={`space-y-2.5 pl-4 list-disc text-xs sm:text-sm text-text-secondary transition-all duration-500 ease-out ${
                        isExpanded
                          ? 'opacity-100 blur-0 translate-y-0'
                          : 'opacity-0 blur-sm -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {job.descriptionKeys.map((descKey) => (
                        <li key={descKey} className="leading-relaxed">
                          {t(descKey as any)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
