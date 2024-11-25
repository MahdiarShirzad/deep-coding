import { motion } from "framer-motion";

import img1 from "../../assets/images/login/07.png";
import img2 from "../../assets/images/login/angular.png";
import img3 from "../../assets/images/login/flutter.png";
// import img4 from "../../assets/images/login/java.png";
import img5 from "../../assets/images/login/javascript.webp";
import img6 from "../../assets/images/login/python.webp";
import img7 from "../../assets/images/login/react.png";
import img8 from "../../assets/images/login/typescript.png";

const floatingImages = [
  { src: img2, className: "absolute top-0 left-12", size: 100 },
  { src: img3, className: "absolute top-20 right-16", size: 120 },
  { src: img5, className: "absolute bottom-10 right-12", size: 110 },
  { src: img6, className: "absolute top-10 -right-20", size: 150 },
  { src: img7, className: "absolute top-40 left-20", size: 130 },
  { src: img8, className: "absolute bottom-0 left-40", size: 110 },
];
const variants = {
  hidden: { y: -900, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: index * 0.22, type: "spring" },
  }),
};

const AuthImages = () => {
  return (
    <div className=" w-2/5 relative">
      {floatingImages.map((image, index) => (
        <motion.div
          key={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={index}
          className={image.className}
        >
          <img
            src={image.src}
            alt={`Floating  ${index + 1}`}
            style={{ width: `${image.size}px`, height: `${image.size}px` }}
          />
        </motion.div>
      ))}
      <img src={img1} alt="" />
    </div>
  );
};

export default AuthImages;
