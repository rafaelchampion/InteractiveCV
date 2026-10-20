'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa6';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="socials" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('socials_title')}
        </h2>
        <Badge variant="accent">
          {t('get_in_touch_badge')}
        </Badge>
      </div>

      <p className="font-semibold text-text-primary text-sm sm:text-base mb-2">
        {t('socials_intro')}
      </p>
      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-8">
        {t('socials_invite')}
      </p>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rafael-ferreira93"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface shadow-sm flex items-center gap-4 transition-all group"
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
            <FaLinkedinIn className="w-5 h-5" />
          </div>
          <div>
            <span className="font-heading font-semibold text-sm text-text-primary group-hover:text-accent-primary transition-colors block">
              {t('socials_linkedin_label')}
            </span>
            <span className="text-xs text-text-tertiary">
              linkedin.com/in/rafael-ferreira93
            </span>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rafaelchampion"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface shadow-sm flex items-center gap-4 transition-all group"
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </div>
          <div>
            <span className="font-heading font-semibold text-sm text-text-primary group-hover:text-accent-primary transition-colors block">
              {t('socials_github_label')}
            </span>
            <span className="text-xs text-text-tertiary">
              github.com/rafaelchampion
            </span>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:rafael_comunhao@hotmail.com"
          className="p-5 rounded-2xl bg-bg-surface/60 hover:bg-bg-surface shadow-sm flex items-center gap-4 transition-all group"
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </div>
          <div>
            <span className="font-heading font-semibold text-sm text-text-primary group-hover:text-accent-primary transition-colors block">
              {t('socials_email_label')}
            </span>
            <span className="text-xs text-text-tertiary">
              rafael_comunhao@hotmail.com
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
