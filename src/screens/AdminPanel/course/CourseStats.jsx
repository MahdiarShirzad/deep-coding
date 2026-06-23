import React from "react";

const CourseStats = React.memo(({ totalCourses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-[#111827] border border-cyan-500/10 p-5 rounded-xl shadow-xl">
        <p className="text-slate-400 text-sm font-medium">تعداد کل دوره‌ها</p>
        <h3 className="text-3xl font-bold text-cyan-400 mt-2">
          {totalCourses} دوره
        </h3>
      </div>
    </div>
  );
});

CourseStats.displayName = "CourseStats";
export default CourseStats;
