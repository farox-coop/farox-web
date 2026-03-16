"use client"

import { GOOGLE_ANALYTICS_ID } from "@/global"
import Script from "next/script"

/**
 * Google Analytics component
 * Only loads in production to avoid polluting analytics with dev/localhost data
 */
export function GoogleAnalytics() {
  // Only load GA in production
  if (process.env.NODE_ENV !== "production") {
    return null
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} strategy="afterInteractive" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: gtag initialization requires innerHTML injection
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `,
        }}
      />
    </>
  )
}
