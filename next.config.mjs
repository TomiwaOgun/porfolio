/** @type {import('next').NextConfig} */
const nextConfig = {  output: 'export', // Enable static export
  distDir: '.', 
    images: {
      unoptimized: true, // Disable image optimization for static export
    },};

export default nextConfig;
