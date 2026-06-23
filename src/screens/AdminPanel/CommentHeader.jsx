import React from "react";

const CommentHeader = ({ total, pending, approved }) => {
  return (
    <div className="flex flex-col gap-6 mb-8 border-b border-slate-800 pb-6">
      <div>
        <h1 className="text-2xl font-black text-white">مدیریت دیدگاه‌ها</h1>
        <p className="text-xs text-slate-400 mt-1">
          نظرات کاربران را بررسی کنید، به آن‌ها پاسخ دهید یا وضعیت نمایش آن‌ها
          را تغییر دهید.
        </p>
      </div>

      {/* مینی آمار نظرات */}
      <div className="grid grid-cols-3 gap-4 max-w-xl">
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center">
          <span className="block text-[10px] text-slate-400 mb-1">
            کل نظرات
          </span>
          <span className="text-sm font-black text-cyan-400">{total}</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center relative overflow-hidden">
          <span className="block text-[10px] text-slate-400 mb-1">
            در انتظار بررسی
          </span>
          <span className="text-sm font-black text-amber-400">{pending}</span>
          {pending > 0 && (
            <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          )}
        </div>
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center">
          <span className="block text-[10px] text-slate-400 mb-1">
            تایید شده
          </span>
          <span className="text-sm font-black text-emerald-400">
            {approved}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentHeader;
