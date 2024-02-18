import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";

const CoursePreview = ({ selectedCourse }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 170;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        !isScrolled ? `absolute top-14 left-14` : "fixed top-20 left-[155px]"
      } rounded-lg bg-white text-black w-[350px] shadow-md shadow-gray-100 z-[300] transition-none`}
    >
      <div>
        <ReactPlayer
          ref={playerRef}
          className=" w-full rounded-xl"
          url={selectedCourse.video}
          playing={isPlaying}
          controls={true}
          width="100%"
          height="100%"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
      <div className=" flex mt-3 gap-2 text-xl font-medium mr-3">
        <span className=" font-semibold">
          {selectedCourse.price === 0 ? "رایگان" : selectedCourse.price}
        </span>
        {selectedCourse.price !== 0 && <span>تومان</span>}
      </div>
      <button className=" bg-violet-600 mt-3 w-[300px] block mx-auto py-3 rounded-md text-white">
        افزودن به سبد خرید
      </button>
      <div className=" mr-3 mt-8 mb-6">
        <p>این دوره شامل:</p>
        <ul className=" text-[13px] mt-2 mr-2">
          <li>{selectedCourse.time} ساعت آموزش</li>
          <li>20 تمرین</li>
          <li>گواهی پایان دوره</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursePreview;
