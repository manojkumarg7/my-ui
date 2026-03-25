import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/demo", destination: "/docs/initialization", permanent: false },
      { source: "/components/button", destination: "/docs/button", permanent: false },
      {
        source: "/components/liquid-button",
        destination: "/docs/liquid-button",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
