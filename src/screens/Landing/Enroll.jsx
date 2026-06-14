import img from "../../assets/images/landing/enroll.png";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
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

const featuresContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const featureVariants = {
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

const features = [
  "اساتید برجسته و حرفه‌ای",
  "برنامه‌های یادگیری آسان و کاربردی",
  "دوره‌های رایگان برای شروع",
  "ضمانت بازگشت وجه",
];

const Enroll = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  const textInView = useInView(textRef, {
    once: true,
    margin: "-100px",
  });

  const imageInView = useInView(imageRef, {
    once: true,
    margin: "-100px",
  });

  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="container max-w-[1320px] mx-auto flex max-lg:flex-wrap items-center justify-between font-iransans mt-20 gap-16">
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
        className="w-1/2 max-lg:w-4/5 max-lg:mx-auto"
      >
        <p className="text-3xl w-3/4 leading-[50px] font-semibold text-[#140342]">
          <span className="text-[#6440FB]">مهارت‌آموزی</span> در هر زمان و مکانی
          که برای شما مناسب باشد.
        </p>

        <p className="text-slate-500 w-3/4 mt-5 leading-8">
          شروع مسیر پیشرفت شخصی و حرفه‌ای شما به سادگی چند کلیک است. با دوره‌های
          متنوع ما، مهارت‌های خود را به سطح بالاتری ارتقا دهید.
        </p>

        <Link to="/sign-up" className="mt-12 block w-fit">
          <motion.div
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Button>شروع یادگیری</Button>
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
        className="w-1/2 max-lg:mx-auto max-sm:hidden"
      >
        <div className="relative">
          <img
            className="mt-12 rounded-xl shadow-gray-400 shadow-lg"
            src={img}
            alt="Enroll"
          />

          <motion.div
            ref={featuresRef}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={featuresContainerVariants}
            className="absolute bg-[#140342] text-white top-40 -right-48 rounded-xl px-8 py-6 flex flex-col gap-4"
          >
            {features.map((feature) => (
              <motion.p key={feature} variants={featureVariants}>
                {feature}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Enroll;
