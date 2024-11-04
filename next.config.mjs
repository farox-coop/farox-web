import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV !== "production" ? '' : '/farox-web',
  assetPrefix: process.env.NODE_ENV !== "production" ? '' : '/farox-web/',
}

export default withNextIntl(nextConfig)