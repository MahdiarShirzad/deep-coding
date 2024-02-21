import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart";

const CoursePreview = ({ selectedCourse }) => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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

  const userId = useSelector((state) => state.auth.user && state.auth.user.id);

  const handleAddToCartClick = () => {
    if (isAuthenticated) {
      const item = {
        itemId: selectedCourse.id, // باید از یک آیدی یکتا استفاده شود
        img: selectedCourse.img,
        name: selectedCourse.name,
        teacher: selectedCourse.teacher,
        star: selectedCourse.star,
        lectures: selectedCourse.lectures,
        time: selectedCourse.time,
        level: selectedCourse.level,
        price: selectedCourse.price,
      };
      dispatch(addToCart({ userId, newItem: item }));
    }
  };

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
      <button
        onClick={handleAddToCartClick}
        className={`bg-violet-600 mt-3 w-[300px] block mx-auto py-3 rounded-md text-white ${
          !isAuthenticated && `cursor-not-allowed`
        }`}
      >
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
