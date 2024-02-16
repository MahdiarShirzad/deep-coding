import React from "react";
import NavItems from "../../components/Header/NavItems";
import { NavLink } from "react-router-dom";
import Button from "../../components/common/Button/Button";

const LoginHeader = () => {
  return (
    <div className=" flex fixed top-6 left-20 items-center gap-9">
      <NavItems />
      <NavLink to="/sign-up" className="w-[170px]">
        <Button>ثبت نام</Button>
      </NavLink>
    </div>
  );
};

export default LoginHeader;
