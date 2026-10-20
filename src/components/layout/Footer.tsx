'use client';

import React from 'react';
import { Text } from '@/components/ui/Typography';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-10 border-t border-subtle text-center">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-center">
        <Text variant="muted">
          © {new Date().getFullYear()} Rafael Comunhão Ferreira. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};
