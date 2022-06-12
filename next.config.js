/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAILJS_USER_ID : process.env.EMAILJS_USER_ID,
    TEMPLATE_ID : process.env.TEMPLATE_ID,
    SERVICE_ID : process.env.SERVICE_ID,

    // firebase config
    FIREBASE_API_KEY : process.env.FIREBASE_API_KEY,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
  },
  images : {
    domains : [
     "firebasestorage.googleapis.com"
    ]
  }
}

module.exports = nextConfig
