import React from "react";

const RecentUsers = () => {
  const users = [
    {
      id: 1,
      name: "سارا محمدی",
      email: "sara@test.com",
      role: "student",
      date: "۱۰ دقیقه پیش",
    },
    {
      id: 2,
      name: "رضا کریمی",
      email: "reza.k@test.com",
      role: "teacher",
      date: "۱ ساعت پیش",
    },
    {
      id: 3,
      name: "امیرحسین عباسی",
      email: "amir@test.com",
      role: "student",
      date: "۳ ساعت پیش",
    },
    {
      id: 4,
      name: "نگین رستمی",
      email: "negin@test.com",
      role: "student",
      date: "دیروز",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl flex flex-col h-full">
      <div className="flex justify-between items-center mb-5 border-b border-slate-800 pb-4">
        <h3 className="text-sm font-bold text-white">تازه‌ترین ثبت‌نام‌ها</h3>
        <button className="text-[10px] text-violet-400 hover:text-violet-300">
          مدیریت کاربران
        </button>
      </div>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-2 hover:bg-slate-800/40 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-sm font-bold border border-slate-700">
                {user.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">
                  {user.name}
                </h4>
                <p className="text-[10px] text-slate-500">{user.email}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              {user.role === "teacher" ? (
                <span className="bg-violet-500/10 text-violet-400 text-[9px] px-2 py-0.5 rounded border border-violet-500/20">
                  مدرس
                </span>
              ) : (
                <span className="bg-cyan-500/10 text-cyan-400 text-[9px] px-2 py-0.5 rounded border border-cyan-500/20">
                  دانشجو
                </span>
              )}
              <span className="text-[9px] text-slate-600">{user.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUsers;
