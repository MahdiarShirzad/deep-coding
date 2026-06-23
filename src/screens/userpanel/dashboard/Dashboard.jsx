import React from "react";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { getCourse } from "../../../services/apiCourses";
import UserInformation from "./UserInformation";
import DashboardCoursses from "./DashboardCoursses";

const Dashboard = () => {
  const queryClient = useQueryClient();

  const queryData = queryClient.getQueryData(["user"]);
  const user = queryData?.json ? queryData.json : queryData;

  const userCoursesIds = user?.courses;
  const userWishlistIds = user?.wishlist;

  const uniqueCourseIds = Array.from(
    new Set([...userCoursesIds, ...userWishlistIds]),
  );

  const courseQueries = useQueries({
    queries: uniqueCourseIds.map((id) => ({
      queryKey: ["course", id],
      queryFn: () => getCourse(id),
      enabled: !!id,
    })),
  });

  const isLoading = courseQueries.some((query) => query.isLoading);

  const allFetchedCourses = courseQueries.map((query) => query.data);

  const userCourses = allFetchedCourses.filter((course) =>
    userCoursesIds.includes(course?._id),
  );

  const userWishlist = allFetchedCourses.filter((course) =>
    userWishlistIds.includes(course?._id),
  );

  if (isLoading) {
    return (
      <div className="w-full text-center py-20 text-white font-iransans">
        <p className="animate-pulse">در حال بارگذاری اطلاعات داشبورد...</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 max-md:px-2 font-iransans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs md:text-sm">
              دوره‌های ثبت‌نام شده
            </p>
            <p className="text-2xl font-bold text-white mt-1">
              {userCourses.length} دوره
            </p>
          </div>
          <div className="text-2xl bg-blue-500/10 text-blue-500 p-3 rounded-xl">
            📚
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs md:text-sm">
              لیست علاقه‌مندی‌ها
            </p>
            <p className="text-2xl font-bold text-white mt-1">
              {userWishlist.length} مورد
            </p>
          </div>
          <div className="text-2xl bg-pink-500/10 text-pink-500 p-3 rounded-xl">
            💖
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <DashboardCoursses userCourses={userCourses} />
        <UserInformation user={user} />
      </div>
    </div>
  );
};

export default Dashboard;
