import React from "react";
import CourseListItem from "./CourseListItem";

const CourseList = () => {
  return (
    <div className=" ">
      <p className="text-2xl font-bold">لیست دوره های من</p>
      <div className=" mt-10">
        <div className=" px-10">
          <CourseListItem completionPercentage={90} name="python" />
          <CourseListItem completionPercentage={10} name="java" />
          <CourseListItem completionPercentage={47} name="#c" />
          <CourseListItem completionPercentage={23} name="HTML/CSS" />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
