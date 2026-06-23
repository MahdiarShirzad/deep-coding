import React from "react";

const UserHeader = ({ totalUsers, teachersCount, studentsCount }) => {
  return (
    <div className="flex flex-col gap-6 mb-8 border-b border-slate-800 pb-6">
      <div>
        <h1 className="text-2xl font-black text-white">مدیریت کاربران</h1>
        <p className="text-xs text-slate-400 mt-1">
          سطح دسترسی کاربران را تغییر دهید، اکانت‌ها را حذف یا اطلاعات آن‌ها را
          بررسی کنید.
        </p>
      </div>

      {/* مینی آمار بالای صفحه */}
      <div className="grid grid-cols-3 gap-4 max-w-xl">
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center">
          <span className="block text-[10px] text-slate-400 mb-1">
            کل کاربران
          </span>
          <span className="text-sm font-black text-cyan-400">{totalUsers}</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center">
          <span className="block text-[10px] text-slate-400 mb-1">مدرسین</span>
          <span className="text-sm font-black text-violet-400">
            {teachersCount}
          </span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-center">
          <span className="block text-[10px] text-slate-400 mb-1">
            دانشجویان
          </span>
          <span className="text-sm font-black text-emerald-400">
            {studentsCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
