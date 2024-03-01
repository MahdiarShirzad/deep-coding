import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Herosection from "./Herosection";
import TopCourses from "./TopCourses";
import TopCategory from "./TopCategory";
import Validity from "./Validity";
import Enroll from "./Enroll";
import BlogSection from "./BlogSection";
import ProgramDownloadSection from "./ProgramDownloadSection";

const Landing = ({ courses, blogs }) => {
  useEffect(() => {
    AOS.init({
      duration: 100, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div className=" mx-auto">
      <Herosection />
      <TopCourses courses={courses} />
      <TopCategory items={courses} />
      <>
        <Validity />
        <div className=" w-full flex flex-row-reverse" data-aos="fade-left">
          <svg
            class="img-svg"
            viewBox="0 0 1925 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
              fill="#1A064F"
            ></path>
          </svg>
        </div>
      </>
      <Enroll />
      <BlogSection blogs={blogs} />
      <ProgramDownloadSection />
    </div>
  );
};

export default Landing;
