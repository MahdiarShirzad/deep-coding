import React from "react";
import Logo from "../Logo/Logo";
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <div className=" fixed top-0 right-0 left-0 border-b z-50 bg-white">
      <div className="container max-w-[1320px] flex mx-auto items-center py-4 font-iransans pr-6">
        <Logo />
        <HeaderNav />
        <HeaderLeft />
      </div>
    </div>
  );
};

export default Header;
