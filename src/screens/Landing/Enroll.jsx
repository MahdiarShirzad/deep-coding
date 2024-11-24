import img from "../../assets/images/home-6/learn/1.png";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const textVariants = {
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
const imageVariants = {
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

const Enroll = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="container max-w-[1320px] mx-auto flex max-lg:flex-wrap items-center justify-between font-iransans mt-20 gap-16">
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
        className=" w-1/2 max-lg:w-4/5 max-lg:mx-auto"
      >
        <p className="text-3xl w-3/4 leading-[50px] font-semibold  text-[#140342]">
          <span className="text-[#6440FB]">یادگیری</span> مهارت های جدید در زمان
          و مکانی که دوست دارید.
        </p>
        <p className="text-slate-500 w-3/4 mt-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        <Link to="/sign-up" className=" mt-12 block">
          <Button>ثبت نام رایگان</Button>
        </Link>
      </motion.div>
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
        className=" w-1/2 max-lg:mx-auto max-sm:hidden"
      >
        <div className=" relative">
          <img className="" src={img} alt="" />
          <div className=" absolute bg-[#140342] text-white top-40 -right-20 rounded-xl px-8 py-6 flex flex-col gap-4">
            <p>نویسندگان دستچین شده</p>
            <p>آسان برای پیگیری برنامه درسی</p>
            <p>دوره های رایگان</p>
            <p>تضمین بازگشت پول</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Enroll;
