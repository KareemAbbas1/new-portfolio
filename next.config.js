/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'imgur.com',
      'media.giphy.com',
      'usagif.com',
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
