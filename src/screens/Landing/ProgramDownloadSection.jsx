import { motion, useInView } from "framer-motion";
import app from "../../assets/images/home-6/app/1.png";
import apple from "../../assets/images/app/buttons/1.svg";
import googleplay from "../../assets/images/app/buttons/2.svg";
import { useRef } from "react";

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1.4,
      type: "spring",
    },
  },
};

const ProgramDownloadSection = () => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });

  return (
    <motion.div
      className=" container max-w-[1320px] max-lg:hidden mx-auto flex bg-sky-100 mt-32 justify-between items-center font-iransans px-20 py-24 rounded-2xl mb-20"
      ref={imageRef}
      initial="hidden"
      animate={imageInView ? "visible" : "hidden"}
      variants={imageVariants}
    >
      <div>
        <p className="text-3xl font-medium">برنامه را دانلود کنید</p>
        <p className="text-gray-500 mt-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
        </p>
        <div className="flex items-center gap-6 mt-8">
          <button>
            <img src={apple} alt="" />
          </button>
          <button>
            <img src={googleplay} alt="" />
          </button>
        </div>
      </div>
      <div>
        <img src={app} alt="" />
      </div>
    </motion.div>
  );
};

export default ProgramDownloadSection;
