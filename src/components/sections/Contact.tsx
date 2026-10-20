'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Text } from '@/components/ui/Typography';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa6';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="socials">
      <SectionHeader
        title={t('socials_title')}
        badgeText={t('get_in_touch_badge')}
      />

      <Text variant="lead" className="font-semibold text-text-primary mb-2">
        {t('socials_intro')}
      </Text>
      <Text variant="body" className="mb-8">
        {t('socials_invite')}
      </Text>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rafael-ferreira93"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <Card variant="default" className="p-5 flex items-center gap-4 transition-all">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors shrink-0">
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
          </Card>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rafaelchampion"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <Card variant="default" className="p-5 flex items-center gap-4 transition-all">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors shrink-0">
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
          </Card>
        </a>

        {/* Email */}
        <a
          href="mailto:rafael_comunhao@hotmail.com"
          className="group block"
        >
          <Card variant="default" className="p-5 flex items-center gap-4 transition-all">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors shrink-0">
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
          </Card>
        </a>
      </div>
    </Section>
  );
};
