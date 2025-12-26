'use client';

import { X, ArrowLeft, Clock, User, Tag, BookOpen } from 'lucide-react';
import Image from 'next/image';

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

interface FullArticleViewProps {
  article: Post;
  onClose: () => void;
  onBack: () => void;
}

export default function FullArticleView({ article, onClose, onBack }: FullArticleViewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-0">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Back to Summary</span>
            <span className="sm:hidden">Back</span>
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Article Content */}
        <div className="p-4 sm:p-6">
          {/* Article Image */}
          {article.image && (
            <div className="mb-4 sm:mb-6">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Article Meta */}
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author.name}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <span>{article.publishedAt}</span>
            </div>

            {/* Category */}
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-blue-600" />
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {article.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-lg max-w-none mb-6 sm:mb-8">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* Bible References */}
          {article.bibleReferences && article.bibleReferences.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h3 className="text-base sm:text-lg font-semibold text-blue-900">Bible References</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {article.bibleReferences.map((reference: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white border border-blue-200 rounded-md p-2 sm:p-3 text-blue-800 font-medium text-sm sm:text-base"
                  >
                    {reference}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={48}
                height={48}
                className="w-12 h-12 sm:w-15 sm:h-15 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{article.author.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Contributing Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}