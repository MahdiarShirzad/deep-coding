import React from "react";
import { NavLink } from "react-router-dom";

const activeClass = ({ isActive }) =>
  isActive
    ? " pb-2 border-b-2 border-[#1A064F] transition-none"
    : "transition-none pb-2";

const NavItems = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ul className="flex flex-col md:flex-row w-full text-#1A064F] transition-none items-center h-full gap-10 pr-12">
      <NavLink className={activeClass} onClick={scrollToTop} to="/">
        <li>صفحه اصلی</li>
      </NavLink>
      <NavLink className={activeClass} onClick={scrollToTop} to="/courses">
        <li>دوره ها</li>
      </NavLink>
      <NavLink className={activeClass} onClick={scrollToTop} to="/blogs">
        <li>وبلاگ</li>
      </NavLink>
      <NavLink className={activeClass} onClick={scrollToTop} to="/about-us">
        <li>درباره ما</li>
      </NavLink>
      <NavLink className={activeClass} onClick={scrollToTop} to="/contact-us">
        <li>تماس با ما</li>
      </NavLink>
    </ul>
  );
};

export default NavItems;
