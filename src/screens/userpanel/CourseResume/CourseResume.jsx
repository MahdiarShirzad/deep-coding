import React from "react";
import CourseSectionCollapse from "../../CourseDetail/CourseSectionCollapse";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const CourseResume = () => {
  const queryClient = useQueryClient();

  const courses = queryClient.getQueryData(["courses"]);

  const { id } = useParams();
  const selectedCourse = courses?.find((item) => item.id == id);

  const topics = selectedCourse?.topics;

  return (
    <div className=" w-full flex justify-between max-md:flex-col items-start">
      <div className=" max-md:mt-20">
        <img
          className=" w-[300px] rounded-lg"
          src={selectedCourse?.img}
          alt=""
        />
        <h1 className=" text-right text-2xl font-bold mt-6">
          {selectedCourse?.name}
        </h1>
      </div>
      <div className=" w-3/5 max-md:w-5/6 max-md:mt-4">
        <CourseSectionCollapse topics={topics} />
      </div>
    </div>
  );
};

export default CourseResume;
