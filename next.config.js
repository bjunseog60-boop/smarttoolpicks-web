/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/smarttoolpicks-web',
  assetPrefix: '/smarttoolpicks-web/',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};
module.exports = nextConfig;
