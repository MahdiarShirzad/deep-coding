import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/apiCart";

const CoursePreview = ({ selectedCourse }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const queryClient = useQueryClient();

  const cart = queryClient.getQueryData(["cart"]) ?? [];
  const user = queryClient.getQueryData(["user"]);
  const isRestricted = user?.role === "admin" || user?.role === "teacher";
  const isInCart = cart.some((item) => item?._id === selectedCourse?._id);

  const formattedPrice = selectedCourse?.price
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const addToCartHandler = async () => {
    if (isRestricted) return;
    try {
      if (isInCart) {
        toast.error("این دوره قبلاً در سبد خرید شماست!", {
          position: "top-center",
        });
        return;
      }
      const updatedCart = await addToCart(selectedCourse._id);
      queryClient.setQueryData(["cart"], updatedCart);
      queryClient.invalidateQueries(["user"]);
      toast.success("دوره با موفقیت به سبد خرید اضافه شد!", {
        position: "top-center",
      });
    } catch (err) {
      toast.error("خطا در افزودن به سبد خرید!");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
      <div className="w-full aspect-video bg-slate-900 relative">
        <ReactPlayer
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full"
          url={selectedCourse?.introductionVideo}
          playing={isPlaying}
          controls={true}
          width="100%"
          height="100%"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          light={true}
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-6 text-slate-800">
          <span className="text-3xl font-bold">
            {selectedCourse?.price === 0 ? "رایگان" : formattedPrice}
          </span>
          {selectedCourse?.price !== 0 && (
            <span className="text-lg text-slate-500">تومان</span>
          )}
        </div>

        <button
          onClick={addToCartHandler}
          disabled={isInCart || isRestricted} // ✅
          title={isRestricted ? "ادمین و مدرس امکان خرید ندارند" : ""}
          className={`w-full py-3.5 rounded-xl text-white font-medium text-lg transition-all duration-300 
            ${
              isInCart || isRestricted // ✅
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-violet-600 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/20 active:scale-[0.98]"
            }`}
        >
          {isRestricted // ✅
            ? "امکان خرید برای شما وجود ندارد"
            : isInCart
              ? "موجود در سبد خرید"
              : "افزودن به سبد خرید"}
        </button>

        <div className="mt-8 space-y-4">
          <p className="font-semibold text-slate-800 text-lg">این دوره شامل:</p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <span className="text-violet-600 text-xl">✓</span>
              <span>{selectedCourse?.time} ساعت آموزش ویدیویی</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-violet-600 text-xl">✓</span>
              <span>پروژه‌های واقعی و کاربردی برای بازار کار</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-violet-600 text-xl">✓</span>
              <span>ارائه گواهی معتبر پایان دوره</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
