import React from "react";
import img from "../../../assets/images/coursesCards/react.png";
import CourseSectionCollapse from "../../CourseDetail/CourseSectionCollapse";

const CourseResume = () => {
  return (
    <div className=" w-full flex justify-between">
      <div className="">
        <img className=" w-[300px] rounded-lg" src={img} alt="" />
        <h1 className=" text-right text-2xl font-bold mt-6">
          دوره آموزش Python
        </h1>
      </div>
      <div className=" w-3/5">
        <CourseSectionCollapse />
      </div>
    </div>
  );
};

export default CourseResume;
