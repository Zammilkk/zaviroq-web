import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Config options here
  allowedDevOrigins: ['10.189.219.18', 'cold-moose-shine.loca.lt', '10.166.244.18'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'zaviroq.com',
          },
        ],
        destination: 'https://www.zaviroq.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
