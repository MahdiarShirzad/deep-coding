import React, { useEffect, useState, useRef } from "react";
import avatar1 from "../../assets/images/home-3/testimonials/1.png";
import avatar2 from "../../assets/images/home-3/testimonials/2.png";
import avatar3 from "../../assets/images/home-3/testimonials/3.png";
import avatar4 from "../../assets/images/home-3/testimonials/4.png";
import avatar5 from "../../assets/images/home-3/testimonials/5.png";
import { motion, AnimatePresence } from "framer-motion";

const StudentsComments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const slides = [
    {
      role: "آرین هاشمی",
      position: "طراح رابط کاربری",
      desc: "با Deep Coding تونستم مسیر یادگیریم رو دقیق و هدفمند جلو ببرم و خیلی سریع‌تر پیشرفت کنم.",
      avatar: avatar1,
    },
    {
      role: "الیسا نیکو",
      position: "توسعه‌دهنده بک‌اند",
      desc: "ساختار دوره‌ها و پروژه‌محور بودنش باعث شد واقعا مهارت عملی پیدا کنم، نه فقط تئوری.",
      avatar: avatar2,
    },
    {
      role: "سارا رضایی",
      position: "طراح گرافیک",
      desc: "کیفیت آموزش‌ها فوق‌العاده‌ست، همه چیز ساده و قابل فهم توضیح داده شده.",
      avatar: avatar3,
    },
    {
      role: "علی طاهری",
      position: "مدیر پروژه",
      desc: "این پلتفرم کمک کرد تیم ما سریع‌تر به نتیجه برسه و مهارت‌هاش رو ارتقا بده.",
      avatar: avatar4,
    },
    {
      role: "نیکا حسینی",
      position: "مارکتر",
      desc: "از یادگیری پراکنده نجات پیدا کردم و بالاخره یه مسیر مشخص دارم.",
      avatar: avatar5,
    },
  ];

  const duration = 5000;

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide, isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-36 container max-w-[1320px] mx-auto mb-32">
      <p className="text-3xl font-bold text-center">نظرات دانشجویان</p>
      <p className="text-center mt-4 text-gray-600">
        تجربه واقعی کسانی که با Deep Coding یاد گرفتن 🚀
      </p>

      <div
        className="relative w-[650px] mt-16 mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide */}
        <div className="relative h-[220px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full px-10 py-10 text-center"
            >
              <p className="leading-7 text-gray-700">
                {slides[currentSlide].desc}
              </p>

              <p className="mt-7 font-semibold">
                {slides[currentSlide].role}
              </p>

              <p className="text-sm text-gray-500">
                {slides[currentSlide].position}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[3px] bg-gray-200 mt-4 rounded overflow-hidden">
          <motion.div
            key={currentSlide}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className="h-full bg-[#1A064F]"
          />
        </div>

        {/* Avatars */}
        <div className="mt-6 flex justify-center gap-3">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.1 }}
              className={`p-1 rounded-full cursor-pointer ${
                index === currentSlide
                  ? "ring-2 ring-[#1A064F]"
                  : "opacity-60"
              }`}
            >
              <motion.img
                src={slide.avatar}
                alt=""
                className="w-10 h-10 rounded-full"
                animate={
                  index === currentSlide
                    ? { scale: [1, 1.1, 1] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsComments;