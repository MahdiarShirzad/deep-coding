import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../components/CourseCard/CourseCard";

const LatestCourses = () => {
  const courses = useSelector((state) => state.data.courses);
  return (
    <>
      <p className=" mt-12 text-xl font-semibold">جدید ترین دوره ها</p>

      <div className="w-4/6 mt-4 flex items-center gap-7 ">
        {courses.slice(-2).map((course) => (
          <CourseCard posts={course} key={course.id} />
        ))}
      </div>
    </>
  );
};

export default LatestCourses;
