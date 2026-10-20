'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import {
  FaCopy,
  FaCheck,
  FaGithub,
  FaBoxOpen,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';

export const ProjectsBento: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const command = 'dotnet add package Utilbox';
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Section id="projects">
      <SectionHeader
        title={t('projects_title')}
        badgeText="Open Source"
      />

      {/* Utilbox Bento Card */}
      <Card variant="default" className="p-0 overflow-hidden">
        {/* Banner Header Image */}
        <div className="w-full h-44 sm:h-56 bg-bg-elevated relative overflow-hidden">
          <img
            src={getAssetPath('/img/utilbox/utilbox-code-header.webp')}
            alt="Utilbox Code Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bento Card Body */}
        <div className="p-6 sm:p-8">
          {/* Identity Row */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={getAssetPath('/img/utilbox/utilbox-logo.webp')}
              alt="Utilbox Logo"
              className="w-14 h-14 rounded-2xl p-1 bg-bg-elevated object-contain shadow-sm border border-subtle"
            />
            <div>
              <Heading level={3} className="text-xl">
                Utilbox
              </Heading>
              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <Badge variant="accent">
                  {t('project_opensource')}
                </Badge>
                <Badge variant="subtle">
                  {t('project_mit_license')}
                </Badge>
                <Badge variant="subtle">
                  C# / .NET Standard
                </Badge>
              </div>
            </div>
          </div>

          {/* Description */}
          <Text variant="body" className="mb-6">
            {t('project_utilbox_description')}
          </Text>

          {/* CLI Install Box */}
          <div className="flex items-center justify-between p-3.5 mb-6 rounded-2xl bg-bg-elevated/80 border border-subtle font-mono text-xs text-text-primary">
            <code>dotnet add package Utilbox</code>
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all ${
                copied
                  ? 'bg-status-success text-white'
                  : 'bg-bg-surface hover:bg-bg-surface/80 text-text-secondary hover:text-text-primary border border-subtle'
              }`}
            >
              {copied ? <FaCheck className="w-3.5 h-3.5" /> : <FaCopy className="w-3.5 h-3.5" />}
              <span>{copied ? t('copied_label') : t('copy_install_command')}</span>
            </button>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/rafaelchampion/Utilbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-bg-elevated hover:bg-bg-surface text-text-primary border border-subtle hover:border-focus transition-all shadow-sm"
            >
              <FaGithub className="w-4 h-4 text-accent-primary" />
              <span>{t('view_github')}</span>
              <FaArrowUpRightFromSquare className="w-3 h-3 text-text-tertiary" />
            </a>

            <a
              href="https://www.nuget.org/packages?q=Utilbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-bg-elevated hover:bg-bg-surface text-text-primary border border-subtle hover:border-focus transition-all shadow-sm"
            >
              <FaBoxOpen className="w-4 h-4 text-accent-primary" />
              <span>{t('view_nuget')}</span>
              <FaArrowUpRightFromSquare className="w-3 h-3 text-text-tertiary" />
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
};
