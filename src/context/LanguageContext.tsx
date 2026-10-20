'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/types';
import { translations, TranslationKey } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
    const detected: Language = browserLang.startsWith('pt') ? 'pt' : 'en';
    setLanguage(detected);
    document.documentElement.setAttribute('lang', detected === 'en' ? 'en-US' : 'pt-BR');
  }, []);

  const t = (key: TranslationKey): string => {
    const dict = translations[language] || translations.pt;
    return (dict as Record<string, string>)[key] ?? (translations.pt as Record<string, string>)[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
