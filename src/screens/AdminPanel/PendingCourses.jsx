import React from "react";

const PendingCourses = () => {
  const pending = [
    {
      id: 1,
      title: "آموزش پیشرفته Next.js 14",
      teacher: "مهدیار شیرزاد",
      price: "۳,۵۰۰,۰۰۰",
      date: "امروز",
    },
    {
      id: 2,
      title: "معماری Microservices در Node",
      teacher: "علی احمدی",
      price: "۴,۲۰۰,۰۰۰",
      date: "دیروز",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl flex flex-col h-full">
      <div className="flex justify-between items-center mb-5 border-b border-slate-800 pb-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          دوره‌های در انتظار تایید
        </h3>
        <button className="text-[10px] text-cyan-400 hover:text-cyan-300">
          مشاهده همه
        </button>
      </div>

      <div className="space-y-3 flex-1">
        {pending.map((course) => (
          <div
            key={course.id}
            className="bg-slate-950 border border-slate-800 p-3 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <div>
              <h4 className="text-xs font-bold text-slate-200 mb-1 line-clamp-1">
                {course.title}
              </h4>
              <p className="text-[10px] text-slate-500">
                مدرس: {course.teacher} | {course.price} تومان
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/20 text-[10px] px-3 py-1.5 rounded-lg transition-colors">
                تایید
              </button>
              <button className="flex-1 sm:flex-none bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20 text-[10px] px-3 py-1.5 rounded-lg transition-colors">
                رد
              </button>
            </div>
          </div>
        ))}
        {pending.length === 0 && (
          <div className="text-center text-xs text-slate-500 py-6">
            موردی برای بررسی وجود ندارد.
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingCourses;
