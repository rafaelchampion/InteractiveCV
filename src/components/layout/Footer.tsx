'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-border-subtle text-center text-xs text-text-tertiary">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Rafael Comunhão Ferreira. All rights reserved.</p>
        <p className="gradient-text font-medium">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};
