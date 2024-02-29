import React, { useEffect, useState } from "react";
import img1 from "../../../assets/images/userpanel/latest-ai.jpg";
import img2 from "../../../assets/images/userpanel/latest-bigdata.jpg";
import img3 from "../../../assets/images/userpanel/latest-nextjs.jpg";

const AnnouncemntsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];
  const intervalDuration = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length, intervalDuration]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return (
    <div className=" relative w-full ">
      <div className=" overflow-hidden relative flex items-cent justify-center w-[600px] h-[400px] mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={` w-[600px] h-[400px] absolute transition-transform duration-1000 bg-white text-black px-14 py-10 rounded-   ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <img
              src={slide.img}
              className=" w-full h-full rounded-2xl"
              alt=""
            />
          </div>
        ))}
      </div>

      <div className=" flex items-center gap-3 justify-center">
        <div className=" cursor-pointer" onClick={nextSlide}>
          <svg
            className="w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M2 12.0701H22"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M16 5L21.16 10C21.4324 10.2571 21.6494 10.567 21.7977 10.9109C21.946 11.2548 22.0226 11.6255 22.0226 12C22.0226 12.3745 21.946 12.7452 21.7977 13.0891C21.6494 13.433 21.4324 13.7429 21.16 14L16 19"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className=" flex mb-1  justify-center">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full cursor-pointer transition-opacity duration-500 ${
                index === currentSlide
                  ? "bg-[#6440FB] transition-opacity duration-500"
                  : "bg-gray-300 transition-opacity duration-500"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className=" cursor-pointer" onClick={prevSlide}>
          <svg
            className="w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M22 11.9299H2"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M8.00009 19L2.84009 14C2.5677 13.7429 2.35071 13.433 2.20239 13.0891C2.05407 12.7452 1.97754 12.3745 1.97754 12C1.97754 11.6255 2.05407 11.2548 2.20239 10.9109C2.35071 10.567 2.5677 10.2571 2.84009 10L8.00009 5"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnnouncemntsCarousel;
