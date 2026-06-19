import React from "react";

const TopCoursesCardSkeleton = () => {
  return (
    <div className="w-[580px] max-xl:w-[550px] max-md:w-[500px] max-sm:w-[428px] h-44 flex gap-8 rounded-2xl px-6 py-4 shadow-sm shadow-slate-300 bg-white mb-8">
      {/* Image */}
      <div className="w-52 h-full bg-gray-300 rounded-xl animate-pulse"></div>

      {/* Content */}
      <div className="w-3/5 flex flex-col justify-between">
        {/* Title */}
        <div className="space-y-2 mt-2">
          <div className="w-3/4 h-5 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-1/2 h-5 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Info row */}
        <div className="flex gap-5">
          <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-14 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-3 flex justify-between items-center">
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
