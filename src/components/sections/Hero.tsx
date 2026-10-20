'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="pt-24 pb-8 flex justify-center">
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="w-full max-w-xl bg-bg-surface/80 backdrop-blur-xl border border-border-subtle rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-border-medium transition-all duration-300 relative overflow-hidden group"
      >
        {/* Subtle holographic glare effect */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-highlight/10 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Profile Picture with animated border glow */}
          <div className="relative w-32 h-32 mb-5 rounded-full p-[3px] bg-gradient-to-br from-accent-primary via-accent-highlight to-accent-secondary shadow-lg shadow-accent-glow">
            <img
              src={getAssetPath('/img/photo.webp')}
              alt="Foto de perfil de Rafael Comunhão Ferreira"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Name & Title */}
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-3">
            Rafael Comunhão Ferreira
          </h1>

          {/* Roles */}
          <div className="flex flex-col items-center gap-1.5 mb-4">
            <span className="text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full bg-accent-subtle text-accent-primary border border-accent-secondary/20">
              {t('role_3')}
            </span>
            <span className="text-xs sm:text-sm font-medium text-text-secondary">
              {t('role_2')}
            </span>
            <span className="text-xs text-text-tertiary">
              {t('role_1')}
            </span>
          </div>

          {/* Location Meta */}
          <div className="flex items-center gap-1.5 text-xs text-text-tertiary mb-6">
            <FaLocationDot className="text-accent-primary" />
            <span>{t('location')}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/rafael-ferreira93"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-bg-elevated border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-secondary hover:bg-bg-surface transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/rafaelchampion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-bg-elevated border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-secondary hover:bg-bg-surface transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href="mailto:rafael_comunhao@hotmail.com"
              aria-label="Email"
              title="Email"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-bg-elevated border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-secondary hover:bg-bg-surface transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
