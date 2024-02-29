import React, { useEffect } from "react";
import img1 from "../../assets/images/about-1/1.png";
import img2 from "../../assets/images/about-1/2.png";
import img3 from "../../assets/images/about-1/3.png";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsLogin = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div
      className="container max-w-[1320px] mx-auto flex max-lg:flex-wrap-reverse items-center justify-between mt-12 gap-14"
      data-aos="fade-left"
    >
      <div className=" w-1/2 flex items-center gap-7 max-lg:mx-auto">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img className=" mb-7" src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <div className=" w-1/2 max-lg:mx-auto">
        <p className=" text-2xl font-medium">
          مهارت های خود را با بهترین دوره های آنلاین افزایش دهید
        </p>
        <p className=" mt-9 text-sm leading-6">
          می توانید یکی از این دوره های محبوب را در کمتر از یک روز شروع و به
          پایان برسانید - به صورت رایگان! لیست زیر را بررسی کنید. دوره را به
          صورت رایگان شرکت کنید.
        </p>
        <p className=" mt-10 text-sm leading-6 text-gray-600">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <Link to="/sign-up" className=" block mt-20">
          <Button>آموزش رایگان را شروع کنید</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsLogin;
