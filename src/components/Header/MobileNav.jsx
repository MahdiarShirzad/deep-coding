import React from "react";
import NavItems from "./NavItems";
import styles from "./Header.module.css";

const MobileNav = () => {
  return (
    <div
      className={`${styles.navMobile} flex items-center justify-between text-[14px]   text-[#323E73]`}
    >
      <input
        className={`${styles.toggleNav} hidden`}
        id="toggle_nav"
        type="checkbox"
      />
      <label
        for="toggle_nav"
        className={`${styles.labelToggleNav} cursor-pointer `}
      >
        <svg
          className=" w-[35px]"
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
              d="M4 17H20M4 12H20M4 7H20"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </label>
      <ul className={` ${styles.listNavMobile} text-black `}>
        <NavItems />
      </ul>
    </div>
  );
};

export default MobileNav;
