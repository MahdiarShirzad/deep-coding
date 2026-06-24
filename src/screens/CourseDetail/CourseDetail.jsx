import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../services/apiCourses";

import CourseHero from "./CourseHero";
import WhatYouWillLearn from "./WhatYouWillLearn";
import IntroduceCourse from "./IntroduceCourse";
import CourseRequirements from "./CourseRequirements";
import CourseHeadline from "./CourseHeadline";
import CoursePreview from "./CoursePreview";

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

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center font-iransans">
        در حال بارگذاری...
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex items-center justify-center font-iransans text-red-500">
        خطا در دریافت اطلاعات دوره
      </div>
    );

  return (
    <div
      className="font-iransans bg-slate-50 min-h-screen pb-20 mt-20"
      dir="rtl"
    >
      <div className="bg-slate-900 text-white">
        <CourseHero selectedCourse={selectedCourse} />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-10 relative ">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10 lg:pl-8">
            <WhatYouWillLearn selectedCourse={selectedCourse} />
            <IntroduceCourse selectedCourse={selectedCourse} />
            <CourseRequirements selectedCourse={selectedCourse} />
            <CourseHeadline selectedCourse={selectedCourse} />
          </div>

          <div className="w-full lg:w-[380px] shrink-0 relative">
            <div className="sticky top-28 lg:-mt-52 z-10 ">
              <CoursePreview selectedCourse={selectedCourse} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
