import React from "react";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className=" mt-20 flex items-center justify-center gap-10">
        <p className=" text-4xl font-black max-lg:text-2xl">
          سبد خرید شما خالی است !!!
        </p>
        <svg
          className="w-[100px] max-lg:w-[60px]"
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
              d="M3.86376 16.4552C3.00581 13.0234 2.57684 11.3075 3.47767 10.1538C4.3785 9 6.14721 9 9.68462 9H14.3153C17.8527 9 19.6214 9 20.5222 10.1538C21.4231 11.3075 20.9941 13.0234 20.1362 16.4552C19.5905 18.6379 19.3176 19.7292 18.5039 20.3646C17.6901 21 16.5652 21 14.3153 21H9.68462C7.43476 21 6.30983 21 5.49605 20.3646C4.68227 19.7292 4.40943 18.6379 3.86376 16.4552Z"
              stroke="#000"
              stroke-width="1.5"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
              stroke="#000"
              stroke-width="1.5"
            ></path>{" "}
            <path
              d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
              stroke="#000"
              stroke-width="1.5"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M8 13V17"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M16 13V17"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M12 13V17"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className=" flex justify-center mt-10">
        <Link to="/courses">
          <Button>مشاهده دوره ها</Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
