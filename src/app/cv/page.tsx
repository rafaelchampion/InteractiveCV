'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  FaPrint,
  FaArrowLeft,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';

export default function CVPage() {
  const { t } = useLanguage();

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="bg-[#f3f4f6] text-[#374151] min-h-screen font-sans py-8 print:py-0 print:bg-white">
      {/* Top action bar (hidden when printing) */}
      <div className="max-w-[8.5in] mx-auto px-4 mb-4 flex items-center justify-between no-print print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm transition-all"
        >
          <FaArrowLeft className="w-3.5 h-3.5" />
          <span>{t('back_to_portfolio')}</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-sm transition-all"
        >
          <FaPrint className="w-3.5 h-3.5" />
          <span>{t('print_cv')}</span>
        </button>
      </div>

      {/* Main 2-column CV container (Approx 8.5 x 11 in) */}
      <div className="max-w-[8.5in] min-h-[11in] mx-auto bg-white shadow-lg rounded-md overflow-hidden flex flex-col md:flex-row print:shadow-none print:rounded-none print:m-0 print:max-w-full">
        {/* Left Sidebar */}
        <aside className="w-full md:w-[35%] bg-[#f8fafc] p-8 border-r border-[#e5e7eb] text-[#4b5563] print:bg-white print:border-none print:p-4">
          {/* Contact Section */}
          <section className="mb-6">
            <h4 className="text-sm font-bold text-[#0f766e] uppercase tracking-wider mb-3">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-[#4b5563]">
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-[#0d9488] w-3.5 h-3.5 flex-shrink-0" />
                <span>SP, Brazil</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#0d9488] w-3.5 h-3.5 flex-shrink-0" />
                <a
                  href="mailto:rafaelcferreira93@gmail.com"
                  className="hover:underline hover:text-[#0f766e] break-all"
                >
                  rafaelcferreira93@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#0d9488] w-3.5 h-3.5 flex-shrink-0" />
                <span>+55 17 991302865</span>
              </p>
              <p className="flex items-center gap-2">
                <FaLinkedinIn className="text-[#0d9488] w-3.5 h-3.5 flex-shrink-0" />
                <a
                  href="https://linkedin.com/in/rafael-ferreira93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#0f766e] break-all"
                >
                  linkedin.com/in/rafael-ferreira93
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaGithub className="text-[#0d9488] w-3.5 h-3.5 flex-shrink-0" />
                <a
                  href="https://github.com/rafaelchampion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#0f766e] break-all"
                >
                  github.com/rafaelchampion
                </a>
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h4 className="text-sm font-bold text-[#0f766e] uppercase tracking-wider mb-3">
              Technical Skills
            </h4>

            <div className="space-y-3 text-xs">
              <div>
                <strong className="block font-semibold text-[#374151] mb-1.5">Backend:</strong>
                <div className="flex flex-wrap gap-1">
                  {[
                    'C#',
                    '.NET Framework',
                    '.NET Core',
                    '.NET 8+',
                    'Entity Framework Core',
                    'SignalR',
                    'REST APIs',
                    'xHarbour / Clipper',
                    'DevExpress',
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-[#ccfbf1] text-[#0f766e] px-2 py-0.5 rounded text-[11px] font-medium border border-[#5eead4] print:border-gray-300 print:bg-gray-100 print:text-black"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong className="block font-semibold text-[#374151] mb-1.5">Frontend:</strong>
                <div className="flex flex-wrap gap-1">
                  {[
                    'HTML5 / CSS3',
                    'Tailwind CSS',
                    'Bootstrap',
                    'JavaScript (ES6+)',
                    'TypeScript',
                    'ASP.NET MVC',
                    'Razor Pages',
                    'Blazor',
                    'Angular',
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-[#ccfbf1] text-[#0f766e] px-2 py-0.5 rounded text-[11px] font-medium border border-[#5eead4] print:border-gray-300 print:bg-gray-100 print:text-black"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong className="block font-semibold text-[#374151] mb-1.5">Databases:</strong>
                <div className="flex flex-wrap gap-1">
                  {[
                    'SQL Server',
                    'PostgreSQL',
                    'MySQL',
                    'PL/SQL',
                    'Stored Procedures',
                    'Triggers',
                    'Query Optimization',
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-[#ccfbf1] text-[#0f766e] px-2 py-0.5 rounded text-[11px] font-medium border border-[#5eead4] print:border-gray-300 print:bg-gray-100 print:text-black"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong className="block font-semibold text-[#374151] mb-1.5">DevOps & Cloud:</strong>
                <div className="flex flex-wrap gap-1">
                  {[
                    'Docker & Compose',
                    'AWS Lambda & Serverless',
                    'Terraform (IaC)',
                    'Azure DevOps',
                    'GitHub Actions & CI/CD',
                    'Git',
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-[#ccfbf1] text-[#0f766e] px-2 py-0.5 rounded text-[11px] font-medium border border-[#5eead4] print:border-gray-300 print:bg-gray-100 print:text-black"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong className="block font-semibold text-[#374151] mb-1.5">Architecture & Principles:</strong>
                <div className="flex flex-wrap gap-1">
                  {[
                    'Clean Architecture',
                    'Domain-Driven Design (DDD)',
                    'Microservices',
                    'CQRS & Event-Driven',
                    'SOLID & Clean Code',
                    'TDD / Unit Testing',
                    'Multi-Tenant Systems',
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-[#ccfbf1] text-[#0f766e] px-2 py-0.5 rounded text-[11px] font-medium border border-[#5eead4] print:border-gray-300 print:bg-gray-100 print:text-black"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h4 className="text-sm font-bold text-[#0f766e] uppercase tracking-wider mb-2">
              Languages
            </h4>
            <ul className="text-xs space-y-1">
              <li>
                <strong>Portuguese:</strong> Native
              </li>
              <li>
                <strong>English:</strong> Full Professional Fluency
              </li>
            </ul>
          </section>
        </aside>

        {/* Right Main Content */}
        <main className="w-full md:w-[65%] p-8 print:p-4">
          <header className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f766e] leading-tight">
              Rafael Comunhão Ferreira
            </h1>
            <p className="text-base sm:text-lg font-medium text-[#4b5563] mt-1">
              Senior Software Engineer | .NET & Full Stack Specialist
            </p>
          </header>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0f766e] border-b-2 border-[#0d9488] pb-1 mb-3">
              Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#374151]">
              Results-driven Senior Software Engineer with over 8 years of experience in designing,
              developing, and optimizing scalable, high-performance applications. Adept at
              implementing modern software architectures using .NET technologies while championing
              clean code, SOLID principles, and agile methodologies. Proven track record of delivering
              impactful enterprise solutions that enhance efficiency, operational resilience, and business growth.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0f766e] border-b-2 border-[#0d9488] pb-1 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-5">
              {/* OMIE */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#374151]">
                    Senior Software Engineer
                  </h3>
                  <span className="text-xs italic text-gray-500">Aug 2025 – Present</span>
                </div>
                <span className="text-xs font-semibold text-[#0d9488] block mb-2">OMIE</span>
                <ul className="list-disc pl-4 text-xs text-[#374151] space-y-1">
                  <li>Maintenance and modernization of core fiscal modules for a nationwide ERP platform.</li>
                  <li>Migrated legacy visual components to modern web architectures with high stability.</li>
                  <li>Query optimization and execution plan analysis for high-throughput production databases.</li>
                </ul>
              </div>

              {/* Bankly / CWI */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#374151]">
                    Senior .NET Developer
                  </h3>
                  <span className="text-xs italic text-gray-500">Jun 2025 – Aug 2025</span>
                </div>
                <span className="text-xs font-semibold text-[#0d9488] block mb-2">CWI • Bankly</span>
                <ul className="list-disc pl-4 text-xs text-[#374151] space-y-1">
                  <li>Evolved banking monolithic architecture towards resilient microservices patterns.</li>
                  <li>Deployed AWS Lambda serverless functions and defined IaC using Terraform.</li>
                  <li>Integrated real-time message queuing and financial anti-fraud security mechanisms.</li>
                </ul>
              </div>

              {/* Laser Fast */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#374151]">
                    Senior Software Engineer
                  </h3>
                  <span className="text-xs italic text-gray-500">Apr 2021 – Apr 2025</span>
                </div>
                <span className="text-xs font-semibold text-[#0d9488] block mb-2">Grupo Fast • Laser Fast</span>
                <ul className="list-disc pl-4 text-xs text-[#374151] space-y-1">
                  <li>Spearheaded clinic management ecosystem architecture across nationwide franchise network.</li>
                  <li>Integrated multiple third-party services and optimized database interactions.</li>
                  <li>Engineered custom scheduling gap algorithms, reducing operation time and customer complaints.</li>
                </ul>
              </div>

              {/* Fast Escova */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#374151]">
                    Mid-Level .NET Developer
                  </h3>
                  <span className="text-xs italic text-gray-500">Feb 2020 – Apr 2021</span>
                </div>
                <span className="text-xs font-semibold text-[#0d9488] block mb-2">Grupo Fast • Fast Escova</span>
                <ul className="list-disc pl-4 text-xs text-[#374151] space-y-1">
                  <li>Designed ERP architecture from scratch using Clean Architecture, DDD, and .NET Core.</li>
                  <li>Built secure real-time data sync APIs between franchisor and distributed clinic units.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-base sm:text-lg font-bold text-[#0f766e] border-b-2 border-[#0d9488] pb-1 mb-3">
              Education
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                <h3 className="text-sm sm:text-base font-bold text-[#374151]">
                  Bachelor&apos;s Degree in Computer Engineering
                </h3>
                <span className="text-xs italic text-gray-500">Jan 2014 – Dec 2018</span>
              </div>
              <p className="text-xs text-[#4b5563]">UNORTE - Centro Universitário do Norte de São Paulo</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
