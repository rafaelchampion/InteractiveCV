'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/assets';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setLanguage('pt')}
        aria-label="Alterar para Português"
        title="Português do Brasil"
        className={`flex items-center justify-center w-9 h-9 rounded-full bg-bg-elevated border transition-all hover:scale-105 active:scale-95 ${
          language === 'pt'
            ? 'border-accent-primary ring-2 ring-accent-subtle shadow-sm'
            : 'border-border-subtle hover:border-border-focus opacity-75 hover:opacity-100'
        }`}
      >
        <img
          src={getAssetPath('/img/flags/bra.webp')}
          alt="Português do Brasil"
          className="w-4 h-4 rounded-full object-cover"
        />
      </button>

      <button
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        title="English language"
        className={`flex items-center justify-center w-9 h-9 rounded-full bg-bg-elevated border transition-all hover:scale-105 active:scale-95 ${
          language === 'en'
            ? 'border-accent-primary ring-2 ring-accent-subtle shadow-sm'
            : 'border-border-subtle hover:border-border-focus opacity-75 hover:opacity-100'
        }`}
      >
        <img
          src={getAssetPath('/img/flags/usa.webp')}
          alt="English language"
          className="w-4 h-4 rounded-full object-cover"
        />
      </button>
    </div>
  );
};
