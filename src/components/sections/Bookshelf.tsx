'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { booksList } from '@/data/books';
import { getAssetPath } from '@/utils/assets';
import { FaBookBookmark } from 'react-icons/fa6';

export const Bookshelf: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="books" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-border-subtle">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
          <FaBookBookmark className="text-accent-primary" />
          <span>{t('books_title')}</span>
        </h2>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
          Literature
        </span>
      </div>

      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-8">
        {t('books_intro')}
      </p>

      {/* Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {booksList.map((book) => (
          <div
            key={book.id}
            title={`${t(book.titleKey as any)} - ${book.author}`}
            className="group flex flex-col items-center text-center p-3 rounded-2xl bg-bg-surface border border-border-subtle shadow-sm hover:border-border-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Book Cover Image with 3D shadow & rounding */}
            <div className="w-full aspect-[2/3] mb-3 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img
                src={getAssetPath(book.image)}
                alt={t(book.titleKey as any)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <span className="font-heading font-semibold text-xs text-text-primary line-clamp-1 group-hover:text-accent-primary transition-colors">
              {t(book.titleKey as any)}
            </span>
            <span className="text-[11px] text-text-tertiary line-clamp-1 mt-0.5">
              {book.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
