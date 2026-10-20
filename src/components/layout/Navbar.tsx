'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FaFilePdf, FaBars, FaXmark } from 'react-icons/fa6';

const navItems = [
  { href: '#about-me', labelKey: 'nav_about' as const, id: 'about-me' },
  { href: '#skills', labelKey: 'nav_skills' as const, id: 'skills' },
  { href: '#career', labelKey: 'nav_career' as const, id: 'career' },
  { href: '#projects', labelKey: 'nav_projects' as const, id: 'projects' },
  { href: '#education', labelKey: 'nav_education' as const, id: 'education' },
  { href: '#courses', labelKey: 'nav_courses' as const, id: 'courses' },
  { href: '#books', labelKey: 'nav_books' as const, id: 'books' },
  { href: '#socials', labelKey: 'nav_socials' as const, id: 'socials' },
];

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('about-me');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl h-[60px] px-6 bg-bg-glass backdrop-blur-md border border-border-subtle rounded-full flex items-center justify-between z-50 transition-all duration-300 ${
        isScrolled
          ? 'top-2.5 shadow-lg border-border-medium shadow-accent-glow'
          : 'shadow-md'
      }`}
    >
      {/* Brand Logo */}
      <a
        href="#about-me"
        onClick={(e) => handleScrollTo(e, '#about-me')}
        className="font-heading font-bold text-base sm:text-lg tracking-tight gradient-text hover:opacity-90 transition-opacity"
      >
        Rafael Ferreira
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center">
        <ul className="flex items-center gap-1.5 list-none m-0 p-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-accent-primary bg-accent-subtle font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated/70'
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Action / PDF Resume */}
      <div className="flex items-center gap-2">
        <Link
          href="/cv"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver Currículo Imprimível / PDF"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full bg-accent-primary text-white hover:bg-accent-secondary transition-all shadow-sm shadow-accent-glow hover:-translate-y-0.5 active:translate-y-0"
        >
          <FaFilePdf className="w-3.5 h-3.5" />
          <span>{t('nav_cv')}</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu de navegação"
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-bg-elevated text-text-primary border border-border-subtle"
        >
          {mobileMenuOpen ? <FaXmark className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-bg-surface/95 backdrop-blur-xl border border-border-subtle rounded-2xl shadow-xl p-4 flex flex-col gap-2 z-50">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'text-accent-primary bg-accent-subtle font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                }`}
              >
                {t(item.labelKey)}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
