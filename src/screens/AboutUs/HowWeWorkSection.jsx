import React from "react";
import img1 from "../../assets/images/home-3/works/1.svg";
import img2 from "../../assets/images/home-3/works/2.svg";
import img3 from "../../assets/images/home-3/works/3.svg";
import line1 from "../../assets/images/misc/lines/1.svg";
import line2 from "../../assets/images/misc/lines/2.svg";

const HowWeWorkSection = () => {
  return (
    <div className=" mt-24 mb-20 container max-w-[1320px] mx-auto">
      <p className=" text-2xl font-medium text-center">ما چگونه کار میکنیم؟</p>
      <p className=" text-center mt-6">
        بیش از 12000 طرح منحصر به فرد در لیست دوره های آنلاین
      </p>
      <div className=" flex  items-center justify-between mt-20">
        <div className=" flex items-center justify-center flex-col w-[190px]">
          <div className=" flex items-center justify-center p-8 rounded-full bg-gray-100 relative">
            <img src={img1} alt="" />
            <div className=" bg-[#1A064F] text-white p-2 px-3 text-sm flex justify-center items-center rounded-full absolute top-0 right-0">
              01
            </div>
          </div>
          <p className=" text-center mt-4">
            دوره های مشارکت کنندگان متخصص ما را مرور کنید.
          </p>
        </div>
        <div>
          <div>
            <img src={line2} alt="" />
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col w-[190px]">
          <div className=" flex items-center justify-center p-8 rounded-full bg-gray-100 relative">
            <img src={img2} alt="" />{" "}
            <div className=" bg-[#1A064F] text-white p-2 px-3 text-sm flex justify-center items-center rounded-full absolute top-0 right-0">
              02
            </div>
          </div>
          <p className=" text-center mt-4">سریع و مطمئن خرید کنید.</p>
        </div>
        <div>
          <div>
            <img src={line1} alt="" />
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col w-[190px]">
          <div className=" flex items-center justify-center p-8 rounded-full bg-gray-100 relative">
            <img src={img3} alt="" />{" "}
            <div className=" bg-[#1A064F] text-white p-2 px-3 text-sm flex justify-center items-center rounded-full absolute top-0 right-0">
              03
            </div>
          </div>
          <p className=" text-center mt-4">
            خودشه! بلافاصله شروع به یادگیری کنید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
