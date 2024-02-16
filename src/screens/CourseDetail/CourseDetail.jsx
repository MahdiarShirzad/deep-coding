import React from "react";
import CourseHero from "./CourseHero";
import WhatYouWillLearn from "./WhatYouWillLearn";
import IntroduceCourse from "./IntroduceCourse";
import CourseRequirements from "./CourseRequirements";
import CourseHeadline from "./CourseHeadline";

const CourseDetail = () => {
  return (
    <div className=" my-36">
      <CourseHero />
      <WhatYouWillLearn />
      <IntroduceCourse />
      <CourseRequirements />
      <CourseHeadline />
    </div>
  );
};

export default CourseDetail;
