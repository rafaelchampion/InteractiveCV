'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skillCategoryGroups } from '@/data/skills';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Text } from '@/components/ui/Typography';
import {
  FaMagnifyingGlass,
  FaCircleXmark,
  FaServer,
  FaSitemap,
  FaDatabase,
  FaCloud,
  FaLaptopCode,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaBootstrap,
  FaAngular,
  FaBolt,
  FaCube,
  FaGears,
  FaShapes,
  FaDiagramProject,
  FaNetworkWired,
  FaShuffle,
  FaShieldHalved,
  FaVialCircleCheck,
  FaBuildingUser,
  FaChartLine,
  FaCode,
  FaCodeFork,
  FaFileCode,
  FaCloudArrowUp,
} from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import {
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiBlazor,
  SiTailwindcss,
  SiTypescript,
  SiTerraform,
} from 'react-icons/si';

const getCategoryIcon = (id: string, titleKey: string) => {
  if (titleKey === 'skills_backend') return <FaServer className="text-accent-primary w-4 h-4 shrink-0" />;
  if (titleKey === 'skills_architecture') return <FaSitemap className="text-accent-primary w-4 h-4 shrink-0" />;
  if (titleKey === 'skills_databases') return <FaDatabase className="text-accent-primary w-4 h-4 shrink-0" />;
  if (titleKey === 'skills_devops') return <FaCloud className="text-accent-primary w-4 h-4 shrink-0" />;
  return <FaLaptopCode className="text-accent-primary w-4 h-4 shrink-0" />;
};

const getSkillIcon = (iconName?: string) => {
  const iconClass = "text-accent-primary w-3.5 h-3.5 shrink-0";

  switch (iconName) {
    case 'csharp':
      return <TbBrandCSharp className={iconClass} />;
    case 'dotnet':
    case 'dotnetcore':
      return <SiDotnet className={iconClass} />;
    case 'database':
    case 'sqlserver':
      return <FaDatabase className={iconClass} />;
    case 'bolt':
      return <FaBolt className={iconClass} />;
    case 'api':
      return <FaCloudArrowUp className={iconClass} />;
    case 'gears':
      return <FaGears className={iconClass} />;
    case 'cube':
      return <FaCube className={iconClass} />;
    case 'shapes':
      return <FaShapes className={iconClass} />;
    case 'diagram':
      return <FaDiagramProject className={iconClass} />;
    case 'network':
      return <FaNetworkWired className={iconClass} />;
    case 'shuffle':
      return <FaShuffle className={iconClass} />;
    case 'shield':
      return <FaShieldHalved className={iconClass} />;
    case 'vial':
      return <FaVialCircleCheck className={iconClass} />;
    case 'building':
      return <FaBuildingUser className={iconClass} />;
    case 'postgres':
      return <SiPostgresql className={iconClass} />;
    case 'mysql':
      return <SiMysql className={iconClass} />;
    case 'oracle':
      return <FaDatabase className={iconClass} />;
    case 'chart':
      return <FaChartLine className={iconClass} />;
    case 'code':
      return <FaCodeFork className={iconClass} />;
    case 'docker':
      return <FaDocker className={iconClass} />;
    case 'aws':
      return <FaAws className={iconClass} />;
    case 'terraform':
      return <SiTerraform className={iconClass} />;
    case 'azure':
    case 'githubactions':
    case 'git':
      return <FaGitAlt className={iconClass} />;
    case 'typescript':
      return <SiTypescript className={iconClass} />;
    case 'javascript':
      return <FaJs className={iconClass} />;
    case 'blazor':
      return <SiBlazor className={iconClass} />;
    case 'tailwind':
      return <SiTailwindcss className={iconClass} />;
    case 'bootstrap':
      return <FaBootstrap className={iconClass} />;
    case 'html5':
      return <FaHtml5 className={iconClass} />;
    case 'angular':
      return <FaAngular className={iconClass} />;
    case 'filecode':
      return <FaFileCode className={iconClass} />;
    default:
      return <FaCode className={iconClass} />;
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
    <Section id="skills">
      <SectionHeader
        title={t('skills_title')}
        badgeText={t('stack_overview')}
      />

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
            className="w-full pl-11 pr-10 py-3 text-sm rounded-full bg-bg-surface/70 border border-subtle text-text-primary placeholder:text-text-tertiary focus:border-focus focus:outline-none focus:ring-2 focus:ring-accent-subtle transition-all"
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
                  : 'bg-bg-surface/60 text-text-secondary hover:text-text-primary hover:bg-bg-surface border border-subtle'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Match Count Indicator */}
        {searchTerm && (
          <Text variant="muted" className="text-accent-primary font-medium pl-2">
            {totalVisibleSkills} {totalVisibleSkills === 1 ? t('search_skill_found') : t('search_skills_found')}
          </Text>
        )}
      </div>

      {/* Categorized Skills Grid using unified Card component */}
      <div className="space-y-6">
        {filteredGroups.map((group, idx) => (
          <Card
            key={`${group.titleKey}-${idx}`}
            variant="default"
            className="p-5 sm:p-6"
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
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-bg-surface border border-subtle text-text-primary hover:border-focus hover:text-accent-primary hover:shadow-sm transition-all cursor-default"
                  >
                    {icon}
                    <span>{displayName}</span>
                  </span>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
