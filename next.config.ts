import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Config options here
  allowedDevOrigins: ['10.189.219.18', 'cold-moose-shine.loca.lt']
};

export default withNextIntl(nextConfig);
