import React from "react";
import img1 from "../../assets/images/about-1/1.png";
import img2 from "../../assets/images/about-1/2.png";
import img3 from "../../assets/images/about-1/3.png";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";

const AboutUsLogin = () => {
  return (
    <div className="container max-w-[1320px] mx-auto flex items-center justify-between mt-12 gap-14">
      <div className=" w-1/2 flex items-center gap-7">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img className=" mb-7" src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <div className=" w-1/2">
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
