import React from "react";

import loginimg from "../../assets/images/home-9/hero/1.png";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import logo from "../../assets/images/general/logo2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex -mx-3 p-0 w-[full] h-[100vh] transition-none">
      <div className=" flex justify-center items-start pt-20 bg-[#140342] w-2/5 bg-[url('assets/images/login/bg.png')]">
        <Link to="/">
          <img className=" w-40 fixed top-6 right-10" src={logo} alt="" />
        </Link>
        <img src={loginimg} alt="" />
      </div>
      <div className="bg-[#fff4e2] w-3/5 flex justify-center items-center font-iransans">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
