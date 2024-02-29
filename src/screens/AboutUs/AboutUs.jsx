import React, { useEffect } from "react";
import AboutUsLogin from "./AboutUsLogin";
import HowWeWorkSection from "./HowWeWorkSection";
import LearningJourney from "./LearningJourney";
import StudentsComments from "./StudentsComments";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div className="  mx-auto font-iransans">
      <div data-aos="fade-left">
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
