import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.watchOptions = {
      ignored: ['**/blog-for-echopulse/**']
    }
    return config
  }
}

export default nextConfig
