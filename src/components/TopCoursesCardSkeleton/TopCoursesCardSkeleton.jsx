import React from "react";

const TopCoursesCardSkeleton = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row md:h-44 gap-4 md:gap-8 rounded-2xl p-4 md:px-6 md:py-4 shadow-sm shadow-slate-300 bg-white">
      {/* Image */}
      <div className="w-full h-48 md:w-52 md:h-full bg-gray-300 rounded-xl animate-pulse"></div>

      {/* Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-between">
        <div>
          {/* Title */}
          <div className="space-y-2 mt-1 md:mt-2">
            <div className="w-3/4 h-5 md:h-6 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-1/2 h-5 md:h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4 md:mt-3">
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-8 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Info row */}
          <div className="flex gap-3 md:gap-5 mt-3 md:mt-4">
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-14 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-3 flex flex-col sm:flex-row justify-between gap-3 sm:gap-1 mt-4 md:mt-0">
          <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>

          <div className="flex gap-2">
            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCoursesCardSkeleton;
