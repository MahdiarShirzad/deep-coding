import React from "react";
import img1 from "../../assets/images/home-3/works/1.svg";
import img2 from "../../assets/images/home-3/works/2.svg";
import img3 from "../../assets/images/home-3/works/3.svg";
import line1 from "../../assets/images/misc/lines/1.svg";
import line2 from "../../assets/images/misc/lines/2.svg";
import { motion } from "framer-motion";

const HowWeWorkSection = () => {
  // container stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // each step
  const stepVariant = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  // line animation
  const lineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: -1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="mt-28 mb-24 container max-w-[1320px] mx-auto">
      {/* Title */}
      <motion.p
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ما چگونه کار میکنیم؟
      </motion.p>

      <motion.p
        className="text-center mt-6 text-gray-600"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        مسیر یادگیری تو فقط در 3 قدم ساده
      </motion.p>

      {/* Steps */}
      <motion.div
        className="flex items-center justify-between mt-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Step 1 */}
        <motion.div
          variants={stepVariant}
          className="flex items-center justify-center flex-col w-[200px]"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex items-center justify-center p-8 rounded-full bg-gray-100 relative shadow-md"
          >
            <motion.img
              src={img1}
              alt="Step 1"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            <motion.div
              className="bg-[#1A064F] text-white p-2 px-3 text-sm rounded-full absolute top-0 right-0"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              01
            </motion.div>
          </motion.div>

          <p className="text-center mt-5 text-sm">
            مسیر یادگیری مناسب خودت رو انتخاب کن
          </p>
        </motion.div>

        {/* Line */}
        <motion.img
          variants={lineVariant}
          src={line2}
          alt="line"
          style={{ originX: 1 }}
        />

        {/* Step 2 */}
        <motion.div
          variants={stepVariant}
          className="flex items-center justify-center flex-col w-[200px]"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex items-center justify-center p-8 rounded-full bg-gray-100 relative shadow-md"
          >
            <motion.img
              src={img2}
              alt="Step 2"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            />

            <motion.div
              className="bg-[#1A064F] text-white p-2 px-3 text-sm rounded-full absolute top-0 right-0"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              02
            </motion.div>
          </motion.div>

          <p className="text-center mt-5 text-sm">
            ثبت‌نام کن و به دوره دسترسی بگیر
          </p>
        </motion.div>

        {/* Line */}
        <motion.img
          variants={lineVariant}
          src={line1}
          alt="line"
          style={{ originX: 1 }}
        />

        {/* Step 3 */}
        <motion.div
          variants={stepVariant}
          className="flex items-center justify-center flex-col w-[200px]"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex items-center justify-center p-8 rounded-full bg-gray-100 relative shadow-md"
          >
            <motion.img
              src={img3}
              alt="Step 3"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            />

            <motion.div
              className="bg-[#1A064F] text-white p-2 px-3 text-sm rounded-full absolute top-0 right-0"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              03
            </motion.div>
          </motion.div>

          <p className="text-center mt-5 text-sm">
            شروع کن و مهارتتو واقعی بساز 🚀
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HowWeWorkSection;
