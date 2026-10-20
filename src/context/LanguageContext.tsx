'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { Language } from '@/types';
import { translations, TranslationKey } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  const [, startTransition] = useTransition();

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang === 'en' || savedLang === 'pt') {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language?.toLowerCase() || '';
        const detected = browserLang.startsWith('pt') ? 'pt' : 'en';
        setLanguageState(detected);
      }
    } catch {
      // fallback
    }
  }, []);

  const setLanguage = (lang: Language) => {
    startTransition(() => {
      setLanguageState(lang);
      try {
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang === 'en' ? 'en-US' : 'pt-BR');
      } catch {
        // ignore
      }
    });
  };

  const t = (key: TranslationKey): string => {
    const dict = translations[language] || translations.pt;
    return (dict as Record<string, string>)[key] ?? (translations.pt as Record<string, string>)[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
