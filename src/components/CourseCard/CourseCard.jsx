import React from "react";
import lecture from "../../assets/images/coursesCards/icons/1.svg";
import timesvg from "../../assets/images/coursesCards/icons/2.svg";
import levelsvg from "../../assets/images/coursesCards/icons/3.svg";
import styles from "./MemberCard.module.css";
import RenderStars from "../RenderStars/RenderStars";
import { Link } from "react-router-dom";

const CourseCard = ({ posts }) => {
  const { id, name, teacher, price, level, star, time, img } = posts;

  const coursePrice = price === 0 ? <p>رایگان</p> : price;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to={`/courses/${id}`} onClick={scrollToTop}>
      <div className={styles.card_section}>
        <div className={`${styles.card_item} ${styles.card_users}`}>
          <div className=" w-[300px] mb-8 px-4 py-5 rounded-xl shadow-sm shadow-gray-200">
            <img className=" rounded-lg w-full h-[170px]" src={img} alt="" />
            <div className=" flex items-center gap-3 text-sm mt-4 text-gray-600">
              <p className="flex items-center gap-1">
                <p className="text-[#FFAC33]">{star}</p>
                <RenderStars rating={star} />
              </p>
            </div>
            <h1 className=" text-lg mt-4 font-medium text-right">{name}</h1>
            <div className=" flex items-center gap-4 text-sm mt-5 text-gray-600">
              <div className=" flex items-center gap-1">
                <img src={lecture} alt="" />
                <p>6 درس</p>
              </div>
              <div className=" flex items-center gap-1">
                <img src={timesvg} alt="" />
                <p>{time} ساعت</p>
              </div>
              <div className=" flex items-center gap-1">
                <img src={levelsvg} alt="" />
                <p>{level}</p>
              </div>
            </div>
            <div className=" flex items-center justify-between mt-6 px-3 border-t pt-2">
              <div>
                <p>{teacher}</p>
              </div>
              <div className="flex gap-1 items-center text-gray-700">
                <span className=" font-semibold">{coursePrice}</span>
                {price !== 0 ? <span>تومان</span> : <span></span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
