/* module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['zzte-003.dx.commercecloud.salesforce.com'],
  },
}
 */

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
};
 
module.exports = nextConfig;