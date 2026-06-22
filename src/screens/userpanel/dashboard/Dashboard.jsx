import React from "react";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCourse } from "../../../services/apiCourses";

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
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-lg font-bold text-white mb-4">دوره‌های شما</h3>

          {userCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {userCourses.map((course) => (
                <div
                  key={course._id}
                  className="bg-slate-800/50 border border-slate-700/40 p-4 rounded-xl flex justify-between items-center max-sm:flex-col max-sm:items-start gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={course.img}
                      alt={course.name}
                      className="w-16 h-10 object-cover rounded-md hidden sm:block"
                    />
                    <div>
                      <h4 className="text-white font-medium text-sm md:text-base">
                        {course.name}
                      </h4>
                      <p className="text-slate-400 text-xs mt-1">
                        مدرس: {course.teacher?.fullName || "مدرس دیپ کودینگ"}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/user-panel/my-courses`}
                    className="bg-violet-600 hover:bg-violet-700 text-white text-xs px-4 py-2 rounded-lg text-center max-sm:w-full transition-colors whitespace-nowrap"
                  >
                    ورود به کلاس
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl bg-slate-900/50">
              <p className="text-slate-400 text-sm">
                هنوز در هیچ دوره‌ای ثبت‌نام نکرده‌اید! 🧩
              </p>
              <Link
                className="bg-violet-600 hover:bg-violet-700 text-white text-xs px-5 py-2.5 rounded-xl inline-block mt-5 transition-colors"
                to="/courses"
              >
                مشاهده دوره‌های دیپ کودینگ
              </Link>
            </div>
          )}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 h-fit">
          <h3 className="text-base font-bold text-white mb-4">
            اطلاعات کاربری
          </h3>
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
      </div>
    </div>
  );
};

export default Dashboard;
