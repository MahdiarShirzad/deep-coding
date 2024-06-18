import React, { useEffect } from "react";
import img from "../../../assets/images/blog/Designer.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogCard = ({ blog }) => {
  const { name, category, date } = blog;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);
  return (
    <div
      className="max-w-[600px] px-4 flex max-md:flex-col justify-between gap-10 py-4 rounded-lg shadow-md shadow-gray-200 my-4 group transition-all duration-300 transform-gpu hover:-translate-y-2"
      data-aos="fade-left"
    >
      <div className=" w-1/3 h-[140px] max-md:w-4/5 max-md:mx-auto">
        <img className=" rounded-md w-full h-full " src={img} alt="" />
      </div>
      <div className=" w-2/3 max-md:w-4/5 max-md:mx-auto">
        <h5 className=" text-black text-2xl mt-3 font-medium">{name}</h5>
        <p className="text-sm mt-5 font-thin text-gray-500 ">
          در این مقاله می‌خواهیم تا به بررسی مجدد کد یا Refactoringدر برنامه
          نویسی به عنوان راهی برای کاهش مشکلات فنی بپردازیم. اگر به طور جدی به
        </p>
        <div className=" flex mt-8 items-center justify-start gap-7 px-3">
          <h6 className=" text-gray-500 flex gap-1 text-xs font-thin">
            <svg
              className="w-[15px]"
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64"
              enable-background="new 0 0 64 64"
              xml:space="preserve"
              fill="#000000"
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
                  fill="#787374"
                  d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255 C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602 s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536 L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999 v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94 l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259 L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"
                ></path>{" "}
              </g>
            </svg>
            {category}
          </h6>
          <p className="text-xs text-gray-500  font-thin">{date}</p>
        </div>
        <div className=" flex justify-end max-md:justify-center">
          <Link to="/blog-detail" onClick={scrollToTop}>
            <div className="bg-[#140342] flex items-center text-white gap-2 text-sm w-[130px] justify-center py-2 rounded-xl mt-5">
              <p>مشاهده بیشتر</p>
              <svg
                className="w-[20px]"
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
                    d="M11 12L19 12"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 8L5.00001 12L11 16L11 8Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
