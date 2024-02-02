import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";

const HeaderNav = () => {
  return (
    <div className="w-full">
      <NavItems />
    </div>
  );
};

export default HeaderNav;
