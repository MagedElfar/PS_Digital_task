/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/food',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
