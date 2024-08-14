/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export', // Add this line,
  images: { unoptimized: true }
}

export default nextConfig