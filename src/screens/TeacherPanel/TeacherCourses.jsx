import React from "react";
import { Link } from "react-router-dom";

const TeacherCourses = ({ teacherCourses }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-white">مدیریت دوره‌های شما</h3>
        <Link
          to="/admin/add-course"
          className="text-xs bg-violet-600 text-white px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors"
        >
          ＋ دوره جدید
        </Link>
      </div>

      {teacherCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-3">
          {teacherCourses.map((course) => (
            <div
              key={course._id}
              className="bg-slate-800/40 border border-slate-700/30 p-4 rounded-xl flex justify-between items-center max-sm:flex-col max-sm:items-start gap-4"
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
                  <div className="flex gap-4 mt-1 text-xs text-slate-400">
                    <span>👥 {course.studentsCount || 0} دانشجو</span>
                    <span className="text-emerald-400">
                      💰 {course.price?.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              </div>
              <Link
                to={`/admin/courses/${course._id}`}
                className="bg-slate-700 hover:bg-slate-600 text-white text-xs px-4 py-2 rounded-lg text-center max-sm:w-full transition-colors whitespace-nowrap"
              >
                مدیریت دوره
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border border-dashed border-slate-800 rounded-xl bg-slate-900/50">
          <p className="text-slate-400 text-sm">هنوز دوره‌ای ثبت نکرده‌اید.</p>
        </div>
      )}
    </div>
  );
};

export default TeacherCourses;
