import { motion, useInView } from "framer-motion";
import TopCategoriesSlider from "./TopCategoriesSlider";
import { useRef } from "react";

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

const sliderVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

const TopCategory = () => {
  const titleRef = useRef(null);
  const sliderRef = useRef(null);

  const titleInView = useInView(titleRef, {
    once: true,
    margin: "-100px",
  });

  const sliderInView = useInView(sliderRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="mt-12 font-iransans max-w-[1320px] max-md:hidden container mx-auto">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <h3 className="text-2xl font-semibold text-center">
          دسته بندی های برتر
        </h3>

        <p className="text-center mt-5 text-slate-600">
          دسته‌بندی‌های برتر را کشف کنید و سفر یادگیری خود را آغاز کنید.
        </p>
      </motion.div>

      <motion.div
        ref={sliderRef}
        initial="hidden"
        animate={sliderInView ? "visible" : "hidden"}
        variants={sliderVariants}
      >
        <TopCategoriesSlider />
      </motion.div>
    </div>
  );
};

export default TopCategory;
