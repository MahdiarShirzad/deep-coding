import React from "react";
import CourseListItem from "./CourseListItem";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { getCourse } from "../../../services/apiCourses";

const CourseList = () => {
  const queryClient = useQueryClient();

  const queryData = queryClient.getQueryData(["user"]);
  const user = queryData?.json ? queryData.json : queryData;

  const userCoursesIds = user?.courses || [];

  const courseQueries = useQueries({
    queries: userCoursesIds.map((id) => ({
      queryKey: ["course", id],
      queryFn: () => getCourse(id),
      enabled: !!id,
    })),
  });

  const isLoading = courseQueries.some((query) => query.isLoading);

  if (isLoading) {
    return (
      <div className="text-center p-8 text-slate-400">
        در حال بارگذاری دوره‌ها...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#161e2e] text-slate-100 p-4 md:p-8 rounded-xl border border-slate-900">
      <div className="mb-8 border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-white">
            دوره‌های من
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            لیست دوره‌هایی که در آن‌ها ثبت‌نام کرده‌اید
          </p>
        </div>
        <span className="bg-violet-500/10 text-violet-400 border border-violet-500/20 px-3 py-1 rounded-full text-xs font-medium">
          {courseQueries.length} دوره فعال
        </span>
      </div>

      <div className="space-y-6">
        {courseQueries.map((queryResult) => {
          if (queryResult.isSuccess && queryResult.data) {
            const courseData = queryResult.data;
            return <CourseListItem key={courseData._id} course={courseData} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CourseList;
