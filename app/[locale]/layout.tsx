import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
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
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${ibmPlexSans.className}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
