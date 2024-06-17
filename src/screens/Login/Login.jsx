import React from "react";
import login from "../../assets/images/login/Designer4.png";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import logo from "../../assets/images/general/logo2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex -mx-3 p-0 w-[full] h-[100vh] transition-none">
      <div className=" flex justify-center items-start pt-20 bg-[#140342] w-2/5 bg-[url('assets/images/login/bg.png')] max-lg:hidden ">
        <Link to="/">
          <img className=" w-40 fixed top-6 right-10" src={logo} alt="" />
        </Link>
        <img className=" w-[200px" src={login} alt="" />
      </div>
      <div className=" bg-[#DBEAFE] w-3/5 max-lg:w-full flex justify-center items-center font-iransans">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
