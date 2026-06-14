import React, { useRef, useState } from "react";
import TopCoursesCard from "../../components/common/TopCoursesCard/TopCoursesCard";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";
import TopCoursesCardSkeleton from "../../components/TopCoursesCardSkeleton/TopCoursesCardSkeleton";

const categories = ["all", "برنامه نویسی وب", "دیتا ساینس", "DevOps و Cloud"];

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const filterVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

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

  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const cardsRef = useRef(null);

  const titleInView = useInView(titleRef, {
    once: true,
    margin: "-100px",
  });

  const filterInView = useInView(filterRef, {
    once: true,
    margin: "-100px",
  });

  const cardsInView = useInView(cardsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="mt-24 max-w-[1320px] mx-auto">
      <div
        className="
          flex items-center justify-between
          max-md:flex-col
          max-md:gap-8
          max-md:justify-start
          max-md:items-start
          max-md:pr-6
          font-iransans
        "
      >
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
          className="
            flex items-center justify-center gap-3
            p-2 rounded-full bg-gray-200
            max-lg:text-sm
          "
        >
          {categories.map((cat) => (
            <motion.li
              key={cat}
              layout
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() => setSelectedCategory(cat)}
              className={`
    px-4 py-2 rounded-full cursor-pointer transition-all duration-300
    ${
      selectedCategory === cat
        ? "bg-white text-[#6440FB] shadow-sm"
        : "text-gray-600 hover:bg-white/60"
    }
  `}
            >
              {cat === "all" ? "همه" : cat}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        ref={cardsRef}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        variants={cardsContainerVariants}
        className="
    flex flex-wrap
    max-xl:mx-auto
    justify-between
    mt-10
    gap-y-8
  "
      >
        {isLoading
          ? skeletons.map((_, i) => <TopCoursesCardSkeleton key={i} />)
          : courses.map((course) => (
              <motion.div
                key={course._id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <TopCoursesCard course={course} />
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
};

export default TopCourses;
