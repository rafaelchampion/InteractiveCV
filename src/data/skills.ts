import { SkillItem } from '@/types';

export interface SkillCategoryGroup {
  id: 'backend' | 'architecture' | 'data_devops' | 'frontend';
  titleKey: 'skills_backend' | 'skills_architecture' | 'skills_databases' | 'skills_devops' | 'skills_frontend';
  icon: string;
  skills: SkillItem[];
}

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: 'backend',
    titleKey: 'skills_backend',
    icon: 'server',
    skills: [
      { name: 'C#', category: 'backend', icon: 'csharp' },
      { name: '.NET Core / .NET 8+', category: 'backend', icon: 'dotnet' },
      { name: 'ASP.NET Core', category: 'backend', icon: 'dotnetcore' },
      { name: 'Entity Framework Core', category: 'backend', icon: 'database' },
      { name: 'SignalR', category: 'backend', icon: 'bolt' },
      { name: 'REST APIs', category: 'backend', icon: 'api' },
      { name: 'xHarbour / Clipper', category: 'backend', icon: 'gears' },
      { name: 'DevExpress', category: 'backend', icon: 'cube' },
    ],
  },
  {
    id: 'architecture',
    titleKey: 'skills_architecture',
    icon: 'sitemap',
    skills: [
      { name: 'Clean Architecture', category: 'architecture', icon: 'shapes' },
      { name: 'Domain-Driven Design (DDD)', category: 'architecture', icon: 'diagram' },
      { name: 'Microservices', category: 'architecture', icon: 'network' },
      { name: 'CQRS & Event-Driven', category: 'architecture', icon: 'shuffle' },
      { name: 'SOLID & Clean Code', category: 'architecture', icon: 'shield' },
      { name: 'TDD / Unit Testing (xUnit, NUnit)', category: 'architecture', icon: 'vial' },
      { name: 'Multi-Tenant Systems', category: 'architecture', icon: 'building' },
    ],
  },
  {
    id: 'data_devops',
    titleKey: 'skills_databases',
    icon: 'database',
    skills: [
      { name: 'SQL Server', category: 'data_devops', icon: 'sqlserver' },
      { name: 'PostgreSQL', category: 'data_devops', icon: 'postgres' },
      { name: 'MySQL', category: 'data_devops', icon: 'mysql' },
      { name: 'PL/SQL', category: 'data_devops', icon: 'oracle' },
      { name: 'Otimização de Consultas SQL', category: 'data_devops', icon: 'chart', translateKey: 'query_performance' },
      { name: 'Stored Procedures, Triggers & Views', category: 'data_devops', icon: 'code' },
    ],
  },
  {
    id: 'data_devops',
    titleKey: 'skills_devops',
    icon: 'cloud',
    skills: [
      { name: 'Docker & Compose', category: 'data_devops', icon: 'docker' },
      { name: 'AWS Lambda & Serverless', category: 'data_devops', icon: 'aws' },
      { name: 'Terraform (IaC)', category: 'data_devops', icon: 'terraform' },
      { name: 'Azure DevOps', category: 'data_devops', icon: 'azure' },
      { name: 'GitHub Actions & CI/CD', category: 'data_devops', icon: 'githubactions' },
      { name: 'Git', category: 'data_devops', icon: 'git' },
    ],
  },
  {
    id: 'frontend',
    titleKey: 'skills_frontend',
    icon: 'laptop',
    skills: [
      { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
      { name: 'JavaScript (ES6+)', category: 'frontend', icon: 'javascript' },
      { name: 'Blazor', category: 'frontend', icon: 'blazor' },
      { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind' },
      { name: 'Bootstrap', category: 'frontend', icon: 'bootstrap' },
      { name: 'HTML5 / CSS3', category: 'frontend', icon: 'html5' },
      { name: 'Angular', category: 'frontend', icon: 'angular' },
      { name: 'Razor Pages & ASP.NET MVC', category: 'frontend', icon: 'filecode' },
    ],
  },
];
