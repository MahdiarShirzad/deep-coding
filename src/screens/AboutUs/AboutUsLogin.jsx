import React from "react";
import img1 from "../../assets/images/about-1/1.png";
import img2 from "../../assets/images/about-1/2.png";
import img3 from "../../assets/images/about-1/3.png";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { motion } from "framer-motion";

const AboutUsLogin = () => {
  // container برای stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // آیتم‌ها (عکس‌ها)
  const item = {
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

  // متن
  const textVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container max-w-[1320px] mx-auto flex max-lg:flex-wrap-reverse items-center justify-between mt-16 gap-16">
      {/* Image Section */}
      <motion.div
        className="w-3/5 flex items-center gap-7 max-lg:mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item}>
          <motion.img
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl "
            src={img1}
            alt="About us illustration 1"
          />
        </motion.div>

        <div>
          <motion.img
            variants={item}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl mb-7 "
            src={img2}
            alt="About us illustration 2"
          />

          <motion.img
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl "
            src={img3}
            alt="About us illustration 3"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-2/5 max-lg:mx-auto"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-2xl font-bold leading-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          مهارت های خود را با بهترین دوره های آنلاین افزایش دهید
        </motion.p>

        <motion.p
          className="mt-9 text-sm leading-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          می توانید یکی از این دوره های محبوب را در کمتر از یک روز شروع و به
          پایان برسانید - به صورت رایگان!
        </motion.p>

        <motion.p
          className="mt-10 text-sm leading-6 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          اینجا فقط کدنویسی یاد نمی‌گیری، یاد می‌گیری چطور مثل یک دولوپر واقعی
          فکر کنی، مسئله حل کنی و پروژه‌های واقعی بسازی.{" "}
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <Link to="/sign-up" className="block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button>آموزش رایگان را شروع کنید</Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsLogin;
