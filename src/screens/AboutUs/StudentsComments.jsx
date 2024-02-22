import React, { useEffect, useState } from "react";
import avatar1 from "../../assets/images/home-3/testimonials/1.png";
import avatar2 from "../../assets/images/home-3/testimonials/2.png";
import avatar3 from "../../assets/images/home-3/testimonials/3.png";
import avatar4 from "../../assets/images/home-3/testimonials/4.png";
import avatar5 from "../../assets/images/home-3/testimonials/5.png";

const StudentsComments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      student: "ممدحسن",
      position: "فرانت",
      desc: " “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”",
      avatar: avatar1,
    },
    {
      student: "ممدعلی",
      position: "بک اند",
      desc: " “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”",
      avatar: avatar2,
    },
    {
      student: "ممدرضا",
      position: "گرافیست",
      desc: " “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”",
      avatar: avatar3,
    },
    {
      student: "نقی",
      position: "بیکار",
      desc: " “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”",
      avatar: avatar4,
    },
    {
      student: "تقی",
      position: "رییس",
      desc: " “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”",
      avatar: avatar5,
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

  return (
    <div className=" mt-36 max-lg:mt-96 container max-w-[1320px] mx-auto mb-32">
      <p className=" text-2xl text-center max-lg:pt-36">دیدگاه هنرجویان</p>
      <p className=" text-center mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
      </p>
      <div>
        <div className=" relative w-[700px] mt-14 mx-auto">
          <div className=" overflow-hidden relative flex items-center justify-center w-full h-[300px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={` w-full absolute  transition-transform duration-1000 text-black px-14 py-10 rounded-2xl   ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 -translate-x-full"
                }`}
              >
                <p className=" leading-7 text-center">{slide.desc}</p>{" "}
                <p className=" mt-7 text-center mb-2 font-semibold">
                  {slide.student}
                </p>
                <p className=" text-sm text-center text-gray-700">
                  {slide.position}
                </p>
              </div>
            ))}
          </div>

          <div className=" mt-4 flex items-center gap-3 justify-center">
            <div className=" flex mb-1  justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={` p-2 mx-1 rounded-full  cursor-pointer transition-opacity duration-500 ${
                    index === currentSlide
                      ? " transition-opacity duration-500 border-2 border-gray-400"
                      : " transition-opacity duration-500"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <img src={slide.avatar} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsComments;
