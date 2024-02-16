import React, { useEffect, useState } from "react";
import imgCourse from "../../assets/images/coursesCards/5.png";

const CoursePreview = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 170;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        !isScrolled ? `absolute top-14 left-14` : "fixed top-20 left-[155px]"
      } rounded-lg bg-white text-black w-[350px] shadow-md shadow-gray-100 z-[300] transition-none`}
    >
      <div>
        <img className=" w-full rounded-lg" src={imgCourse} alt="" />
      </div>
      <div className=" flex mt-3 gap-2 text-xl font-medium mr-3">
        <p>2334</p>
        <p>تومان</p>
      </div>
      <button className=" bg-violet-600 mt-3 w-[300px] block mx-auto py-3 rounded-md text-white">
        افزودن به سبد خرید
      </button>
      <div className=" mr-3 mt-8 mb-6">
        <p>این دوره شامل:</p>
        <ul className=" text-[13px] mt-2 mr-2">
          <li>40 ساعت آموزش</li>
          <li>20 تمرین</li>
          <li>گواهی پایان دوره</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursePreview;
