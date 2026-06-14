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
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const sliderVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

const logosContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const logoVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Validity = () => {
  const textRef = useRef(null);
  const sliderRef = useRef(null);
  const logosRef = useRef(null);

  const textInView = useInView(textRef, {
    once: true,
    margin: "-100px",
  });

  const sliderInView = useInView(sliderRef, {
    once: true,
    margin: "-100px",
  });

  const logosInView = useInView(logosRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="bg-[#1A064F] mt-10">
      <div className="container max-w-[1320px] mx-auto text-white font-iransans pt-20">
        <div className="flex flex-wrap items-center gap-14">
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

              <p className="mt-4 text-white/80 leading-8">
                تجربه یادگیری روان و کاربردی که با استفاده از آن مهارت‌های خود
                را ارتقا می‌دهید.
              </p>
            </div>

            <div className="flex mt-12 gap-7">
              <div>
                <p className="text-3xl font-bold">9/10</p>

                <p className="mt-3 text-white/80 leading-7">
                  ۹ نفر از هر ۱۰ نفر تجربه یادگیری بهتری را گزارش کرده‌اند.
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">85%</p>

                <p className="mt-3 text-white/80 leading-7">
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
            className="max-lg:mx-auto"
          >
            <ValidityCarousel />
          </motion.div>
        </div>

        <motion.div
          ref={logosRef}
          initial="hidden"
          animate={logosInView ? "visible" : "hidden"}
          variants={logosContainerVariants}
          className="mt-20 max-md:hidden"
        >
          <h6 className="text-center text-xl mb-8">
            مورد اعتماد بهترین های جهان
          </h6>

          <div className="flex items-center justify-between px-10">
            {[client1, client2, client3, client4, client5, client6].map(
              (logo, index) => (
                <motion.div
                  key={index}
                  variants={logoVariants}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <img
                    src={logo}
                    alt={`client-${index + 1}`}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Validity;
