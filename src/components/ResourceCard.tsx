import Image from 'next/image';
import { Resource } from '@/types/db';
import { formatDistanceToNow } from 'date-fns';

export function ResourceCard({ resource }: { resource: Resource }) {
    return (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#8b949e] transition-colors"
        >
            {/* 1. Thumbnail Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={resource.thumbnail}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Type Badge (Video/Article) */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-xs text-white px-2 py-1 rounded-md font-medium uppercase">
                    {resource.type}
                </div>
            </div>

            {/* 2. Content Area */}
            <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-gray-100 font-bold leading-tight mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                        {resource.title}
                    </h3>
                </div>

                {/* 3. Footer (Source & Time) */}
                <div className="flex items-center mt-4 text-xs text-gray-400">
                    {/* Source Avatar (If you have it, otherwise fallback circle) */}
                    <div className="relative w-5 h-5 mr-2 rounded-full overflow-hidden bg-gray-700">
                        {resource.sourceAvatar ? (
                            <Image src={resource.sourceAvatar} alt={resource.sourceName} fill className="object-cover" />
                        ) : (
                            <div className="w-full h-full bg-blue-500" />
                        )}
                    </div>

                    <span className="font-medium text-gray-300 mr-2">{resource.sourceName}</span>
                    <span>• {formatDistanceToNow(new Date(resource.publishedAt), { addSuffix: true })}</span>
                </div>
            </div>
        </a>
    );
}