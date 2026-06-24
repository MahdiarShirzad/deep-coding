import React from "react";
import AdminStats from "./AdminStats";
import QuickActions from "./QuickActions";
import PendingCourses from "./PendingCourses";
import RecentUsers from "./user/RecentUsers.jsx";

const AdminPanelDashboard = () => {
  return (
    <div className="w-full min-h-screen rounded-xl bg-slate-950 text-slate-100 p-4 md:p-8 font-iransans">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            داشبورد مدیریت
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            خوش آمدید! نمای کلی از وضعیت پلتفرم آموزشی شما.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-slate-300 font-medium">
            وضعیت سیستم: نرمال
          </span>
        </div>
      </div>

      <AdminStats />

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <PendingCourses />
        <RecentUsers />
      </div>
    </div>
  );
};

export default AdminPanelDashboard;
