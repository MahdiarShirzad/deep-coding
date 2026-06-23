import React from "react";
import { Link } from "react-router-dom";

const DashboardCoursses = ({ userCourses }) => {
  return (
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
  );
};

export default DashboardCoursses;
