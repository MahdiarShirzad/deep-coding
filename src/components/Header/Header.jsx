import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";
import MobileNav from "./MobileNav";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 800, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-10 border-b ${
        isScrolled ? "z-[100]" : ""
      } transition-none bg-${
        isScrolled ? "white" : "transparent"
      } transition-all`}
      // data-aos="fade-left"
    >
      <div className="container max-w-[1320px] flex max-lg:justify-between max-lg:px-8 mx-auto items-center py-4 font-iransans pr-6">
        <MobileNav />
        <Logo />
        <HeaderNav />
        <HeaderLeft />
      </div>
    </div>
  );
};

export default Header;
