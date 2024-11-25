import { motion, useInView } from "framer-motion";

import ValidityCarousel from "./ValidityCarousel";

import client1 from "../../assets/images/clients/1.svg";
import client2 from "../../assets/images/clients/2.svg";
import client3 from "../../assets/images/clients/3.svg";
import client4 from "../../assets/images/clients/4.svg";
import client5 from "../../assets/images/clients/5.svg";
import client6 from "../../assets/images/clients/6.svg";
import { useRef } from "react";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 130,
      damping: 8,
    },
  },
};
const sliderVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 130,
      damping: 8,
    },
  },
};

const Validity = () => {
  const textRef = useRef(null);
  const sliderRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const sliderInView = useInView(sliderRef, { once: true });

  return (
    <div className=" bg-[#1A064F] mt-10">
      <div className=" container max-w-[1320px] mx-auto text-white font-iransans pt-20">
        <div className=" flex flex-wrap items-center gap-14">
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={textVariants}
            className="w-1/2 max-lg:mx-auto max-sm:w-3/4"
          >
            <div>
              <p className="text-3xl font-bold">
                مردم دوست دارند با ما یاد بگیرند
              </p>
              <p className=" mt-4">
                تجربه یادگیری روان و کاربردی که با استفاده از آن مهارت‌های خود
                را ارتقا می‌دهید.
              </p>
            </div>
            <div className=" flex mt-12 gap-7">
              <div>
                <p className="text-3xl">9/10</p>
                <p className="mt-3">
                  ۹ نفر از هر ۱۰ نفر تجربه یادگیری بهتری را گزارش کرده‌اند.
                </p>
              </div>
              <div>
                <p className="text-3xl">85%</p>
                <p className="mt-3">
                  ۸۵٪ از دانش‌آموزان دوره خود را تا پایان مشاهده کرده‌اند.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={sliderRef}
            initial="hidden"
            animate={sliderInView ? "visible" : "hidden"}
            variants={sliderVariants}
            className=" max-lg:mx-auto"
          >
            <ValidityCarousel />
          </motion.div>
        </div>
        <div className=" mt-20 max-md:hidden">
          <h6 className=" text-center text-xl mb-8">
            مورد اعتماد بهترین های جهان
          </h6>
          <div className=" flex items-center justify-between px-10 max-md:hidden">
            <img src={client1} alt="" />
            <img src={client2} alt="" />
            <img src={client3} alt="" />
            <img src={client4} alt="" />
            <img src={client5} alt="" />
            <img src={client6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validity;
