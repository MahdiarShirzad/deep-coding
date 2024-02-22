import React from "react";
import logo from "../../assets/images/general/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img className="w-[140px] h-auto" src={logo} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
