import React, { useEffect } from "react";
import app from "../../assets/images/home-6/app/1.png";
import apple from "../../assets/images/app/buttons/1.svg";
import googleplay from "../../assets/images/app/buttons/2.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const ProgramDownloadSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);
  return (
    <div
      className=" container max-w-[1320px] max-lg:hidden mx-auto flex bg-sky-100 mt-32 justify-between items-center font-iransans px-20 py-24 rounded-2xl mb-20"
      data-aos="fade-up"
    >
      <div>
        <p className="text-3xl font-medium">برنامه را دانلود کنید</p>
        <p className="text-gray-500 mt-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
        </p>
        <div className="flex items-center gap-6 mt-8">
          <button>
            <img src={apple} alt="" />
          </button>
          <button>
            <img src={googleplay} alt="" />
          </button>
        </div>
      </div>
      <div>
        <img src={app} alt="" />
      </div>
    </div>
  );
};

export default ProgramDownloadSection;
