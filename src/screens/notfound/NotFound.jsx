import React from "react";
import { motion } from "framer-motion";
import notfound from "../../assets/images/404/404.png";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 30, rotate: -4, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
  hover: { scale: 1.03, rotate: 1, transition: { duration: 0.25 } },
  tap: { scale: 0.98, transition: { duration: 0.08 } },
};

const buttonHover = {
  whileHover: {
    scale: 1.03,
    y: -2,
    boxShadow: "0 10px 25px rgba(2,6,23,0.18)",
  },
  whileTap: { scale: 0.97 },
};

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 font-iransans text-center md:text-right bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Image container */}
      <motion.div
        className="w-full flex justify-center md:justify-end md:w-1/2 order-1 md:order-2"
        variants={imageVariants}
      >
        <motion.img
          src={notfound}
          alt="404 not found"
          className="max-w-[900px] w-full max-w-full h-auto rounded-[30px] shadow-2xl object-contain"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          loading="lazy"
          aria-hidden={false}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 max-w-lg order-2 md:order-1"
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl text-sky-900 font-bold leading-snug"
          variants={textItem}
        >
          صفحه مورد نظر پیدا نشد
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-600 text-sm sm:text-base"
          variants={textItem}
        >
          شاید آدرس اشتباه است یا این صفحه حذف شده است.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start"
          variants={containerVariants}
        >
          <motion.div variants={textItem}>
            <Link to="/">
              <motion.button
                className="bg-blue-950 text-white px-6 py-3 rounded-lg"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
                aria-label="بازگشت به صفحه اصلی"
              >
                صفحه اصلی
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={textItem}>
            <Link to="/courses">
              <motion.button
                className="border border-blue-950 text-blue-950 px-6 py-3 rounded-lg"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
                aria-label="رفتن به دوره‌ها"
              >
                دوره‌ها
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
