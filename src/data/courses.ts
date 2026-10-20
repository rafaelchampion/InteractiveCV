import { CourseItem } from '@/types';

export const coursesList: CourseItem[] = [
  {
    id: 'ddd',
    titleKey: 'course_ddd',
    platform: 'Balta.io',
    badges: ['DDD', 'Bounded Contexts', 'Contracts'],
    duration: '4.5',
  },
  {
    id: 'architecture',
    titleKey: 'course_architecture',
    platform: 'Udemy',
    badges: ['System Design', 'Scalability'],
    duration: '4.0',
  },
  {
    id: 'csharp',
    titleKey: 'course_csharp',
    platform: 'Balta.io',
    badges: ['.NET Core', 'Memory & Records'],
    duration: '12.2',
  },
  {
    id: 'ef',
    titleKey: 'course_ef',
    platform: 'Balta.io',
    badges: ['Code First', 'Performance Tracking'],
    duration: '4.5',
  },
  {
    id: 'microservices',
    titleKey: 'course_microservices',
    platform: 'Balta.io',
    badges: ['Circuit Breaker', 'API Gateways'],
    duration: '2.0',
  },
  {
    id: 'multitenant',
    titleKey: 'course_multitenant',
    platform: 'Balta.io',
    badges: ['Multi-Database', 'Tenant Isolation'],
    duration: '1.2',
  },
];
