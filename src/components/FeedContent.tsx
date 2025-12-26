'use client';

import { useState } from 'react';
import PostCard from '@/components/PostCard';
import ArticleModal from '@/components/ArticleModal';

// Mock data for posts
const mockPosts = [
  {
    id: '1',
    title: 'Finding Peace in God\'s Promises During Difficult Times',
    excerpt: 'When life feels overwhelming, we can find comfort and strength in the unchanging promises of God. Discover how to anchor your faith in His word.',
    summary: 'This article explores how believers can find comfort and strength during challenging times by anchoring their faith in God\'s unchanging promises. It provides practical guidance on trusting in divine providence and finding peace through scripture.',
    content: 'Full article content about finding peace in God\'s promises...',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    },
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    tags: ['Faith', 'Prayer', 'Hope'],
    bibleReferences: ['Jeremiah 29:11', 'Romans 8:28', 'Philippians 4:6-7'],
    category: 'Spiritual Growth',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
  },
  {
    id: '2',
    title: 'The Power of Community in Christian Growth',
    excerpt: 'Explore how fellowship with other believers can strengthen your faith journey and provide accountability in your walk with Christ.',
    summary: 'This article examines the vital role of Christian community in spiritual development, highlighting how fellowship with other believers provides encouragement, accountability, and mutual support in the faith journey.',
    content: 'Full article content about Christian community...',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    publishedAt: '2024-01-14',
    readTime: '7 min read',
    tags: ['Community', 'Fellowship', 'Growth'],
    bibleReferences: ['Hebrews 10:24-25', 'Acts 2:42-47', 'Ecclesiastes 4:12'],
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=200&fit=crop',
  },
  {
    id: '3',
    title: 'Understanding Grace: More Than Just Forgiveness',
    excerpt: 'Grace is not just about forgiveness—it\'s about transformation. Learn how God\'s grace empowers us to live differently.',
    summary: 'This article delves into the transformative power of God\'s grace, explaining how it goes beyond mere forgiveness to enable believers to live transformed lives that reflect Christ\'s character.',
    content: 'Full article content about understanding grace...',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    },
    publishedAt: '2024-01-13',
    readTime: '6 min read',
    tags: ['Grace', 'Theology', 'Transformation'],
    bibleReferences: ['Ephesians 2:8-9', '2 Corinthians 5:17', 'Titus 2:11-12'],
    category: 'Theology',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop',
  },
  {
    id: '4',
    title: 'Practical Ways to Deepen Your Prayer Life',
    excerpt: 'Simple yet powerful strategies to make your prayer time more meaningful and develop a stronger connection with God.',
    summary: 'This practical guide offers concrete strategies for enhancing your prayer life, including techniques for focused prayer, creating sacred space, and developing consistency in your communication with God.',
    content: 'Full article content about deepening prayer life...',
    author: {
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
    publishedAt: '2024-01-12',
    readTime: '8 min read',
    tags: ['Prayer', 'Spiritual Disciplines', 'Growth'],
    bibleReferences: ['Matthew 6:5-15', '1 Thessalonians 5:17', 'Luke 11:1-4'],
    category: 'Spiritual Disciplines',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=200&fit=crop',
  },
  {
    id: '5',
    title: 'Walking by Faith When You Can\'t See the Path',
    excerpt: 'Sometimes God calls us to step into the unknown. Learn how to trust Him when the way forward isn\'t clear.',
    summary: 'This encouraging article explores how to maintain faith and trust in God during uncertain times, offering biblical examples and practical wisdom for navigating life\'s unclear moments.',
    content: 'Full article content about walking by faith...',
    author: {
      name: 'Rachel Kim',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
    },
    publishedAt: '2024-01-11',
    readTime: '4 min read',
    tags: ['Faith', 'Trust', 'Guidance'],
    bibleReferences: ['Hebrews 11:1', 'Proverbs 3:5-6', '2 Corinthians 5:7'],
    category: 'Faith',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
  },
  {
    id: '6',
    title: 'The Joy of Serving Others in Christ\'s Name',
    excerpt: 'Discover the profound satisfaction that comes from serving others and how it reflects the heart of Jesus.',
    summary: 'This article explores the biblical foundation for serving others and how acts of service not only bless recipients but also bring deep joy and fulfillment to those who serve.',
    content: 'Full article content about serving others...',
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    },
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    tags: ['Service', 'Love', 'Ministry'],
    bibleReferences: ['Mark 10:43-44', 'Galatians 5:13', '1 Peter 4:10'],
    category: 'Ministry',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop',
  },
];

interface Post {
  id: string;
  title: string;
  excerpt: string;
  summary: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  bibleReferences: string[];
  category: string;
  image: string;
}

export default function FeedContent() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleViewFull = (post: Post) => {
    // For now, just close the modal. In a real app, this would navigate to the full article
    console.log('Viewing full article:', post.title);
    handleCloseModal();
    // TODO: Navigate to full article page
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Feed</h1>
        <p className="text-gray-600">Discover the latest Christian articles and spiritual insights</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 mb-8 border-b border-gray-200">
        <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
          For You
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          Following
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          Recent
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          Popular
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:gap-8">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} onClick={handlePostClick} />
        ))}
      </div>

      {/* Article Modal */}
        {selectedPost && (
          <ArticleModal
            article={selectedPost}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedPost(null);
            }}
          />
        )}

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Load More Articles
        </button>
      </div>
    </div>
  );
}