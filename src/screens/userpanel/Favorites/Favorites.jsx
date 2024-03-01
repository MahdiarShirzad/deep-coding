import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard/CourseCard";

const Favorites = () => {
  const courses = useSelector((state) => state.data.courses);

  return (
    <div>
      <p className=" text-2xl font-semibold">مورد علاقه ها</p>
      <div className=" flex flex-wrap gap-10 h-[1000px] mt-20">
        {courses.slice(-5).map((course) => (
          <CourseCard posts={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
