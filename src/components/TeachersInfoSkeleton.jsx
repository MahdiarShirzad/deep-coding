import React from "react";

const TeachersInfoSkeleton = () => {
  return (
    <div
      className="max-w-[1320px] mx-auto px-4 sm:px-8 mt-32 mb-20 font-iransans animate-pulse"
      dir="rtl"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-12">
        <div className="flex-1 space-y-10">
          <div>
            <div className="h-5 bg-slate-200 rounded-md w-16 mb-4"></div>
            <div className="h-10 bg-slate-300 rounded-md w-2/3 sm:w-1/2 mb-4"></div>
            <div className="h-6 bg-slate-200 rounded-md w-1/3"></div>
          </div>

          <div className="flex items-center gap-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-fit">
            <div className="flex flex-col gap-3 items-center">
              <div className="h-4 bg-slate-200 rounded-md w-20"></div>
              <div className="h-6 bg-slate-300 rounded-md w-12"></div>
            </div>
            <div className="w-[1px] h-10 bg-slate-200"></div>
            <div className="flex flex-col gap-3 items-center">
              <div className="h-4 bg-slate-200 rounded-md w-20"></div>
              <div className="h-6 bg-slate-300 rounded-md w-12"></div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="h-8 bg-slate-300 rounded-md w-32 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded-md w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded-md w-4/6"></div>
            </div>
          </div>

          <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="h-8 bg-slate-300 rounded-md w-40 mb-6"></div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="w-[300px] h-[455px] px-4 py-5 rounded-xl shadow-sm shadow-gray-200 bg-white border border-slate-50"
                >
                  <div className="w-full h-[210px] bg-slate-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/4 mb-4"></div>
                  <div className="h-6 bg-slate-300 rounded-md w-3/4 mb-5"></div>

                  <div className="flex items-center gap-4 mt-5">
                    <div className="h-4 bg-slate-200 rounded-md w-12"></div>
                    <div className="h-4 bg-slate-200 rounded-md w-16"></div>
                    <div className="h-4 bg-slate-200 rounded-md w-12"></div>
                  </div>

                  <div className="flex items-center justify-between mt-12 px-3 border-t border-slate-100 pt-4">
                    <div className="h-4 bg-slate-200 rounded-md w-20"></div>
                    <div className="h-5 bg-slate-300 rounded-md w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[350px] shrink-0 space-y-6">
          <div className="bg-white p-2 sm:p-3 rounded-3xl shadow-sm border border-slate-100 w-full max-w-[280px] lg:max-w-full mx-auto aspect-square">
            <div className="w-full h-full bg-slate-200 rounded-2xl"></div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="h-6 bg-slate-300 rounded-md w-28 mb-6"></div>
            <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
            <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
            <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersInfoSkeleton;
