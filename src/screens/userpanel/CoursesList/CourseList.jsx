import React from "react";
import CourseListItem from "./CourseListItem";

const CourseList = () => {
  return (
    <div className=" border">
      <p className="text-2xl font-bold">لیست دوره های من</p>
      <div className=" mt-10">
        <div className=" px-10">
          <CourseListItem />
          <CourseListItem />
          <CourseListItem />
          <CourseListItem />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
