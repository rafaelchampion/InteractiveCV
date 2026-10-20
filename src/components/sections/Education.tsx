'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationDegrees } from '@/data/education';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { Heading, Text } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { FaBuildingColumns, FaSchool } from 'react-icons/fa6';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="education">
      <SectionHeader
        title={t('education_title')}
        badgeText={t('academic_degrees_badge')}
      />

      <Timeline>
        {educationDegrees.map((deg, index) => {
          const isLast = index === educationDegrees.length - 1;

          return (
            <TimelineItem key={deg.id} isLast={isLast}>
              <Card variant="default">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <Heading level={3} className="text-base sm:text-lg">
                    {t(deg.degreeKey as any)}
                  </Heading>
                  <Badge variant="subtle">
                    {t(deg.dateKey as any)}
                  </Badge>
                </div>

                <Text
                  as="div"
                  variant="small"
                  className="inline-flex items-center gap-1.5 font-semibold text-accent-primary mb-3"
                >
                  {deg.id === 'computer_engineering' ? (
                    <FaBuildingColumns className="w-3 h-3" />
                  ) : (
                    <FaSchool className="w-3 h-3" />
                  )}
                  <span>{deg.institution}</span>
                </Text>

                {deg.thesis1Key && (
                  <Text variant="body" className="mb-2">
                    <strong className="text-text-primary font-semibold">
                      {t('education_initiation_program')}{' '}
                    </strong>
                    {t(deg.thesis1Key as any)}
                  </Text>
                )}

                {deg.thesis2Key && (
                  <Text variant="body">
                    <strong className="text-text-primary font-semibold">
                      {t('education_thesis')}{' '}
                    </strong>
                    {t(deg.thesis2Key as any)}
                  </Text>
                )}
              </Card>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
};
