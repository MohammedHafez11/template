const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["sociallms.runasp.net"],  // Just use the domain, without the protocol
  },
};

module.exports = nextConfig;