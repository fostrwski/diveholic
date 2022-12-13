const withPWA = require("next-pwa")({ dest: "public" });

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
});
