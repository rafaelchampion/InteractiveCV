'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { coursesList } from '@/data/courses';
import { FaCertificate } from 'react-icons/fa6';

export const Courses: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="courses" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaCertificate className="text-accent-primary" />
          <span>{t('courses_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          Credentials
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">+28h</span>
          <span className="text-xs text-text-secondary">{t('courses_stats_hours_desc')}</span>
        </div>

        <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">7</span>
          <span className="text-xs text-text-secondary">{t('courses_stats_certs_desc')}</span>
        </div>

        <div className="p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm flex flex-col items-center text-center">
          <span className="font-heading font-bold text-2xl text-accent-primary mb-1">Balta & Udemy</span>
          <span className="text-xs text-text-secondary">{t('courses_stats_focus')}</span>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-3">
        {coursesList.map((course) => (
          <div
            key={course.id}
            className="p-4 sm:p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-border-medium hover:shadow-md transition-all"
          >
            <div>
              <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary mb-2">
                {t(course.titleKey as any)}
              </h3>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-accent-subtle text-accent-primary">
                  {course.platform}
                </span>
                {course.badges.map((b) => (
                  <span
                    key={b}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-bg-elevated text-text-secondary border border-border-subtle"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <span className="self-start sm:self-auto text-xs font-semibold text-text-tertiary whitespace-nowrap">
              {course.duration} {t('course_hours')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
