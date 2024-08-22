/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/',
          },
        ],
        domains: ["avatars.githubusercontent.com"]
      },
};

export default nextConfig;
