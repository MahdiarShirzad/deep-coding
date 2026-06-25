import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import TeacherStats from "./TeacherStats";
import RevenueChart from "./RevenueChart";
import RecentReviews from "./RecentReviews";
import UserInformation from "../userpanel/dashboard/UserInformation";
import { getCoursesByteacher } from "../../services/apiTeachers";
import { getTeacherFinancialData } from "../../services/apiFinancial";

const TeacherDashboard = () => {
  const queryClient = useQueryClient();
  const queryData = queryClient.getQueryData(["user"]);
  const user = queryData?.json ? queryData.json : queryData;

  const { data: coursesData } = useQuery({
    queryKey: ["teacher-courses", user?._id],
    queryFn: () => getCoursesByteacher(user._id),
    enabled: !!user?._id,
  });

  const { data: financialRes } = useQuery({
    queryKey: ["teacher-financial", user?._id],
    queryFn: getTeacherFinancialData,
    enabled: !!user?._id,
  });

  const courses = coursesData?.data?.courses || [];
  const financialData = financialRes?.data;

  return (
    <div className="w-full px-6 max-md:px-3 font-iransans pb-10">
      <div className="relative overflow-hidden bg-slate-900 border border-slate-800/60 rounded-2xl p-6 mb-8 mt-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            پنل مدیریت مدرس
            <span className="text-violet-500 text-sm font-medium border border-violet-500/30 bg-violet-500/5 px-2.5 py-0.5 rounded-md">
              Deep Coding
            </span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm mt-1.5">
            خوش آمدید،
            <span className="text-white font-semibold mx-1">
              {user?.fullName || "مدرس گرامی"}
            </span>
            👋؛ در این بخش وضعیت درآمد و دوره‌های شما یکپارچه رصد می‌شود.
          </p>
        </div>

        <div className="text-xs text-slate-400 bg-slate-800/40 border border-slate-800 px-4 py-2 rounded-xl self-end md:self-center">
          آخرین بروزرسانی دیتابیس:
          <span className="text-cyan-400 font-mono mr-1">همین الان</span>
        </div>
      </div>

      <div className="mb-8">
        <TeacherStats courses={courses} summary={financialData?.summary} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <RevenueChart monthlyIncome={financialData?.monthlyIncome} />
        </div>

        <div className="space-y-8">
          <div className="shadow-lg shadow-slate-950/20">
            <UserInformation user={user} />
          </div>
          <RecentReviews />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
