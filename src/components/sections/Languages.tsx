'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';

export const Languages: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="languages">
      <SectionHeader
        title={t('languages_title')}
        badgeText={t('fluency_badge')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Portuguese */}
        <Card variant="default" className="p-5 flex items-center gap-4">
          <img
            src={getAssetPath('/img/flags/bra.webp')}
            alt="Bandeira do Brasil"
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-subtle"
          />
          <div>
            <Heading level={4} className="text-base mb-0.5">
              {t('language_portuguese')}
            </Heading>
            <Text variant="small" className="text-accent-primary font-semibold">
              {t('proficiency_native')}
            </Text>
          </div>
        </Card>

        {/* English */}
        <Card variant="default" className="p-5 flex items-center gap-4">
          <img
            src={getAssetPath('/img/flags/usa.webp')}
            alt="Bandeira dos EUA"
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-subtle"
          />
          <div>
            <Heading level={4} className="text-base mb-0.5">
              {t('language_english')}
            </Heading>
            <Text variant="small" className="text-accent-primary font-semibold">
              {t('proficiency_fluent')}
            </Text>
          </div>
        </Card>
      </div>
    </Section>
  );
};
