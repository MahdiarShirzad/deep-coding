import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import defaultAvatar from "../../assets/images/userpanel/avatar.jpg";

const UserPanelAvatar = () => {
  const queryClient = useQueryClient();
  const queryData = queryClient.getQueryData(["user"]);
  const user = queryData?.json ? queryData.json : queryData;

  const isTeacher = user?.role === "teacher";

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#111723] via-[#1f293d] to-[#111723] border-b border-slate-800/80 py-8 md:py-12 px-4">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-violet-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
        <div className="relative group p-1 rounded-full bg-gradient-to-tr from-cyan-500 via-slate-700 to-violet-500 shadow-2xl shadow-cyan-950/50 active:scale-95 transition-transform">
          <img
            className="w-[100px] h-[100px] md:w-[115px] md:h-[115px] rounded-full object-cover border-4 border-[#1f293d]"
            src={user?.avatar || defaultAvatar}
            alt={user?.fullName || "User"}
          />
          <span className="absolute bottom-2 left-2 w-4 h-4 bg-emerald-500 border-4 border-[#1f293d] rounded-full animate-pulse" />
        </div>

        <div className="text-center md:text-right space-y-2">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-wide">
              {user?.fullName}
              <span className="text-slate-400 font-medium text-lg md:text-xl">
                عزیز؛
              </span>
            </h1>

            <span
              className={`px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide border backdrop-blur-md ${
                isTeacher
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
              }`}
            >
              {isTeacher ? "مدرس آکادمی" : "دانشجو "}
            </span>
          </div>

          <p className="text-slate-400 text-xs md:text-sm font-medium flex items-center justify-center md:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
            خوش آمدید! به پنل کاربری خود دسترسی کامل دارید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPanelAvatar;
