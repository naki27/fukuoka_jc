const path = require("path");

module.exports = {
  webpack: config => {
    config.resolve.alias.canvas = false;
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src"),
    };
    return config;
  },
  webpack5: true,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};