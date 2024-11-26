import React, { useReducer, useRef } from "react";
import TopCoursesCard from "../../components/common/TopCoursesCard/TopCoursesCard";
import { motion, useInView } from "framer-motion";

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};
const titleVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
};

const filterVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
};

const cardVariants = (isEven) => ({
  hidden: {
    opacity: 0,
    x: isEven ? 90 : -90,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      // delay: 0.25,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
});

const TopCourses = ({ courses }) => {
  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const cardRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const filterInView = useInView(filterRef, { once: true });
  const cardInView = useInView(cardRef, { once: true });

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
    <div className="mt-24 max-w-[1320px] mx-auto">
      <div className="flex   max-md:flex-col max-md:gap-8 max-md:justify-start max-md:items-start max-md:pr-6 font-iransans items-center justify-between">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h3 className="text-3xl font-semibold max-lg:text-xl">
            پرمخاطب ترین دوره ها را جستجو کنید
          </h3>
          <p className="text-sm mt-3 text-slate-600 max-lg:text-xs">
            مجموعه‌ای بی‌نظیر از دوره‌های آنلاین برای یادگیری مهارت‌های جدید و
            پیشرفت در مسیر حرفه‌ای
          </p>
        </motion.div>
        <motion.ul
          ref={filterRef}
          initial="hidden"
          animate={filterInView ? "visible" : "hidden"}
          variants={filterVariants}
          className="flex items-center justify-center gap-3 p-2 rounded-full bg-gray-200 max-lg:text-sm"
        >
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
        </motion.ul>
      </div>
      <div className="flex flex-wrap max-xl:mx-auto justify-between mt-10">
        {filteredCourses.slice(0, 6).map((course, index) => (
          <motion.div
            ref={cardRef}
            key={index}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            variants={cardVariants(index % 2 === 0)}
          >
            <TopCoursesCard key={index} course={course} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
