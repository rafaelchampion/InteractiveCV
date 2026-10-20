'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { booksList } from '@/data/books';
import { getAssetPath } from '@/utils/assets';
import { Badge } from '@/components/ui/Badge';

export const Bookshelf: React.FC = () => {
  const { t } = useLanguage();
  const [activeBookId, setActiveBookId] = useState<string>(booksList[0]?.id || '');

  return (
    <section id="books" className="py-16 scroll-mt-24">
      {/* Section Header without icon and without dividing line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {t('books_title')}
        </h2>
        <Badge variant="accent">
          {t('literature_badge')}
        </Badge>
      </div>

      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-10 max-w-2xl">
        {t('books_intro')}
      </p>

      {/* Interactive Horizontal Shelf Container */}
      <div className="relative py-8 px-4 sm:px-6 rounded-3xl bg-bg-surface/40 backdrop-blur-sm overflow-hidden">
        {/* Subtle Ambient Wood/Glass Shelf Base Line */}
        <div className="absolute bottom-6 left-6 right-6 h-1.5 rounded-full bg-gradient-to-r from-transparent via-border-focus/40 to-transparent pointer-events-none" />

        {/* Books Scroll/Perspective Row */}
        <div className="flex items-end justify-start md:justify-center gap-6 sm:gap-8 overflow-x-auto pb-8 pt-4 px-4 scrollbar-none perspective-[1200px]">
          {booksList.map((book) => {
            const isActive = activeBookId === book.id;

            return (
              <div
                key={book.id}
                onClick={() => setActiveBookId(book.id)}
                onMouseEnter={() => setActiveBookId(book.id)}
                className={`flex-shrink-0 cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center text-center ${
                  isActive
                    ? 'scale-110 -translate-y-4 z-20'
                    : 'scale-95 opacity-80 hover:opacity-100 hover:-translate-y-2 z-10'
                }`}
              >
                {/* 3D Book Cover with Spine Pivot */}
                <div
                  className={`w-28 sm:w-36 aspect-[2/3] rounded-r-md rounded-l-xs overflow-hidden transition-all duration-400 transform-gpu ${
                    isActive
                      ? 'shadow-2xl shadow-accent-glow -rotate-y-[18deg] ring-1 ring-accent-secondary/50'
                      : 'shadow-md -rotate-y-[8deg]'
                  }`}
                  style={{
                    transformOrigin: 'left center',
                    boxShadow: isActive
                      ? '-6px 12px 28px rgba(0,0,0,0.45), 0 0 20px var(--accent-glow)'
                      : '-4px 8px 16px rgba(0,0,0,0.3)',
                  }}
                >
                  <img
                    src={getAssetPath(book.image)}
                    alt={t(book.titleKey as any)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Book Details below each */}
                <div className={`mt-4 transition-all duration-300 w-28 sm:w-36 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                  <h4 className="font-heading font-semibold text-xs text-text-primary line-clamp-1">
                    {t(book.titleKey as any)}
                  </h4>
                  <p className="text-[11px] text-text-tertiary line-clamp-1 mt-0.5">
                    {book.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
