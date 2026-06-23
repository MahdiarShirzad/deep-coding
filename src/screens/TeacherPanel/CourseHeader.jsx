import React from "react";

const CourseHeader = ({ onAddClick }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 mb-6">
      <div>
        <h2 className="text-xl font-black">مدیریت کارگاه‌ها و دوره‌ها</h2>
        <p className="text-xs text-slate-400 mt-1">
          دوره‌های خود را ویرایش، حذف یا دوره جدیدی مستقر کنید.
        </p>
      </div>
      <button
        onClick={onAddClick}
        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/20 hover:shadow-fuchsia-500/30 flex items-center gap-1.5 self-stretch sm:self-auto justify-center"
      >
        <span>✨</span> افزودن دوره جدید
      </button>
    </div>
  );
};

export default CourseHeader;
