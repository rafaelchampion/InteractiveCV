'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from '@/context/LanguageContext';
import { booksList } from '@/data/books';
import { getAssetPath } from '@/utils/assets';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Text } from '@/components/ui/Typography';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export const Bookshelf: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <Section id="books">
      <SectionHeader
        title={t('books_title')}
        badgeText={t('literature_badge')}
        action={
          <div className="flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              aria-label="Livro anterior"
              className="w-8 h-8 rounded-full bg-bg-surface border border-subtle text-text-secondary hover:text-accent-primary hover:border-focus flex items-center justify-center transition-all shadow-sm"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo livro"
              className="w-8 h-8 rounded-full bg-bg-surface border border-subtle text-text-secondary hover:text-accent-primary hover:border-focus flex items-center justify-center transition-all shadow-sm"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        }
      />

      <Text variant="body" className="mb-8 max-w-2xl">
        {t('books_intro')}
      </Text>

      {/* Embla Carousel Viewport */}
      <div className="relative py-6 px-4 rounded-3xl bg-bg-surface/40 backdrop-blur-sm overflow-hidden">
        {/* Subtle Ambient Shelf Line */}
        <div className="absolute bottom-6 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-transparent via-border-focus/30 to-transparent pointer-events-none" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-end gap-6 sm:gap-8 pb-6 pt-2">
            {booksList.map((book, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={book.id}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className="flex-[0_0_140px] sm:flex-[0_0_170px] min-w-0 cursor-pointer flex flex-col items-center text-center group transition-transform duration-300"
                >
                  {/* 3D Book Cover with Subtle Perspective Spine */}
                  <div
                    className={`w-28 sm:w-36 aspect-[2/3] rounded-r-md rounded-l-xs overflow-hidden transition-all duration-300 transform-gpu group-hover:-translate-y-2 ${
                      isSelected
                        ? 'shadow-2xl shadow-accent-glow -rotate-y-[14deg] ring-1 ring-focus'
                        : 'shadow-md -rotate-y-[6deg] opacity-90 group-hover:opacity-100'
                    }`}
                    style={{
                      transformOrigin: 'left center',
                      boxShadow: isSelected
                        ? '-6px 12px 28px rgba(0,0,0,0.45), 0 0 18px var(--accent-glow)'
                        : '-4px 8px 16px rgba(0,0,0,0.3)',
                    }}
                  >
                    <img
                      src={getAssetPath(book.image)}
                      alt={t(book.titleKey as any)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Book Metadata */}
                  <div className="mt-4 w-28 sm:w-36">
                    <h4 className="font-heading font-semibold text-xs text-text-primary line-clamp-1 group-hover:text-accent-primary transition-colors">
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
      </div>
    </Section>
  );
};
