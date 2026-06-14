import { motion, useInView } from "framer-motion";
import app from "../../assets/images/home-6/app/1.png";
import apple from "../../assets/images/app/buttons/1.svg";
import googleplay from "../../assets/images/app/buttons/2.svg";
import { useRef } from "react";

const textVariants = {
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

const buttonsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

const ProgramDownloadSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, {
    once: true,
    margin: "-100px",
  });

  const imageInView = useInView(imageRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div
      className="
        container
        max-w-[1320px]
        max-lg:hidden
        mx-auto
        flex
        bg-sky-100
        mt-32
        justify-between
        items-center
        font-iransans
        px-20
        py-24
        rounded-2xl
        mb-20
      "
    >
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <p className="text-3xl font-medium">دریافت برنامه موبایل</p>

        <p className="text-gray-500 mt-4 leading-8">
          به راحتی و با سرعت بالا برنامه ما را نصب کنید و از امکانات ویژه آن
          بهره‌مند شوید.
        </p>

        <motion.div
          variants={buttonsContainerVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          className="flex items-center gap-6 mt-8"
        >
          <motion.button
            variants={buttonVariants}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <img src={apple} alt="Apple App Store" />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <img src={googleplay} alt="Google Play Store" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <img src={app} alt="App preview" />
      </motion.div>
    </div>
  );
};

export default ProgramDownloadSection;
