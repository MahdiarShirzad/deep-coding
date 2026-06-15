import React from "react";
import img1 from "../../assets/images/home-5/learning/1.svg";
import img2 from "../../assets/images/home-5/learning/2.svg";
import img3 from "../../assets/images/home-5/learning/3.svg";
import img4 from "../../assets/images/home-5/learning/4.svg";
import { motion } from "framer-motion";

const LearningJourney = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
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

  return (
    <div className="relative bg-gradient-to-r from-[#282664] to-[#1A064F] w-full py-28 overflow-hidden">
      {/* glow background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="container max-w-[1320px] mx-auto relative z-10">
        {/* Title */}
        <motion.p
          className="text-white text-3xl text-center font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          سفر یادگیری خود را از همین امروز شروع کنید!
        </motion.p>

        <motion.p
          className="text-white text-center mt-6 opacity-80"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          فقط در چند قدم ساده، وارد مسیر حرفه‌ای برنامه‌نویسی شو
        </motion.p>

        {/* Cards */}
        <motion.div
          className="flex max-lg:flex-wrap max-lg:justify-center items-center justify-between gap-8 mt-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[img1, img2, img3, img4].map((img, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
              }}
              className="flex flex-col items-center bg-white w-[300px] gap-4 px-7 text-center py-6 rounded-xl shadow-md transition-all"
            >
              <motion.img
                src={img}
                alt={`Step ${index + 1}`}
                className="mb-2"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.3,
                }}
              />

              <p className="text-lg font-semibold">
                {
                  [
                    "یادگیری با بهترین‌ها",
                    "مسیرهای هدفمند",
                    "پروژه‌های واقعی",
                    "ورود به بازار کار",
                  ][index]
                }
              </p>

              <p className="text-sm text-gray-600">
                {
                  [
                    "با اساتید حرفه‌ای و با تجربه یاد بگیر",
                    "مسیر مشخص و بدون سردرگمی داشته باش",
                    "مهارتتو با پروژه‌های واقعی تقویت کن",
                    "آماده ورود به دنیای کار شو",
                  ][index]
                }
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LearningJourney;
