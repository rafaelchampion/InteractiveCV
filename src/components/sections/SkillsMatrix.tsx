'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skillCategoryGroups } from '@/data/skills';
import {
  FaLayerGroup,
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
  if (titleKey === 'skills_backend') return <FaServer className="text-accent-primary" />;
  if (titleKey === 'skills_architecture') return <FaSitemap className="text-accent-primary" />;
  if (titleKey === 'skills_databases') return <FaDatabase className="text-accent-primary" />;
  if (titleKey === 'skills_devops') return <FaCloud className="text-accent-primary" />;
  return <FaLaptopCode className="text-accent-primary" />;
};

const getSkillIcon = (iconName?: string) => {
  switch (iconName) {
    case 'csharp':
      return <TbBrandCSharp className="text-[#9B4993] w-4 h-4" />;
    case 'dotnet':
    case 'dotnetcore':
      return <SiDotnet className="text-[#512BD4]" />;
    case 'typescript':
      return <SiTypescript className="text-[#3178C6]" />;
    case 'javascript':
      return <SiJavascript className="text-[#F7DF1E]" />;
    case 'tailwind':
      return <SiTailwindcss className="text-[#06B6D4]" />;
    case 'bootstrap':
      return <SiBootstrap className="text-[#7952B3]" />;
    case 'angular':
      return <SiAngular className="text-[#DD0031]" />;
    case 'blazor':
      return <SiBlazor className="text-[#512BD4]" />;
    case 'docker':
      return <SiDocker className="text-[#2496ED]" />;
    case 'aws':
      return <FaAws className="text-[#FF9900]" />;
    case 'terraform':
      return <SiTerraform className="text-[#844FBA]" />;
    case 'git':
    case 'githubactions':
      return <SiGit className="text-[#F05032]" />;
    case 'postgres':
      return <SiPostgresql className="text-[#4169E1]" />;
    case 'mysql':
      return <SiMysql className="text-[#4479A1]" />;
    case 'html5':
      return <SiHtml5 className="text-[#E34F26]" />;
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
    <section id="skills" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaLayerGroup className="text-accent-primary" />
          <span>{t('skills_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          Stack Overview
        </span>
      </div>

      {/* Search and Tabs */}
      <div className="space-y-4 mb-8">
        {/* Search Input */}
        <div className="relative">
          <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('skills_search_placeholder')}
            aria-label="Filtrar habilidades técnicas"
            className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-tertiary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-subtle transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary"
              aria-label="Clear search"
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
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-accent-primary text-white shadow-sm shadow-accent-glow font-semibold'
                  : 'bg-bg-surface text-text-secondary hover:text-text-primary border border-border-subtle hover:border-border-medium'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Match Count Indicator */}
        {searchTerm && (
          <div className="text-xs font-medium text-accent-primary animate-fade-in">
            {totalVisibleSkills} {totalVisibleSkills === 1 ? t('search_skill_found') : t('search_skills_found')}
          </div>
        )}
      </div>

      {/* Categorized Skills Grid */}
      <div className="space-y-6">
        {filteredGroups.map((group, idx) => (
          <div
            key={`${group.titleKey}-${idx}`}
            className="p-5 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm hover:border-border-medium transition-all"
          >
            <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary flex items-center gap-2.5 mb-4">
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
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-elevated border border-border-subtle text-text-primary hover:border-accent-primary/40 hover:bg-accent-subtle/50 transition-all cursor-default"
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
