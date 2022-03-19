/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    METAPHYSICS_ENDPOINT: process.env.METAPHYSICS_ENDPOINT,
  },
  compiler: {
    relay: {
      src: "./src",
      artifactDirectory: "./src/__generated__",
      language: "typescript",
    },

    styledComponents: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
