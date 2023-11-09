/** @type {import('next').NextConfig} */

const nextConfig = {
   async headers() {
      return [
         {
            source: '/(.*)',
            headers: [
               {
                  key: 'X-Frame-Options',
                  value: 'SAMEORIGIN',
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
               },
               {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=3571000; includeSubDomains; preload',
               },
            ],
         },
      ]
   },
   images: {
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 7 * 24 * 60 * 60,
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'tabrizian.storage.iran.liara.space',
         },
         {
            protocol: 'https',
            hostname: 'trustseal.enamad.ir',
         },
      ],
   },
   output: 'standalone',

   // }
   webpack: (config) => {
      config.externals.push({
         '@aws-sdk/signature-v4-multi-region': 'commonjs @aws-sdk/signature-v4-multi-region',
      })

      return config
   },
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)