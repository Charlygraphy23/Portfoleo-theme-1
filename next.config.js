/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAILJS_USER_ID : process.env.EMAILJS_USER_ID,
    TEMPLATE_ID : process.env.TEMPLATE_ID,
    SERVICE_ID : process.env.SERVICE_ID,
  }
}

module.exports = nextConfig
