import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLeft = () => {
  return (
    <div className="flex items-center justify-between w-96">
      <NavLink to="/cart">
        <button>
          <svg
            className="w-8"
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
                d="M4.20853 17.8104L3.46191 17.7393L4.20853 17.8104ZM19.7915 17.8104L20.5381 17.7393L19.7915 17.8104ZM19.0296 9.81038L18.2829 9.88149L19.0296 9.81038ZM4.97043 9.81038L5.71705 9.88149L4.97043 9.81038ZM7.24999 11C7.24999 11.4142 7.58578 11.75 7.99999 11.75C8.41421 11.75 8.74999 11.4142 8.74999 11H7.24999ZM15.25 11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11H15.25ZM6.96142 8.75H17.0386V7.25H6.96142V8.75ZM18.2829 9.88149L19.0448 17.8815L20.5381 17.7393L19.7762 9.73928L18.2829 9.88149ZM17.8005 19.25H6.19952V20.75H17.8005V19.25ZM4.95515 17.8815L5.71705 9.88149L4.22381 9.73928L3.46191 17.7393L4.95515 17.8815ZM6.19952 19.25C5.46234 19.25 4.88526 18.6153 4.95515 17.8815L3.46191 17.7393C3.30815 19.3538 4.57773 20.75 6.19952 20.75V19.25ZM19.0448 17.8815C19.1147 18.6153 18.5376 19.25 17.8005 19.25V20.75C19.4223 20.75 20.6918 19.3538 20.5381 17.7393L19.0448 17.8815ZM17.0386 8.75C17.683 8.75 18.2218 9.23994 18.2829 9.88149L19.7762 9.73928C19.6418 8.32788 18.4563 7.25 17.0386 7.25V8.75ZM6.96142 7.25C5.54364 7.25 4.35823 8.32788 4.22381 9.73928L5.71705 9.88149C5.77815 9.23994 6.31698 8.75 6.96142 8.75V7.25ZM8.74999 7C8.74999 5.20507 10.2051 3.75 12 3.75V2.25C9.37664 2.25 7.24999 4.37665 7.24999 7H8.74999ZM12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16.75C16.75 4.37665 14.6233 2.25 12 2.25V3.75ZM7.24999 7V11H8.74999V7H7.24999ZM15.25 7V11H16.75V7H15.25Z"
                fill="#000"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </NavLink>
      <NavLink to="/login">
        <button>ورود</button>
      </NavLink>
      <NavLink to="sign-up">
        <button className="text-white bg-[#6440FB] rounded-full px-9 py-3 border-2 border-[#6440FB] hover:bg-transparent hover:text-[#6440FB]">
          ثبت نام
        </button>
      </NavLink>
    </div>
  );
};

export default HeaderLeft;
