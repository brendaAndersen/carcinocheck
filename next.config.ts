import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Authorization, Content-Type" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/us',
        permanent: true,
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/chat",
  //       destination: "https://api-principal.com/v1/chat-messages",
  //     },
  //     {
  //       source: "/api/proxy/:param*",
  //       destination: "http://54.232.150.57/v1/:param*",
  //     },
  //     {
  //       source: "/api/proxy/files/upload",
  //       destination: "http://54.232.150.57/files/upload",
  //     },
  //   ];
  // },
  images: {
    domains: ['flagcdn.com'],
  },

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
