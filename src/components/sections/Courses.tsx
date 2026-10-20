'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { coursesList } from '@/data/courses';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';

export const Courses: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="courses">
      <SectionHeader
        title={t('courses_title')}
        badgeText={t('credentials_badge')}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card variant="default" className="p-5 flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">+28h</span>
          <Text variant="muted">{t('courses_stats_hours_desc')}</Text>
        </Card>

        <Card variant="default" className="p-5 flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">7</span>
          <Text variant="muted">{t('courses_stats_certs_desc')}</Text>
        </Card>

        <Card variant="default" className="p-5 flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">Balta & Udemy</span>
          <Text variant="muted">{t('courses_stats_focus')}</Text>
        </Card>
      </div>

      {/* Courses List */}
      <div className="space-y-3">
        {coursesList.map((course) => (
          <Card
            key={course.id}
            variant="default"
            className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div>
              <Heading level={4} className="text-sm sm:text-base mb-2">
                {t(course.titleKey as any)}
              </Heading>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge variant="accent" className="text-[11px] px-2 py-0.5">
                  {course.platform}
                </Badge>
                {course.badges.map((b) => (
                  <Badge key={b} variant="subtle" className="text-[11px] px-2 py-0.5">
                    {b}
                  </Badge>
                ))}
              </div>
            </div>

            <Badge variant="accent" className="self-start sm:self-auto text-xs px-3 py-1 font-semibold">
              {course.duration} {t('course_hours')}
            </Badge>
          </Card>
        ))}
      </div>
    </Section>
  );
};
