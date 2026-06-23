import React from "react";

const UserInformation = ({ user }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 h-fit">
      <h3 className="text-base font-bold text-white mb-4">اطلاعات کاربری</h3>
      <div className="space-y-4 text-xs md:text-sm">
        <div className="flex justify-between border-b border-slate-800/60 pb-2">
          <span className="text-slate-400">نام و نام خانوادگی:</span>
          <span className="text-white font-medium">
            {user?.fullName || "ثبت نشده"}
          </span>
        </div>
        <div className="flex justify-between border-b border-slate-800/60 pb-2">
          <span className="text-slate-400">ایمیل:</span>
          <span
            className="text-white font-medium truncate max-w-[160px]"
            title={user?.email}
          >
            {user?.email || "ثبت نشده"}
          </span>
        </div>
        <div className="flex justify-between pt-1">
          <span className="text-slate-400">نقش کاربری:</span>
          <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-xs">
            {user?.role === "student" ? "دانشجو" : "مدرس"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
