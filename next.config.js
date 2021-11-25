module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pricing",
        permanent: true
      }
    ];
  }
};
