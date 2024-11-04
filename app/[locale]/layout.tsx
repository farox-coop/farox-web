import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import '../globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Farox Web',
  description:
    'Somos una cooperativa de desarrollo de software especializada en brindar servicios profesionales relacionados a tecnologías tales como Data Science, Machine Learning, Sistemas de alta concurrencia y Full-Stack',
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://farox.coop/'),
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {// Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body className={`${ibmPlexSans.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
