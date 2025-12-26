"use server";

import clientPromise from "@/lib/mongodb";
import { fetchLatestVideos } from "@/lib/youtube";
import { Channel, Resource } from "@/types/db";

export async function syncContent() {
    const client = await clientPromise;
    const db = client.db("jesusiskingcenter");

    // 1. Get all enabled channels from DB
    const channels = await db
        .collection<Channel>("channels")
        .find({ isEnabled: true })
        .toArray();

    if (channels.length === 0) {
        return { success: false, message: "No enabled channels found in DB." };
    }

    console.log(`🔄 Syncing ${channels.length} channels...`);
    let totalNewItems = 0;

    // 2. Loop through each channel
    for (const channel of channels) {
        // Only process YouTube channels for now
        if (channel.platform === "youtube" && channel.uploadPlaylistId) {
            const videos = await fetchLatestVideos(channel.uploadPlaylistId);

            // 3. Prepare Bulk Operations (Efficient!)
            // We map the video data to your Resource schema
            const operations = videos.map((video) => ({
                updateOne: {
                    filter: { originalId: video.id }, // Check if video exists
                    update: {
                        $setOnInsert: {
                            // Only set these fields if it's a NEW document
                            title: video.title,
                            url: video.url,
                            thumbnail: video.thumbnail,
                            originalId: video.id,

                            // Copy channel metadata to the resource (for the UI)
                            sourceName: channel.name,
                            sourceAvatar: channel.avatarUrl,

                            type: "video",
                            status: "pending", // <--- IMPORTANT: Needs your approval
                            publishedAt: video.publishedAt,
                            createdAt: new Date(),
                        },
                    },
                    upsert: true, // Insert if not found
                },
            }));

            if (operations.length > 0) {
                const result = await db
                    .collection("resources")
                    .bulkWrite(operations);
                totalNewItems += result.upsertedCount;
            }
        }
    }

    const msg = `✅ Sync complete. Added ${totalNewItems} new items.`;
    console.log(msg);
    return { success: true, message: msg };
}
