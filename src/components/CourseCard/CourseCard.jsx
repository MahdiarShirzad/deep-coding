import React from "react";
import img from "../../assets/images/coursesCards/12.png";
import lecture from "../../assets/images/coursesCards/icons/1.svg";
import time from "../../assets/images/coursesCards/icons/2.svg";
import level from "../../assets/images/coursesCards/icons/3.svg";
import styles from "./MemberCard.module.css";

const CourseCard = () => {
  return (
    <div className={styles.card_section}>
      <div className={`${styles.card_item} ${styles.card_users}`}>
        <div className=" w-[300px] mb-8 px-4 py-5 rounded-xl shadow-sm shadow-gray-200">
          <img className=" rounded-lg" src={img} alt="" />
          <div className=" flex items-center gap-3 text-sm mt-4 text-gray-600">
            <p className="flex items-center gap-1">
              <p className="text-[#FFAC33]">3.4</p>
              <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-4"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#FFAC33"
                    d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
                  ></path>
                </g>
              </svg>
            </p>
            <p>(203)</p>
          </div>
          <h1 className=" text-lg mt-4 font-medium text-right">
            آموزش ASP.NET
          </h1>
          <div className=" flex items-center gap-4 text-sm mt-5 text-gray-600">
            <div className=" flex items-center gap-1">
              <img src={lecture} alt="" />
              <p>6 درس</p>
            </div>
            <div className=" flex items-center gap-1">
              <img src={time} alt="" />
              <p>6 ساعت</p>
            </div>
            <div className=" flex items-center gap-1">
              <img src={level} alt="" />
              <p>همه سطوح</p>
            </div>
          </div>
          <div className=" flex items-center justify-between mt-6 px-3 border-t pt-2">
            <div>
              <p>ممد</p>
            </div>
            <div className="flex gap-1 items-center text-gray-700">
              <span className=" font-semibold">120000</span>
              <span>تومان</span>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CourseCard;
