import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getLastUsers } from "../../../services/apiAuth";

const RecentUsers = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["lastUsers"],
    queryFn: getLastUsers,
  });

  console.log(users);

  return (
    <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl flex flex-col h-full">
      <div className="flex justify-between items-center mb-5 border-b border-slate-800 pb-4">
        <h3 className="text-sm font-bold text-white">تازه‌ترین ثبت‌نام‌ها</h3>
        <button className="text-[10px] text-violet-400 hover:text-violet-300">
          مدیریت کاربران
        </button>
      </div>

      <div className="space-y-3">
        {users?.map((user) => (
          <div
            key={user._id}
            className="flex items-center justify-between p-2 hover:bg-slate-800/40 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-sm font-bold border border-slate-700 overflow-hidden">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.fullName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{user.fullName?.charAt(0).toUpperCase()}</span>
                )}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">
                  {user.fullName}
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
              <span className="text-[9px] text-slate-600">
                {new Date(user.createdAt).toLocaleDateString("fa-IR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUsers;
