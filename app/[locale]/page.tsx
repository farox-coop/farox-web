import {setRequestLocale} from 'next-intl/server';
import MainContent from "./MainContent";

export function generateStaticParams() {
  // Define the locales you want to support
  const locales = ['en', 'es'];
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({params: {locale}}: {params: {locale: string}}) {
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <MainContent />
  )
}
