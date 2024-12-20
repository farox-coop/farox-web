import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'],

  // https://next-intl-docs.vercel.app/docs/routing/middleware#usage-without-middleware-static-export
  localePrefix: 'always',
  localeDetection: false,

  // Used when no locale matches
  defaultLocale: 'es',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
