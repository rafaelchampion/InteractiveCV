'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { coursesList } from '@/data/courses';
import { Badge } from '@/components/ui/Badge';

export const Courses: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="courses" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('courses_title')}
        </h2>
        <Badge variant="accent">
          {t('credentials_badge')}
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-bg-surface/60 shadow-sm flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">+28h</span>
          <span className="text-xs text-text-secondary">{t('courses_stats_hours_desc')}</span>
        </div>

        <div className="p-5 rounded-2xl bg-bg-surface/60 shadow-sm flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">7</span>
          <span className="text-xs text-text-secondary">{t('courses_stats_certs_desc')}</span>
        </div>

        <div className="p-5 rounded-2xl bg-bg-surface/60 shadow-sm flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">Balta & Udemy</span>
          <span className="text-xs text-text-secondary">{t('courses_stats_focus')}</span>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-3">
        {coursesList.map((course) => (
          <div
            key={course.id}
            className="p-4 sm:p-5 rounded-2xl bg-bg-surface/50 hover:bg-bg-surface/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all"
          >
            <div>
              <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary mb-2">
                {t(course.titleKey as any)}
              </h3>
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
          </div>
        ))}
      </div>
    </section>
  );
};
