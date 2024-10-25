import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    // Need to run canary version to use this
    // https://nextjs.org/docs/app/api-reference/next-config-js/ppr
    // ppr: 'incremental',
  },
}

export default nextConfig
