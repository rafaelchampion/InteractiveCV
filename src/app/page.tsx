'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { SkillsMatrix } from '@/components/sections/SkillsMatrix';
import { CareerTimeline } from '@/components/sections/CareerTimeline';
import { ProjectsBento } from '@/components/sections/ProjectsBento';
import { Education } from '@/components/sections/Education';
import { Courses } from '@/components/sections/Courses';
import { Languages } from '@/components/sections/Languages';
import { Bookshelf } from '@/components/sections/Bookshelf';
import { Philosophy } from '@/components/sections/Philosophy';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <Hero />
        <About />
        <SkillsMatrix />
        <CareerTimeline />
        <ProjectsBento />
        <Education />
        <Courses />
        <Languages />
        <Bookshelf />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
