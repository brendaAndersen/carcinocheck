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

  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "https://api-principal.com/v1/chat-messages",
      },
      {
        source: "/api/proxy/:param*",
        destinatWion: "http://54.232.150.57/v1/:param*",
      },
      {
        source: "/api/proxy/files/upload",
        destination: "http://54.232.150.57/files/upload",
      },
    ];
  },
};

module.exports = nextConfig;
