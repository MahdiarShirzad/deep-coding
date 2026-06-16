import React from "react";
import { useParams } from "react-router-dom";

import CourseHero from "./CourseHero";
import WhatYouWillLearn from "./WhatYouWillLearn";
import IntroduceCourse from "./IntroduceCourse";
import CourseRequirements from "./CourseRequirements";
import CourseHeadline from "./CourseHeadline";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../services/apiCourses";

const CourseDetail = () => {
  const { id } = useParams();

  const {
    data: course,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourse(id),
    enabled: !!id,
  });

  const selectedCourse = course;
  console.log("course: ", selectedCourse);

  return (
    <div className=" my-36">
      <CourseHero
        selectedCourse={selectedCourse}
        teachers={selectedCourse?.teacher}
      />
      <WhatYouWillLearn selectedCourse={selectedCourse} />
      <IntroduceCourse selectedCourse={selectedCourse} />
      <CourseRequirements selectedCourse={selectedCourse} />
      <CourseHeadline selectedCourse={selectedCourse} />
    </div>
  );
};

export default CourseDetail;
