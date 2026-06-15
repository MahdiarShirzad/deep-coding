import React from "react";
import lecture from "../../assets/images/coursesCards/icons/1.svg";
import timesvg from "../../assets/images/coursesCards/icons/2.svg";
import levelsvg from "../../assets/images/coursesCards/icons/3.svg";
import styles from "./MemberCard.module.css";
import RenderStars from "../RenderStars/RenderStars";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import scrrollToTop from "../../utils/scrollToTop.js";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CourseCard = ({ posts }) => {
  const { _id, name, teacher, price, level, ratingsAverage, time, img, slug } =
    posts;

  console.log("slug: ", slug);

  const formattedPrice =
    price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") || "0";

  const truncatedName =
    name?.length > 31 ? `${name.substring(0, 31)} ...` : name;

  const coursePrice = price === 0 ? "رایگان" : formattedPrice;

  const teacherName = typeof teacher === "object" ? teacher?.fullName : teacher;

  return (
    <Link to={`/courses/${slug || _id}`} onClick={scrrollToTop}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.2,
        }}
        className={styles.card_section}
      >
        <div className={`${styles.card_item} ${styles.card_users}`}>
          <div className="w-[300px] h-[455px] mb-8 px-4 py-5 rounded-xl shadow-sm shadow-gray-200 bg-white">
            <img
              className="rounded-lg w-full h-[210px] object-cover"
              src={img}
              alt={name}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />

            <div className="h-[96px]">
              <div className="flex items-center gap-3 text-sm mt-4 text-gray-600">
                <p className="flex items-center gap-1">
                  <span className="text-[#FFAC33]">{ratingsAverage}</span>

                  <RenderStars rating={ratingsAverage} />
                </p>
              </div>

              <h1 className="text-lg mt-4 font-medium text-right">
                {truncatedName}
              </h1>

              <div className="flex items-center gap-4 text-sm mt-5 text-gray-600">
                <div className="flex items-center gap-1">
                  <img src={lecture} alt="lecture icon" />

                  <p>6 درس</p>
                </div>

                <div className="flex items-center gap-1">
                  <img src={timesvg} alt="time icon" />

                  <p>{time} ساعت</p>
                </div>

                <div className="flex items-center gap-1">
                  <img src={levelsvg} alt="level icon" />

                  <p>{level}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-12 px-3 border-t pt-2">
              <p>{teacherName || "—"}</p>

              <div className="flex gap-1 items-center text-gray-700">
                <span className="font-semibold">{coursePrice}</span>

                {price !== 0 && <span>تومان</span>}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
