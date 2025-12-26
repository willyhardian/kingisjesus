// lib/youtube.ts
import { Resource } from "@/types/db"; // We'll map partly to this

const API_KEY = process.env.YOUTUBE_API_KEY;

export interface YouTubeVideoData {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
    publishedAt: Date;
}

export async function fetchLatestVideos(
    playlistId: string
): Promise<YouTubeVideoData[]> {
    if (!API_KEY) {
        console.error("❌ YOUTUBE_API_KEY is missing");
        return [];
    }

    // 1. We fetch the "playlistItems" endpoint (Cost: 1 unit)
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=5&key=${API_KEY}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
        const data = await res.json();

        if (!data.items) {
            console.error(`❌ YouTube API Error for ${playlistId}:`, data);
            return [];
        }

        // 2. Map the raw API data to our clean format
        return data.items.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
            // Get the highest quality thumbnail available
            thumbnail:
                item.snippet.thumbnails.maxres?.url ||
                item.snippet.thumbnails.high?.url ||
                item.snippet.thumbnails.medium?.url,
            publishedAt: new Date(item.snippet.publishedAt),
        }));
    } catch (error) {
        console.error(`❌ Failed to fetch playlist ${playlistId}`, error);
        return [];
    }
}
