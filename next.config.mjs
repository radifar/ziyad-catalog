/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.ziyadbooks.net',
                pathname: '/products/**',
            },
        ],
    },
};

export default nextConfig
