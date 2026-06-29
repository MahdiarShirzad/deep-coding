import React, { useRef, useState } from "react";
import TopCoursesCard from "../../components/common/TopCoursesCard/TopCoursesCard";
import { motion, useInView } from "framer-motion";
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
    <div className="mt-24 max-w-[1320px] mx-auto px-4">
      <div
        className="
          flex items-center justify-between
          max-md:flex-col
          max-md:gap-8
          max-md:justify-start
          max-md:items-start
          max-md:pr-0 {/* اصلاح پدینگ */}
          font-iransans
        "
      ></div>
      <motion.div
        ref={cardsRef}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        variants={cardsContainerVariants}
        className="
          grid grid-cols-1 sm:grid-cols-2 
          gap-8 
          mt-10
          max-xl:mx-auto
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
