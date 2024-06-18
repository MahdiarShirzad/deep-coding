import React from "react";
import levelsvg from "../../../assets/images//coursesCards/icons/3.svg";
import styles from "./MemberCard.module.css";
import RenderStars from "../../RenderStars/RenderStars";
import { Link } from "react-router-dom";

const TopCoursesCard = ({ course }) => {
  const { id, name, star, level, time, img, teacher, price } = course;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const coursePrice = price === 0 ? <p>رایگان</p> : price;

  return (
    <Link to={`/courses/${id}`} onClick={scrollToTop}>
      <div className={styles.card_section}>
        <div className={`${styles.card_item} ${styles.card_users}`}>
          <div className="max-w-[580px] h-44 flex font-iransans mb-8 gap-8 rounded-2xl px-6 py-4 shadow-sm shadow-slate-300">
            <div>
              <img className="w-52 rounded-xl h-full" src={img} alt="" />
            </div>
            <div className=" w-3/5">
              <p className="flex items-center gap-1 text-gray-500">
                <div className="flex items-center justify-between w-[90px]">
                  <RenderStars rating={star} />
                </div>
                <span className=" text-amber-400">{star}</span>
              </p>
              <h3 className="text-xl font-medium mb-3 mt-2">{name}</h3>
              <div className="flex items-center gap-5 mb-2">
                <p className="flex items-center justify-center text-gray-500 text-sm gap-1">
                  <svg
                    className="w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 7V12L9.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#98a3b8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>{time}</span>
                </p>
                <p className="flex items-start text-gray-500 text-sm gap-1">
                  <img src={levelsvg} alt="" />
                  <span>{level}</span>
                </p>
              </div>
              <div className="border-t-2 flex pt-3 pr-2 justify-between لشح-8">
                <div className=" flex items-center gap-1">
                  <svg
                    className="w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M21.4 15V9"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p className="text-sm">{teacher}</p>
                </div>
                <div className=" flex items-center gap-1">
                  <p className=" text-gray-700 font-semibold">{coursePrice}</p>
                  {price !== 0 ? <span>تومان</span> : <span></span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopCoursesCard;
