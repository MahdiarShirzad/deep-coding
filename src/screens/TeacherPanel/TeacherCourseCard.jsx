import React from "react";

const TeacherCourseCard = ({ course, onEditClick, onDeleteClick }) => {
  return (
    <div className="bg-slate-900 border border-slate-800/80 hover:border-slate-700 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-300">
      {/* اطلاعات دوره */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={course.img}
          alt={course.name}
          className="w-20 h-12 object-cover rounded-xl bg-slate-800 border border-slate-700/50 hidden md:block"
        />
        <div className="space-y-1">
          <h4 className="font-bold text-sm md:text-base line-clamp-1">
            {course.name}
          </h4>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              👥 {course.studentsCount} دانشجو
            </span>
            <span className="text-emerald-400 font-semibold">
              💰 {course.price.toLocaleString()} تومان
            </span>
            {course.status === "published" ? (
              <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md text-[10px] border border-emerald-500/20">
                منتشر شده
              </span>
            ) : (
              <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md text-[10px] border border-amber-500/20">
                پیش‌نویس
              </span>
            )}
          </div>
        </div>
      </div>

      {/* دکمه‌های عملیاتی */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t border-slate-800/60 sm:border-0 pt-3 sm:pt-0">
        <button
          onClick={() => onEditClick(course)}
          className="bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-cyan-400 text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1 flex-1 sm:flex-none justify-center"
        >
          🛠️ ویرایش
        </button>
        <button
          onClick={() => onDeleteClick(course)}
          className="bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20 text-xs px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1 flex-1 sm:flex-none justify-center"
        >
          🗑️ حذف
        </button>
      </div>
    </div>
  );
};

export default TeacherCourseCard;
