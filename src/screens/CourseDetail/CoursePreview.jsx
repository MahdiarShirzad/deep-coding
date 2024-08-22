import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { updateUser } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const CoursePreview = ({ selectedCourse, user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const { isAuthenticated } = useSelector((state) => state.user);
  const { isError } = updateUser();

  const queryClient = useQueryClient();

  const formattedPrice = selectedCourse.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 260;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAddToCartClick = async () => {
    const currentCart = user?.user_metadata.cart || [];

    const courseExists = currentCart.some(
      (course) => course.id === selectedCourse.id
    );

    if (courseExists) {
      toast.error("این دوره قبلاً به سبد خرید افزوده شده است!", {
        position: "top-center",
      });
      return;
    }

    const updatedCourses = [...currentCart, selectedCourse];

    const updates = {
      cart: updatedCourses,
    };

    if (!isError) {
      updateUser(updates);
      toast.success("دوره به سبد خرید افزوده شد!", {
        position: "top-center",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    } else {
      toast.error("خطا در افزودن به سبد خرید!");
    }
  };

  return (
    <div
      className={` ${
        !isScrolled
          ? `lg:absolute lg:top-14 lg:left-[70px] max-lg:block `
          : "md:fixed top-2 max-2xl:left-[65px] left-[180px] max-lg:block"
      } rounded-lg bg-white text-black w-[350px] shadow-md shadow-gray-100 z-[300] mx-auto mt-16   max-lg:w-[600px]  transition-none max-md:w-96`}
    >
      <div className=" w-full h-48 max-md:w-96 ">
        <ReactPlayer
          ref={playerRef}
          className=" w-full rounded-xl h-full block"
          url={selectedCourse?.video}
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
          {selectedCourse?.price === 0 ? "رایگان" : formattedPrice}
        </span>
        {selectedCourse?.price !== 0 && <span>تومان</span>}
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
          <li>{selectedCourse?.time} ساعت آموزش</li>
          <li>20 تمرین</li>
          <li>گواهی پایان دوره</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursePreview;
