import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import scrollToTop from "../../utils/scrollToTop";

const BookCard = ({ book }) => {
  const { _id, image, category, title, description } = book;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group flex flex-col justify-between w-full max-w-[340px] h-[520px] bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-4 cursor-pointer overflow-hidden transition-all duration-300 dir-rtl text-right"
    >
      <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-gray-50">
        <motion.img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
          loading="lazy"
        />
        <span className="absolute top-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-sm font-semibold text-violet-900 shadow-sm flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 512 512" fill="#0548E8">
            <path d="M504.556,297.257c-4.745-7.638-11.463-13.868-19.446-18.003c-1.687-0.89-3.531-1.694-5.498-2.426h-0.28 c-2.326,0-4.551-0.703-6.424-2.003c-3.504-0.768-7.1-1.156-10.711-1.156c-11.499,0-22.288,3.804-31.211,10.997 c-2.002,1.615-4.515,2.505-7.084,2.505c-3.439,0-6.647-1.529-8.801-4.2c-1.895-2.347-2.764-5.29-2.44-8.291 c0.315-3.008,1.787-5.7,4.134-7.602c12.792-10.322,28.907-16.007,45.381-16.007c5.255,0,10.509,0.574,15.663,1.723 c9.648-7.638,15.749-18.47,17.271-30.759c0.244-1.938,0.366-3.891,0.366-5.822c0-11.255-4.121-22.166-11.607-30.694 c-7.545-8.585-17.946-14.098-29.295-15.506c-1.378-0.172-2.77-0.286-4.156-0.33c-1.02,1.156-2.082,2.297-3.18,3.403" />
          </svg>
          {category}
        </span>
      </div>

      <div className="flex flex-col flex-grow mt-4 justify-between">
        <div>
          <h4 className="text-gray-900 font-bold font-yekanBold text-lg mb-2 line-clamp-2 h-[56px] leading-7 group-hover:text-violet-900 transition-colors">
            {title}
          </h4>
          <p className="text-gray-600 font-yekanReg text-xs md:text-sm leading-6 line-clamp-4 text-justify mb-4">
            {description}
          </p>
        </div>

        <div className="flex justify-end pt-2 border-t border-gray-50">
          <Link onClick={scrollToTop} to={`${_id}`} className="w-full">
            <motion.button className="flex w-full justify-between items-center bg-gray-50 hover:bg-[#0f6ffe]/10 py-2.5 px-4 rounded-xl font-medium text-gray-800 hover:text-[#0548E8] text-xs md:text-sm transition-all duration-300">
              <span>ادامه مطلب و نقشه راه</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1.5"
                viewBox="0 0 12 11"
                fill="none"
              >
                <path
                  d="M10.8019 6.17453H2.56566C2.00285 6.17453 1.53613 5.70782 1.53613 5.14501C1.53613 4.5822 2.00285 4.11548 2.56566 4.11548H10.8019C11.3647 4.11548 11.8314 4.5822 11.8314 5.14501C11.8314 5.70782 11.3647 6.17453 10.8019 6.17453Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5.31096 10.2918C5.05014 10.2918 4.78933 10.1958 4.58342 9.98985L0.465311 5.87174C0.067227 5.47366 0.067227 4.81476 0.465311 4.41667L4.58342 0.298563C4.98151 -0.099521 5.64041 -0.099521 6.03849 0.298563C6.43657 0.696647 6.43657 1.35554 6.03849 1.75363L2.64791 5.14421L6.03849 8.53479C6.43657 8.93287 6.43657 9.59177 6.03849 9.98985C5.83258 10.1958 5.57177 10.2918 5.31096 10.2918Z"
                  fill="currentColor"
                ></path>
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
