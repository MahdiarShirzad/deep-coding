import React from "react";
import img from "../../../assets/images/coursesCards/react.png";
import CourseProgress from "../../../components/CourseProgress/CourseProgress";
import { Link } from "react-router-dom";

const CourseListItem = ({ completionPercentage, name }) => {
  return (
    <div className=" border-b h-[120px] my-3 px-4 rounded-md flex w-full justify-between items-center pb-5">
      <img className=" w-[120px] h-[90px] mt-4  rounded-md" src={img} alt="" />
      <div className=" w-4/6 my-6">
        <h2 className=" text-xl font-semibold">دوره آموزش {name}</h2>
        <div>
          <CourseProgress completionPercentage={completionPercentage} />
        </div>
      </div>
      <Link to="/user-panel/student-course-resume">
        <button className=" px-4 h-[40px] bg-blue-100 rounded-lg flex items-center justify-center gap-1 text-blue-900">
          <p>ادامه</p>
          <svg
            className="w-[20px]"
            viewBox="-0.5 0 25 25"
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
                d="M7.98047 3.51001C5.43047 4.39001 4.98047 9.09992 4.98047 12.4099C4.98047 15.7199 5.41047 20.4099 7.98047 21.3199C10.6905 22.2499 18.9805 16.1599 18.9805 12.4099C18.9805 8.65991 10.6905 2.58001 7.98047 3.51001Z"
                stroke="#4665af"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default CourseListItem;
