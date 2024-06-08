import React from "react";
import { useParams } from "react-router-dom";

import CourseHero from "./CourseHero";
import WhatYouWillLearn from "./WhatYouWillLearn";
import IntroduceCourse from "./IntroduceCourse";
import CourseRequirements from "./CourseRequirements";
import CourseHeadline from "./CourseHeadline";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";

const CourseDetail = ({ items, teachers }) => {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const { id } = useParams();
  const selectedCourse = courses.find((item) => item.id == id);

  console.log(selectedCourse);

  return (
    <div className=" my-36">
      <CourseHero selectedCourse={selectedCourse} teachers={teachers} />
      <WhatYouWillLearn />
      <IntroduceCourse selectedCourse={selectedCourse} />
      <CourseRequirements />
      <CourseHeadline />
    </div>
  );
};

export default CourseDetail;
