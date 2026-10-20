'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-10 border-t border-border-subtle/40 text-center text-xs text-text-tertiary">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-center">
        <p>© {new Date().getFullYear()} Rafael Comunhão Ferreira. All rights reserved.</p>
      </div>
    </footer>
  );
};
