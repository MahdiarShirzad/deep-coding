import { motion, useInView } from "framer-motion";
import TopCategoriesSlider from "./TopCategoriesSlider";
import { useRef } from "react";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
};

const sliderVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
};
const TopCategory = ({ items }) => {
  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const sliderInView = useInView(sliderRef, { once: true });

  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <div className="mt-12 font-iransans max-w-[1320px] max-md:hidden  container mx-auto">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <h3 className="text-2xl font-semibold text-center">
          دسته بندی های برتر
        </h3>
        <p className="text-center mt-5">
          دسته‌بندی‌های برتر را کشف کنید و سفر یادگیری خود را آغاز کنید.
        </p>
      </motion.div>
      <motion.div
        ref={sliderRef}
        initial="hidden"
        animate={sliderInView ? "visible" : "hidden"}
        variants={sliderVariants}
      >
        <TopCategoriesSlider uniqueCategories={uniqueCategories} />
      </motion.div>
    </div>
  );
};

export default TopCategory;
