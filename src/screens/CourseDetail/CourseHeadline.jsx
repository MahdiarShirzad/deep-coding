import React from "react";
import CourseSectionCollapse from "./CourseSectionCollapse";

const CourseHeadline = () => {
  return (
    <div className=" container max-w-[1320px] mx-auto font-iransans mt-14 max-xl:px-8 ">
      <div className=" max-w-[800px]">
        <p className=" text-2xl font-bold mb-8">سرفصل‌های دوره</p>
        <CourseSectionCollapse />
      </div>
    </div>
  );
};

export default CourseHeadline;
