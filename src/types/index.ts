export type Language = 'pt' | 'en';
export type Theme = 'dark' | 'light';

export interface SkillItem {
  name: string;
  category: 'backend' | 'architecture' | 'frontend' | 'data_devops';
  icon?: string;
  translateKey?: string;
}

export interface JobExperience {
  id: string;
  titleKey: string;
  dateKey: string;
  companyKey: string;
  summaryKey: string;
  descriptionKeys: string[];
}

export interface EducationDegree {
  id: string;
  degreeKey: string;
  dateKey: string;
  institution: string;
  thesis1Key?: string;
  thesis2Key?: string;
}

export interface CourseItem {
  id: string;
  titleKey: string;
  platform: string;
  badges: string[];
  duration: string;
}

export interface BookItem {
  id: string;
  titleKey: string;
  author: string;
  image: string;
}

export interface PhilosophyItem {
  id: string;
  titleKey: string;
  contentKeys: string[];
  featured?: boolean;
}
