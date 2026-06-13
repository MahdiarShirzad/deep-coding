import React from "react";
import logo from "../../assets/images/general/logo.png";
import { Link } from "react-router-dom";
import logoSm from "../../assets/images/general/logo-title.png";

const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img
          className="w-[230px]  h-[50px] max-lg:hidden rounded-3xl"
          src={logo}
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
