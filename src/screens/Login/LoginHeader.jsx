import React from "react";
import NavItems from "../../components/Header/NavItems";
import { NavLink } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className=" flex fixed top-6 left-20 items-center gap-9">
      <NavItems />
      <NavLink to="/sign-up">
        <button className="bg-[#140342] w-[120px] border-[#140342] border-2 text-white px-8 py-2 rounded-3xl">
          ثبت نام
        </button>
      </NavLink>
    </div>
  );
};

export default LoginHeader;
