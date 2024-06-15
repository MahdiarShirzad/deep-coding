import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LoginHeader from "./LoginHeader";
import logo from "../../assets/images/general/logo2.png";
import SignUPForm from "./SignUPForm";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/Designer4.png";

const SignUp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex -mx-3 p-0 w-[full] h-[100vh] transition-none bg-blue-100">
      <div className="flex justify-center items-start pt-20 bg-[#140342] w-2/5 bg-[url('assets/images/login/bg.png')] max-lg:hidden">
        <Link to="/">
          <img className="w-40 fixed top-6 right-10" src={logo} alt="" />
        </Link>
        <img src={login} alt="" />
      </div>
      <div className="bg-sky-600 my-20 w-3/5 flex justify-center items-center font-iransans max-lg:w-full">
        <LoginHeader />
        {windowWidth <= 1024 && <Header />}
        <SignUPForm />
      </div>
    </div>
  );
};

export default SignUp;
