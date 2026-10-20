'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { careerJobs } from '@/data/career';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { Heading, Text } from '@/components/ui/Typography';
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
    <Section id="career">
      <SectionHeader
        title={t('career_title')}
        badgeText={t('timeline_badge')}
      />

      <Timeline>
        {careerJobs.map((job, index) => {
          const isExpanded = !!expandedJobs[job.id];
          const isLast = index === careerJobs.length - 1;

          return (
            <TimelineItem key={job.id} isLast={isLast}>
              <Card variant="default">
                {/* Header Row: Title and Date Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <Heading level={3} className="text-base sm:text-lg">
                    {t(job.titleKey as any)}
                  </Heading>
                  <Badge variant="subtle">
                    {t(job.dateKey as any)}
                  </Badge>
                </div>

                {/* Company Pill */}
                <Text
                  as="div"
                  variant="small"
                  className="inline-flex items-center gap-1.5 font-semibold text-accent-primary mb-3"
                >
                  <FaBuilding className="w-3 h-3" />
                  <span>{t(job.companyKey as any)}</span>
                </Text>

                {/* Summary */}
                <Text variant="body" className="mb-4">
                  {t(job.summaryKey as any)}
                </Text>

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
                    className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Smooth Expansion Container using CSS Grid rows + text blur-fade */}
                <div
                  className={`grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isExpanded ? 'grid-rows-[1fr] mt-4 pt-4' : 'grid-rows-[0fr]'
                    }`}
                >
                  <div className="min-h-0">
                    <ul
                      className={`space-y-2.5 list-disc text-xs sm:text-sm bg-indigo-500/5 rounded-xl p-8 text-text-secondary transition-all duration-500 ease-out ${isExpanded
                        ? 'opacity-100 blur-0 translate-y-0'
                        : 'opacity-0 blur-sm -translate-y-2 pointer-events-none'
                        }`}
                    >
                      {job.descriptionKeys.map((descKey) => (
                        <Text as="li" variant="body" key={descKey} className="leading-relaxed">
                          {t(descKey as any)}
                        </Text>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
};
