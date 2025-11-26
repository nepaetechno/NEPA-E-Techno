/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // IMPORTANT: If deploying to a subdirectory (like GitHub Pages), uncomment the line below and set it to your repo name.
  // Example: If your repo is https://github.com/user/my-site, set basePath to '/my-site'
  basePath: '/NEPA-E-Techno',
  assetPrefix: '/NEPA-E-Techno',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
