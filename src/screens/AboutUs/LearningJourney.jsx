import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/images/home-5/learning/1.svg";
import img2 from "../../assets/images/home-5/learning/2.svg";
import img3 from "../../assets/images/home-5/learning/3.svg";
import img4 from "../../assets/images/home-5/learning/4.svg";

const LearningJourney = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);
  return (
    <div className=" bg-[#282664] w-full h-[400px]" data-aos="fade-left">
      <div className=" container max-w-[1320px] mx-auto pt-28">
        <p className=" text-white text-3xl text-center font-bold">
          سفر یادگیری خود را از همین امروز شروع کنید!
        </p>
        <p className=" text-white text-center mt-6">
          لورم ایپسوم متن ساختگی با تولید سادگی است.
        </p>
        <div className=" flex max-lg:flex-wrap max-lg:justify-center items-center justify-between gap-8 mt-20">
          <div className=" flex flex-col items-center justify-between bg-white w-[330px] gap-3 px-7 text-center py-5 rounded-lg shadow-md pb-10">
            <img className=" mb-3" src={img1} alt="" />
            <p className=" text-lg">با کارشناسان بیاموزید</p>
            <p>متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
          </div>
          <div className=" flex flex-col items-center justify-between bg-white w-[330px] gap-3 px-7 text-center py-5 rounded-lg shadow-md pb-10">
            <img className=" mb-3" src={img2} alt="" />
            <p className=" text-lg">با کارشناسان بیاموزید</p>
            <p>متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
          </div>
          <div className=" flex flex-col items-center justify-between bg-white w-[330px] gap-3 px-7 text-center py-5 rounded-lg shadow-md pb-10">
            <img className=" mb-3" src={img3} alt="" />
            <p className=" text-lg">با کارشناسان بیاموزید</p>
            <p>متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
          </div>
          <div className=" flex flex-col items-center justify-between bg-white w-[330px] gap-3 px-7 text-center py-5 rounded-lg shadow-md pb-10">
            <img className=" mb-3" src={img4} alt="" />
            <p className=" text-lg">با کارشناسان بیاموزید</p>
            <p>متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
