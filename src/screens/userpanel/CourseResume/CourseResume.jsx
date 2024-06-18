import React from "react";
import img from "../../../assets/images/coursesCards/react.png";
import CourseSectionCollapse from "../../CourseDetail/CourseSectionCollapse";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const CourseResume = () => {
  const queryClient = useQueryClient();

  const courses = queryClient.getQueryData(["courses"]);

  const { id } = useParams();
  const selectedCourse = courses?.find((item) => item.id == id);

  return (
    <div className=" w-full flex justify-between">
      <div className="">
        <img
          className=" w-[300px] rounded-lg"
          src={selectedCourse?.img}
          alt=""
        />
        <h1 className=" text-right text-2xl font-bold mt-6">
          {selectedCourse?.name}
        </h1>
      </div>
      <div className=" w-3/5">
        <CourseSectionCollapse />
      </div>
    </div>
  );
};

export default CourseResume;
