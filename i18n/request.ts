import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
