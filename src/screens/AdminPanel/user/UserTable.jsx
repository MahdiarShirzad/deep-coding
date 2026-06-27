import React from "react";

const UserTable = ({ users, onRoleChange, onDeleteClick }) => {
  return (
    <div className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead />
          <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs">
            <th className="p-4 font-bold">کاربر</th>
            <th className="p-4 font-bold">ایمیل</th>
            <th className="p-4 font-bold">تاریخ عضویت</th>
            <th className="p-4 font-bold">نقش فعلی</th>
            <th className="p-4 font-bold">تغییر سطح دسترسی</th>
            <th className="p-4 font-bold text-left">عملیات</th>
          </tr>
        </table>

        <div className="divide-y divide-slate-800/60">
          {users?.map((user) => (
            <div
              key={user.id}
              className="flex flex-row items-center justify-between p-4 hover:bg-slate-800/20 transition-colors text-xs md:text-sm"
            >
              <div className="flex items-center gap-3 min-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center font-bold text-base shadow-inner">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.fullName}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    user.fullName.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">{user.fullName}</h4>
                  <span className="text-[10px] md:hidden text-slate-500">
                    {user.email}
                  </span>
                </div>
              </div>

              <div className="hidden md:block text-slate-400 font-medium dir-ltr text-left min-w-[180px]">
                {user.email}
              </div>

              <div className="hidden lg:block text-slate-500 text-xs min-w-[100px]">
                {user.createdAt}
              </div>

              <div className="min-w-[90px]">
                {user.role === "admin" && (
                  <span className="bg-rose-500/10 text-rose-400 px-2 py-1 rounded-md text-[10px] font-bold border border-rose-500/20">
                    مدیر سیستم
                  </span>
                )}
                {user.role === "teacher" && (
                  <span className="bg-violet-500/10 text-violet-400 px-2 py-1 rounded-md text-[10px] font-bold border border-violet-500/20">
                    مدرس
                  </span>
                )}
                {user.role === "student" && (
                  <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md text-[10px] font-bold border border-emerald-500/20">
                    دانشجو
                  </span>
                )}
              </div>

              <div className="min-w-[130px]">
                <select
                  value={user.role}
                  onChange={(e) => onRoleChange(user.id, e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-slate-300 text-[11px] rounded-lg px-2 py-1.5 focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="student">دانشجو</option>
                  <option value="teacher">مدرس</option>
                  <option value="admin">مدیر</option>
                </select>
              </div>

              <div className="text-left">
                <button
                  onClick={() => onDeleteClick(user)}
                  className="p-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white rounded-xl transition-all duration-200 border border-rose-500/10"
                  title="حذف کاربر"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {users?.length === 0 && (
          <div className="text-center text-slate-500 py-10 text-xs">
            کاربری با این مشخصات یافت نشد.
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
