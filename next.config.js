/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};
module.exports = nextConfig;
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
