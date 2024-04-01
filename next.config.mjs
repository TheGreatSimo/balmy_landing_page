import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next/dist/server/config').NextConfig} */
const nextConfig = {};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default function configureNext(phase, { defaultConfig }) {
  return withBundleAnalyzer({
    ...defaultConfig,
    ...nextConfig
  });
}
