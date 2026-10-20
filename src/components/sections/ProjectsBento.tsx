'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import {
  FaFolderOpen,
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
    <section id="projects" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaFolderOpen className="text-accent-primary" />
          <span>{t('projects_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          Open Source
        </span>
      </div>

      {/* Utilbox Bento Card */}
      <div className="rounded-3xl bg-bg-surface border border-border-subtle overflow-hidden shadow-sm hover:border-border-medium hover:shadow-xl transition-all">
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
              className="w-14 h-14 rounded-2xl p-1 bg-bg-elevated border border-border-subtle object-contain shadow-sm"
            />
            <div>
              <h3 className="font-heading font-bold text-xl text-text-primary">
                Utilbox
              </h3>
              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
                  {t('project_opensource')}
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-bg-elevated text-text-secondary border border-border-subtle">
                  {t('project_mit_license')}
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-bg-elevated text-text-secondary border border-border-subtle">
                  C# / .NET Standard
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
            {t('project_utilbox_description')}
          </p>

          {/* CLI Install Box */}
          <div className="flex items-center justify-between p-3.5 mb-6 rounded-xl bg-bg-elevated border border-border-subtle font-mono text-xs text-text-primary">
            <code>dotnet add package Utilbox</code>
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all ${
                copied
                  ? 'bg-status-success text-white'
                  : 'bg-bg-surface hover:bg-bg-surface/80 border border-border-subtle text-text-secondary hover:text-text-primary'
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
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-bg-elevated hover:bg-bg-surface border border-border-subtle hover:border-accent-primary text-text-primary transition-all shadow-sm"
            >
              <FaGithub className="w-4 h-4" />
              <span>{t('view_github')}</span>
              <FaArrowUpRightFromSquare className="w-3 h-3 text-text-tertiary" />
            </a>

            <a
              href="https://www.nuget.org/packages?q=Utilbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-bg-elevated hover:bg-bg-surface border border-border-subtle hover:border-accent-primary text-text-primary transition-all shadow-sm"
            >
              <FaBoxOpen className="w-4 h-4" />
              <span>{t('view_nuget')}</span>
              <FaArrowUpRightFromSquare className="w-3 h-3 text-text-tertiary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
