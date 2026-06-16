import React from "react";

export default function BlogCardSkeleton() {
  return (
    <div className="w-full max-w-[600px] bg-gray-200 rounded-xl shadow-md overflow-hidden animate-pulse my-4">
      {/* Image Skeleton */}
      <div className="w-full h-[260px] bg-gray-300"></div>

      <div className="p-5 space-y-4">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Subtitle Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>

        {/* Text Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
}
