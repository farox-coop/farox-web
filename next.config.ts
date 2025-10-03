import createNextIntlPlugin from "next-intl/plugin"

const locales = ["en", "es"]
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://farox.coop/**")],
  },

  async redirects() {
    const redirectsArray = []

    redirectsArray.push({
      source: "/showcase",
      destination: "/showcase.pdf",
      permanent: true,
    })

    for (const locale of locales) {
      redirectsArray.push({
        source: `/${locale}/showcase`,
        destination: "/showcase.pdf",
        permanent: true,
      })
    }

    return redirectsArray
  },
}

export default withNextIntl(nextConfig)
