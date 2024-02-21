import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 5;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 border-b z-[10000] transition-none bg-${
        isScrolled ? "white" : "transparent"
      } transition-all`}
    >
      <div className="container max-w-[1320px] flex mx-auto items-center py-4 font-iransans pr-6">
        <Logo />
        <HeaderNav />
        <HeaderLeft />
      </div>
    </div>
  );
};

export default Header;
