import React from "react";
import img1 from "../../assets/images/about-1/1.png";
import img2 from "../../assets/images/about-1/2.png";
import img3 from "../../assets/images/about-1/3.png";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { motion } from "framer-motion";

const AboutUsLogin = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 15,
      },
    },
  };

  return (
    <div className="container max-w-[1320px] mx-auto flex max-lg:flex-wrap-reverse items-center justify-between mt-12 gap-14">
      {/* Image Section */}
      <motion.div
        className="w-1/2 flex items-center gap-7 max-lg:mx-auto"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <img src={img1} alt="About us illustration 1" />
        </div>
        <div>
          <img className="mb-7" src={img2} alt="About us illustration 2" />
          <img src={img3} alt="About us illustration 3" />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-1/2 max-lg:mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-2xl font-medium">
          مهارت های خود را با بهترین دوره های آنلاین افزایش دهید
        </p>
        <p className="mt-9 text-sm leading-6">
          می توانید یکی از این دوره های محبوب را در کمتر از یک روز شروع و به
          پایان برسانید - به صورت رایگان! لیست زیر را بررسی کنید. دوره را به
          صورت رایگان شرکت کنید.
        </p>
        <p className="mt-10 text-sm leading-6 text-gray-600">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <Link to="/sign-up" className="block mt-20">
          <Button>آموزش رایگان را شروع کنید</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUsLogin;
