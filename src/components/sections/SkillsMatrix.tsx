'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skillCategoryGroups } from '@/data/skills';
import { Badge } from '@/components/ui/Badge';
import {
  FaMagnifyingGlass,
  FaCircleXmark,
  FaServer,
  FaSitemap,
  FaDatabase,
  FaCloud,
  FaLaptopCode,
  FaAws,
} from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import {
  SiDotnet,
  SiDocker,
  SiTerraform,
  SiGit,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiAngular,
  SiPostgresql,
  SiMysql,
  SiBlazor,
  SiHtml5,
} from 'react-icons/si';

const getCategoryIcon = (id: string, titleKey: string) => {
  if (titleKey === 'skills_backend') return <FaServer className="text-accent-primary w-4 h-4" />;
  if (titleKey === 'skills_architecture') return <FaSitemap className="text-accent-primary w-4 h-4" />;
  if (titleKey === 'skills_databases') return <FaDatabase className="text-accent-primary w-4 h-4" />;
  if (titleKey === 'skills_devops') return <FaCloud className="text-accent-primary w-4 h-4" />;
  return <FaLaptopCode className="text-accent-primary w-4 h-4" />;
};

const getSkillIcon = (iconName?: string) => {
  switch (iconName) {
    case 'csharp':
      return <TbBrandCSharp className="text-[#9B4993] w-3.5 h-3.5" />;
    case 'dotnet':
    case 'dotnetcore':
      return <SiDotnet className="text-[#512BD4] w-3.5 h-3.5" />;
    case 'typescript':
      return <SiTypescript className="text-[#3178C6] w-3.5 h-3.5" />;
    case 'javascript':
      return <SiJavascript className="text-[#F7DF1E] w-3.5 h-3.5" />;
    case 'tailwind':
      return <SiTailwindcss className="text-[#06B6D4] w-3.5 h-3.5" />;
    case 'bootstrap':
      return <SiBootstrap className="text-[#7952B3] w-3.5 h-3.5" />;
    case 'angular':
      return <SiAngular className="text-[#DD0031] w-3.5 h-3.5" />;
    case 'blazor':
      return <SiBlazor className="text-[#512BD4] w-3.5 h-3.5" />;
    case 'docker':
      return <SiDocker className="text-[#2496ED] w-3.5 h-3.5" />;
    case 'aws':
      return <FaAws className="text-[#FF9900] w-3.5 h-3.5" />;
    case 'terraform':
      return <SiTerraform className="text-[#844FBA] w-3.5 h-3.5" />;
    case 'git':
    case 'githubactions':
      return <SiGit className="text-[#F05032] w-3.5 h-3.5" />;
    case 'postgres':
      return <SiPostgresql className="text-[#4169E1] w-3.5 h-3.5" />;
    case 'mysql':
      return <SiMysql className="text-[#4479A1] w-3.5 h-3.5" />;
    case 'html5':
      return <SiHtml5 className="text-[#E34F26] w-3.5 h-3.5" />;
    default:
      return null;
  }
};

export const SkillsMatrix: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'all' | 'backend' | 'architecture' | 'frontend' | 'data_devops'>('all');

  const tabs: Array<{ id: typeof activeTab; labelKey: 'skills_tab_all' | 'skills_tab_backend' | 'skills_tab_architecture' | 'skills_tab_frontend' | 'skills_tab_data_devops' }> = [
    { id: 'all', labelKey: 'skills_tab_all' },
    { id: 'backend', labelKey: 'skills_tab_backend' },
    { id: 'architecture', labelKey: 'skills_tab_architecture' },
    { id: 'frontend', labelKey: 'skills_tab_frontend' },
    { id: 'data_devops', labelKey: 'skills_tab_data_devops' },
  ];

  const filteredGroups = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return skillCategoryGroups
      .map((group) => {
        const matchesCategory = activeTab === 'all' || group.id === activeTab;
        if (!matchesCategory) return null;

        const filteredSkills = group.skills.filter((skill) => {
          const displayName = skill.translateKey ? t(skill.translateKey as any) : skill.name;
          const matchesSearch = !term || displayName.toLowerCase().includes(term) || skill.name.toLowerCase().includes(term);
          return matchesSearch;
        });

        if (term && filteredSkills.length === 0) return null;

        return {
          ...group,
          skills: filteredSkills,
        };
      })
      .filter(Boolean) as typeof skillCategoryGroups;
  }, [searchTerm, activeTab, t]);

  const totalVisibleSkills = useMemo(() => {
    return filteredGroups.reduce((acc, curr) => acc + curr.skills.length, 0);
  }, [filteredGroups]);

  return (
    <section id="skills" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('skills_title')}
        </h2>
        <Badge variant="accent">
          {t('stack_overview')}
        </Badge>
      </div>

      {/* Search and Tabs */}
      <div className="space-y-4 mb-8">
        {/* Search Input */}
        <div className="relative">
          <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('skills_search_placeholder')}
            aria-label={t('skills_instructions')}
            className="w-full pl-11 pr-10 py-3 text-sm rounded-full bg-bg-surface/70 border border-border-subtle/80 text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-subtle transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary"
              aria-label={t('clear_search')}
            >
              <FaCircleXmark className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-accent-primary text-white shadow-sm shadow-accent-glow font-semibold'
                  : 'bg-bg-surface/60 text-text-secondary hover:text-text-primary hover:bg-bg-surface'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Match Count Indicator */}
        {searchTerm && (
          <div className="text-xs font-medium text-accent-primary animate-fade-in pl-2">
            {totalVisibleSkills} {totalVisibleSkills === 1 ? t('search_skill_found') : t('search_skills_found')}
          </div>
        )}
      </div>

      {/* Categorized Skills Grid - Minimalist without boxed borders */}
      <div className="space-y-6">
        {filteredGroups.map((group, idx) => (
          <div
            key={`${group.titleKey}-${idx}`}
            className="p-5 sm:p-6 rounded-2xl bg-bg-surface/50 hover:bg-bg-surface/80 transition-all"
          >
            <h3 className="font-heading font-semibold text-xs sm:text-sm text-text-secondary uppercase tracking-wider flex items-center gap-2 mb-3.5">
              {getCategoryIcon(group.id, group.titleKey)}
              <span>{t(group.titleKey)}</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const displayName = skill.translateKey ? t(skill.translateKey as any) : skill.name;
                const icon = getSkillIcon(skill.icon);
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-bg-elevated/70 text-text-primary hover:bg-accent-subtle hover:text-accent-primary transition-all cursor-default"
                  >
                    {icon}
                    <span>{displayName}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
