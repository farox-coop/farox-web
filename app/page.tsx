"use client"
import { redirect } from 'next/navigation';
import { routing } from "../i18n/routing";
import { useEffect } from 'react';

// https://next-intl-docs.vercel.app/docs/routing/middleware#usage-without-middleware-static-export
export default function RootPage() {
  
  useEffect(() => {
    // Detect the browser's preferred language
    let browserLang = "";
    if (navigator.language && navigator.language.indexOf("-") !== -1) {
      browserLang = navigator.language.split("-")[0];
    } else {
      browserLang = navigator.language;
    }
    // Redirect the user to the default locale when `/` is requested
    redirect(browserLang || routing.defaultLocale || '/en');
  }, []);

}
