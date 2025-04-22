import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The i18n config in next.config is not compatible with the App Router.
  // We're using middleware and locale segments instead for routing.
};

export default nextConfig;
