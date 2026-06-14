import React, { useRef, useState } from "react";
import TopCoursesCard from "../../components/common/TopCoursesCard/TopCoursesCard";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";
import TopCoursesCardSkeleton from "../../components/TopCoursesCardSkeleton/TopCoursesCardSkeleton";

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

const categories = ["all", "برنامه نویسی وب", "دیتا ساینس", "DevOps و Cloud"];

const TopCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["courses", selectedCategory],
    queryFn: () =>
      getCourses({
        limit: 4,
        category: selectedCategory !== "all" ? selectedCategory : undefined,
        sort: "-ratingsAverage",
      }),
  });

  const courses = data?.courses ?? [];
  const skeletons = Array.from({ length: 4 });

  console.log("DATA:", data);

  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const cardRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const filterInView = useInView(filterRef, { once: true });
  const cardInView = useInView(cardRef, { once: true });

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
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full cursor-pointer transition ${
                selectedCategory === cat
                  ? "bg-white text-[#6440FB]"
                  : "text-gray-600 hover:bg-white/50"
              }`}
            >
              {cat === "all" ? "همه" : cat}
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="flex flex-wrap max-xl:mx-auto justify-between mt-10">
        {isLoading
          ? skeletons.map((_, i) => <TopCoursesCardSkeleton key={i} />)
          : courses.map((course, i) => (
              <motion.div key={course._id}>
                <TopCoursesCard course={course} />
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default TopCourses;
