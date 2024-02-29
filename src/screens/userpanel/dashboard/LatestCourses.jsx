import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard/CourseCard";

const LatestCourses = () => {
  const courses = useSelector((state) => state.data.courses);
  return (
    <div className="">
      <p className=" mt-12 text-xl font-semibold">جدید ترین دوره </p>

      <div className="w-4/6 mt-8 flex items-center gap-7 ">
        {courses.slice(-1).map((course) => (
          <CourseCard posts={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestCourses;
