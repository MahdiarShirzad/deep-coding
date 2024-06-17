import React from "react";
import { useParams } from "react-router-dom";

import CourseHero from "./CourseHero";
import WhatYouWillLearn from "./WhatYouWillLearn";
import IntroduceCourse from "./IntroduceCourse";
import CourseRequirements from "./CourseRequirements";
import CourseHeadline from "./CourseHeadline";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";
import { getCurrentUser } from "../../services/apiAuth";

const CourseDetail = ({ teachers }) => {
  const { data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const { id } = useParams();
  const selectedCourse = courses?.find((item) => item.id == id);

  // console.log(selectedCourse);

  return (
    <div className=" my-36">
      <CourseHero
        selectedCourse={selectedCourse}
        teachers={teachers}
        user={user}
      />
      <WhatYouWillLearn />
      <IntroduceCourse selectedCourse={selectedCourse} />
      <CourseRequirements />
      <CourseHeadline />
    </div>
  );
};

export default CourseDetail;
