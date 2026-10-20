'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';
import {
  FaWandMagicSparkles,
  FaMicrochip,
  FaAtom,
  FaComments,
  FaPeopleGroup,
} from 'react-icons/fa6';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="interests">
      <SectionHeader
        title={t('interests_title')}
        badgeText={t('vision_badge')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured Card: AI as Force Multiplier */}
        <Card
          variant="default"
          gradient
          className="md:col-span-2 p-6 sm:p-8 group"
        >
          <Heading level={3} className="gradient-text flex items-center gap-2.5 mb-3">
            <FaWandMagicSparkles className="text-accent-primary shrink-0" />
            <span>{t('interests_ai_title')}</span>
          </Heading>
          <Text variant="body" className="mb-3">
            {t('interests_ai_1')}
          </Text>
          <Text variant="body">
            {t('interests_ai_2')}
          </Text>
        </Card>

        {/* Technology & Craftsmanship */}
        <Card variant="default" className="p-6">
          <Heading level={4} className="flex items-center gap-2 mb-2 text-sm sm:text-base">
            <FaMicrochip className="text-accent-primary shrink-0" />
            <span>{t('interests_tech_title')}</span>
          </Heading>
          <Text variant="body">
            {t('interests_tech')}
          </Text>
        </Card>

        {/* Scientific Rigor */}
        <Card variant="default" className="p-6">
          <Heading level={4} className="flex items-center gap-2 mb-2 text-sm sm:text-base">
            <FaAtom className="text-accent-primary shrink-0" />
            <span>{t('interests_science_title')}</span>
          </Heading>
          <Text variant="body">
            {t('interests_science')}
          </Text>
        </Card>

        {/* Transparent Communication */}
        <Card variant="default" className="p-6">
          <Heading level={4} className="flex items-center gap-2 mb-2 text-sm sm:text-base">
            <FaComments className="text-accent-primary shrink-0" />
            <span>{t('interests_communication_title')}</span>
          </Heading>
          <Text variant="body">
            {t('interests_communication')}
          </Text>
        </Card>

        {/* Collaborative Leadership */}
        <Card variant="default" className="p-6">
          <Heading level={4} className="flex items-center gap-2 mb-2 text-sm sm:text-base">
            <FaPeopleGroup className="text-accent-primary shrink-0" />
            <span>{t('interests_teamwork_title')}</span>
          </Heading>
          <Text variant="body">
            {t('interests_teamwork')}
          </Text>
        </Card>
      </div>
    </Section>
  );
};
