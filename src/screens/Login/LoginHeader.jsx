import React from "react";
import NavItems from "../../components/Header/NavItems";
import { NavLink } from "react-router-dom";
import Button from "../../components/common/Button/Button";

const activeClass = ({ isActive }) =>
  isActive
    ? " pb-2 border-b-2 border-[#1A064F] transition-none"
    : "transition-none pb-2";

const LoginHeader = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" flex fixed top-6 left-20 items-center gap-9 max-lg:hidden">
      <ul className="flex  relative lg:flex-row w-full text-#1A064F] transition-none items-center h-full gap-10 pr-12 max-lg:text-sm  max-md:text-xs">
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
      <NavLink to="/sign-up" className="">
        <button className="text-white w-[120px] bg-[#140342] rounded-2xl px-9 py-3 border-2 text-sm  max-md:text-xs border-[#140342] hover:bg-transparent hover:text-[#140342]">
          ثبت نام
        </button>
      </NavLink>
    </div>
  );
};

export default LoginHeader;
