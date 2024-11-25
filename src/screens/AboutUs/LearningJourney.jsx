import React from "react";
import img1 from "../../assets/images/home-5/learning/1.svg";
import img2 from "../../assets/images/home-5/learning/2.svg";
import img3 from "../../assets/images/home-5/learning/3.svg";
import img4 from "../../assets/images/home-5/learning/4.svg";
import { motion } from "framer-motion";

const LearningJourney = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 250 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 200,
        damping: 12,
      },
    },
  };

  return (
    <div className="bg-[#282664] w-full h-[400px]">
      <div className="container max-w-[1320px] mx-auto pt-28">
        <p className="text-white text-3xl text-center font-bold">
          سفر یادگیری خود را از همین امروز شروع کنید!
        </p>
        <p className="text-white text-center mt-6">
          لورم ایپسوم متن ساختگی با تولید سادگی است.
        </p>
        <div className="flex max-lg:flex-wrap max-lg:justify-center items-center justify-between gap-8 mt-20">
          {[img1, img2, img3, img4].map((img, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-between bg-white w-[330px] gap-3 px-7 text-center py-5 rounded-lg shadow-md pb-10"
              initial="hidden"
              whileInView="visible"
              variants={boxVariants}
              viewport={{ once: true }}
              style={
                {
                  // transitionDelay: `${0.2 * index}s`,
                }
              }
            >
              <img className="mb-3" src={img} alt={`Step ${index + 1}`} />
              <p className="text-lg">با کارشناسان بیاموزید</p>
              <p>متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
