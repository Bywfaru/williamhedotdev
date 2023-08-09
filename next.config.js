/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return cfg;
  },
};

module.exports = nextConfig;
