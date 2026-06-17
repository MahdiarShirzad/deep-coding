import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";

const TeachersCourse = ({ selectedCourses }) => {
  console.log(selectedCourses);

  if (!selectedCourses?.length) {
    return (
      <div className="mt-8">
        <p className="mb-6 text-2xl font-black">دوره های مدرس</p>
        <p className="text-zinc-400">هنوز دوره‌ای ثبت نشده است.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <p className="mb-6 text-2xl font-black">دوره های مدرس</p>
      <div className="flex items-center flex-wrap justify-between">
        {selectedCourses.map((course) => (
          <CourseCard key={course._id} posts={course} />
        ))}
      </div>
    </div>
  );
};

export default TeachersCourse;
