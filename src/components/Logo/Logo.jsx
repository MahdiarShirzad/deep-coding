import React from "react";
import logo from "../../assets/images/general/logo.png";
import { Link } from "react-router-dom";
import logoSm from "../../assets/images/general/logo-title.png";

const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img className="w-[140px] h-auto max-md:hidden" src={logo} alt="Logo" />
        <img
          className="w-[45px] h-auto md:hidden mr-3"
          src={logoSm}
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
