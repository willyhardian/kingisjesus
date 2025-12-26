'use client';

import { X, Clock, User, Tag, BookOpen, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import FullArticleView from './FullArticleView';

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

interface ArticleModalProps {
  article: Post;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  const [showFullArticle, setShowFullArticle] = useState(false);

  if (!isOpen) return null;

  if (showFullArticle) {
    return (
      <FullArticleView
        article={article}
        onClose={onClose}
        onBack={() => setShowFullArticle(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Article Details</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Article Image */}
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {article.title}
            </h3>

            {/* Author and Meta */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.publishedAt}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Summary</h4>
              <p className="text-gray-700 leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bible References */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Bible References
              </h4>
              <div className="space-y-2">
                {article.bibleReferences.map((reference, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm"
                  >
                    {reference}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-t border-gray-200 bg-gray-50 gap-3 sm:gap-0">
            <div className="text-sm text-gray-600 order-2 sm:order-1">
              Category: <span className="font-medium text-gray-900">{article.category}</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto order-1 sm:order-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                Close
              </button>
              <button
                onClick={() => setShowFullArticle(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Full Article</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}