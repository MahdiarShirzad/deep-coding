import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getLastCourses } from "../../services/apiCourses";

const RecentCourses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["lastCourses"],
    queryFn: getLastCourses,
  });

  console.log(data);

  const courses = [
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
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          آخرین دوره‌های منتشر شده
        </h3>
        <button className="text-[10px] text-cyan-400 hover:text-cyan-300">
          مشاهده همه
        </button>
      </div>

      <div className="space-y-3 flex-1">
        {courses.map((course) => (
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
              <button className="flex-1 sm:flex-none bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] px-3 py-1.5 rounded-lg transition-colors">
                مشاهده
              </button>
              <button className="flex-1 sm:flex-none bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white border border-cyan-500/20 text-[10px] px-3 py-1.5 rounded-lg transition-colors">
                ویرایش
              </button>
            </div>
          </div>
        ))}
        {courses.length === 0 && (
          <div className="text-center text-xs text-slate-500 py-6">
            دوره ای یافت نشد.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentCourses;
