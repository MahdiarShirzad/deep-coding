import React from "react";
import AboutUsLogin from "./AboutUsLogin";
import HowWeWorkSection from "./HowWeWorkSection";
import LearningJourney from "./LearningJourney";
import StudentsComments from "./StudentsComments";

const AboutUs = () => {
  return (
    <div className="  mx-auto font-iransans">
      <div>
        <p className=" mt-36 text-center text-3xl font-semibold">درباره ما</p>
        <p className=" text-center mt-4 text-gray-700">
          ما ماموریت داریم دوره‌های جذاب و مدیریت‌شده را با قیمتی مناسب ارائه
          دهیم.
        </p>
      </div>
      <AboutUsLogin />
      <HowWeWorkSection />
      <LearningJourney />
      <StudentsComments />
    </div>
  );
};

export default AboutUs;
