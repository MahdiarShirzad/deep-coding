import React, { useEffect } from "react";
import lecture from "../../assets/images/coursesCards/icons/1.svg";
import timesvg from "../../assets/images/coursesCards/icons/2.svg";
import levelsvg from "../../assets/images/coursesCards/icons/3.svg";
import styles from "./MemberCard.module.css";
import RenderStars from "../RenderStars/RenderStars";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseCard = ({ posts }) => {
  const { id, name, teacher, price, level, star, time, img } = posts;

  // Format price to include periods for thousands
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Truncate the name if it exceeds 20 characters
  const truncatedName =
    name.length > 31 ? name.substring(0, 31) + " ..." : name;

  const coursePrice = price === 0 ? <p>رایگان</p> : formattedPrice;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <Link to={`/courses/${id}`} onClick={scrollToTop}>
      <div className={styles.card_section} data-aos="fade-left">
        <div className={`${styles.card_item} ${styles.card_users}`}>
          <div className="w-[300px] mb-8 px-4 py-5 rounded-xl shadow-sm shadow-gray-200">
            <img className="rounded-lg w-full h-[210px]" src={img} alt={name} />
            <div className="flex items-center gap-3 text-sm mt-4 text-gray-600">
              <p className="flex items-center gap-1">
                <p className="text-[#FFAC33]">{star}</p>
                <RenderStars rating={star} />
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
            <div className="flex items-center justify-between mt-6 px-3 border-t pt-2">
              <div>
                <p>{teacher}</p>
              </div>
              <div className="flex gap-1 items-center text-gray-700">
                <span className="font-semibold">{coursePrice}</span>
                {price !== 0 && <span>تومان</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
