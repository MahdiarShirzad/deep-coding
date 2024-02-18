import React from "react";
import { useParams } from "react-router-dom";

import CourseHero from "./CourseHero";
import WhatYouWillLearn from "./WhatYouWillLearn";
import IntroduceCourse from "./IntroduceCourse";
import CourseRequirements from "./CourseRequirements";
import CourseHeadline from "./CourseHeadline";

const CourseDetail = ({ items, teachers }) => {
  const { id } = useParams();
  const selectedCourse = items.find((item) => item.id === id);

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
