import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/farox-web',
  assetPrefix: '/farox-web/',
}

export default withNextIntl(nextConfig)