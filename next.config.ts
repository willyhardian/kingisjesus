import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            { hostname: "i.ytimg.com" }, // YouTube Thumbnails
            { hostname: "yt3.ggpht.com" }, // YouTube Channel Avatars
            { hostname: "googleusercontent.com" }, // Other Google hosted images
            { hostname: "yt3.googleusercontent.com" }, // Other Google hosted images
        ],
    },
};

export default nextConfig;
