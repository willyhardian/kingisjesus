// types/db.ts
import { ObjectId } from "mongodb";

// 1. The Channel (Who we are tracking)
export interface Channel {
    _id?: ObjectId;
    name: string; // e.g. "Elevation Worship"
    platform: "youtube" | "blog" | "instagram";
    uploadPlaylistId: string; // The "UU..." ID from YouTube
    avatarUrl: string; // The logo image
    isEnabled: boolean; // Easy switch to turn off a channel
    createdAt: Date;
}

// 2. The Resource (The content card)
export interface Resource {
    _id?: ObjectId;
    originalId: string; // YouTube Video ID (prevent duplicates)
    title: string;
    url: string;
    thumbnail: string;

    // Metadata for the UI
    sourceName: string;
    sourceAvatar: string;
    type: "video" | "article";
    status: "pending" | "published"; // <--- Your approval workflow

    publishedAt: Date; // When the video went live
    createdAt: Date; // When we synced it
}
