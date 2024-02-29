import React, { useEffect } from "react";
import TopCategoriesSlider from "./TopCategoriesSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const TopCategory = ({ items }) => {
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div
      className="mt-12 font-iransans max-w-[1320px]  container mx-auto"
      data-aos="fade-left"
    >
      <h3 className="text-2xl font-semibold text-center">دسته بندی های برتر</h3>
      <p className="text-center mt-5">
        لورم ایپسوم متن ساختگی با تولید سادگی است.
      </p>
      <div>
        <TopCategoriesSlider uniqueCategories={uniqueCategories} />
      </div>
    </div>
  );
};

export default TopCategory;
