import React, { useEffect, useReducer } from "react";
import TopCoursesCard from "../../components/common/TopCoursesCard/TopCoursesCard";
import AOS from "aos";
import "aos/dist/aos.css";

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

const TopCourses = ({ courses }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);
  const [selectedCategory, dispatch] = useReducer(categoryReducer, "all");

  const categories = ["all", "طراحی وب", "برنامه نویسی", "گرافیک"];

  const setCategory = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const coursesData = courses;

  const filteredCourses =
    selectedCategory === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <div className="mt-24 max-w-[1320px] mx-auto" data-aos="fade-left">
      <div className="flex   max-md:flex-col max-md:gap-8 max-md:justify-start max-md:items-start max-md:pr-6 font-iransans items-center justify-between">
        <div>
          <h3 className="text-3xl font-semibold max-lg:text-xl">
            پرمخاطب ترین دوره ها را جستجو کنید
          </h3>
          <p className="text-sm mt-3 text-slate-600 max-lg:text-xs">
            بیش از 10000 طرح منحصر به فرد در لیست دوره های آنلاین
          </p>
        </div>
        <ul className="flex items-center justify-center gap-3 p-2 rounded-full bg-gray-200 max-lg:text-sm">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setCategory(category)}
              className={`px-4 py-2 rounded-full cursor-pointer ${
                selectedCategory === category ? "bg-white text-[#6440FB]" : ""
              }`}
            >
              {category === "all" ? "همه" : category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap max-xl:mx-auto justify-between mt-10">
        {filteredCourses.slice(0, 6).map((course, index) => (
          <TopCoursesCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
