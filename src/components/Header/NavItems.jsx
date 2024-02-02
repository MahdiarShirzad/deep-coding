import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row w-full  items-center h-full gap-10 pr-12">
      <NavLink to="/">
        <li>صفحه اصلی</li>
      </NavLink>
      <NavLink to="/courses">
        <li>دوره ها</li>
      </NavLink>
      <NavLink to="/">
        <li>وبلاگ</li>
      </NavLink>
      <NavLink to="/">
        <li>درباره ما</li>
      </NavLink>
      <NavLink to="/">
        <li>تماس با ما</li>
      </NavLink>
    </ul>
  );
};

export default NavItems;
