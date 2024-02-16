import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";

const TeachersCourse = () => {
  return (
    <div className="mt-8">
      <p className="mb-6 text-2xl font-black">دوره های مدرس</p>
      <div className="flex items-center flex-wrap justify-between">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default TeachersCourse;
