import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";

const TeachersCourse = ({ selectedCourses }) => {
  if (!selectedCourses?.length) {
    return (
      <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="mb-6 text-2xl font-black text-slate-800">
          دوره‌های مدرس
        </h2>
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center">
          <p className="text-slate-500 text-lg">
            هنوز دوره‌ای برای این مدرس ثبت نشده است.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
      <h2 className="mb-6 text-2xl font-black text-slate-800">دوره‌های مدرس</h2>

      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {selectedCourses.map((course) => (
          <CourseCard key={course._id} posts={course} />
        ))}
      </div>
    </div>
  );
};

export default TeachersCourse;
