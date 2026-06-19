import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="w-[300px] h-[455px] mb-8 px-4 py-5 rounded-xl shadow-sm shadow-gray-200 bg-white">
      {/* Image Skeleton */}
      <div className="w-full h-[210px] rounded-lg bg-gray-300 animate-pulse"></div>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-4">
        <div className="w-10 h-4 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Title */}
      <div className="mt-4 space-y-2">
        <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Info Row */}
      <div className="flex items-center gap-4 mt-5">
        <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-14 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-12 px-3 border-t pt-3">
        <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>

        <div className="flex gap-2">
          <div className="w-12 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
