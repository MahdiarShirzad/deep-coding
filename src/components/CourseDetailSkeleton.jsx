import React from "react";

const CourseDetailSkeleton = () => {
  return (
    <div
      className="font-iransans bg-slate-50 min-h-screen pb-20 mt-20 animate-pulse"
      dir="rtl"
    >
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-7 lg:py-7">
          <div className="lg:w-2/3 w-full space-y-6">
            <div className="h-10 bg-slate-700 rounded-md w-3/4"></div>

            <div className="space-y-3">
              <div className="h-4 bg-slate-700 rounded-md w-full"></div>
              <div className="h-4 bg-slate-700 rounded-md w-full"></div>
              <div className="h-4 bg-slate-700 rounded-md w-5/6"></div>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <div className="h-8 bg-slate-700 rounded-full w-28"></div>
              <div className="h-4 bg-slate-700 rounded-md w-16"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block"></span>
              <div className="h-4 bg-slate-700 rounded-md w-24"></div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <div className="h-4 bg-slate-700 rounded-md w-12"></div>
              <div className="h-4 bg-slate-700 rounded-md w-28"></div>
            </div>

            <div className="pt-6">
              <div className="h-11 bg-slate-700 rounded-xl w-44"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 relative">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10 lg:pl-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="h-7 bg-slate-200 rounded-md w-48 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-slate-200 rounded-full shrink-0"></div>
                    <div className="h-4 bg-slate-200 rounded-md w-full mt-1"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <div className="h-7 bg-slate-200 rounded-md w-36 mb-2"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md w-2/3"></div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <div className="h-7 bg-slate-200 rounded-md w-40 mb-2"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md w-4/5"></div>
            </div>
          </div>

          <div className="w-full lg:w-[380px] shrink-0 relative">
            <div className="sticky top-28 lg:-mt-52 z-10">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="w-full aspect-video bg-slate-200"></div>

                <div className="p-6 space-y-6">
                  <div className="h-8 bg-slate-200 rounded-md w-1/3"></div>
                  <div className="h-12 bg-slate-200 rounded-xl w-full"></div>

                  <div className="pt-4 space-y-4">
                    <div className="h-5 bg-slate-200 rounded-md w-24 mb-2"></div>
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                        <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailSkeleton;
