import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rafaelchampion.github.io/InteractiveCV/'),
  title: 'Rafael Comunhão Ferreira | Engenheiro de Software .NET e Full Stack',
  description:
    'Portfólio profissional de Rafael Comunhão Ferreira — Engenheiro de Software especializado em desenvolvimento .NET, C#, arquitetura de software e sistemas distribuídos.',
  keywords: [
    'Rafael Comunhão Ferreira',
    'Desenvolvedor .NET',
    'Engenheiro de Software',
    'Programador C#',
    'Full Stack Developer',
    'Software Architecture',
    'Clean Architecture',
    'Microservices',
  ],
  authors: [{ name: 'Rafael Comunhão Ferreira' }],
  openGraph: {
    type: 'website',
    title: 'Rafael Comunhão Ferreira | Engenheiro de Software .NET e Full Stack',
    description:
      'Especialista em desenvolvimento .NET e arquitetura de software com sólida experiência em aplicações distribuídas e de alto impacto.',
    url: 'https://rafaelchampion.github.io/InteractiveCV/',
    siteName: 'Rafael Comunhão Ferreira - Portfólio',
    images: [
      {
        url: 'https://i.postimg.cc/ZRM9sp4z/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Rafael Comunhão Ferreira Portfolio Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Comunhão Ferreira | Engenheiro de Software .NET e Full Stack',
    description:
      'Engenheiro de Software Sênior especialista em .NET, C#, arquitetura limpa e microsserviços.',
    images: ['https://i.postimg.cc/ZRM9sp4z/og-cover.jpg'],
  },
  icons: {
    icon: './favicon.png',
    apple: './favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="dark" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Rafael Comunhão Ferreira',
              url: 'https://rafaelchampion.github.io/InteractiveCV/',
              image: 'https://i.postimg.cc/ZRM9sp4z/og-cover.jpg',
              jobTitle: 'Senior Software Engineer',
              sameAs: [
                'https://www.linkedin.com/in/rafael-ferreira93/',
                'https://github.com/rafaelchampion',
              ],
            }),
          }}
        />
      </head>
      <body className="dark-mode min-h-screen">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
