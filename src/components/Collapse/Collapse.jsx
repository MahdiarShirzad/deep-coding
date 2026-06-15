import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
    desc: "بله، برای دانشجویان تخفیف‌های ویژه در نظر گرفته شده است. برای دریافت آن با پشتیبانی در ارتباط باشید.",
  },
  {
    title: "آیا امکان بازگشت وجه وجود دارد؟",
    desc: "تا 30 روز پس از خرید، در صورت نارضایتی امکان بازگشت وجه وجود دارد.",
  },
  {
    title: "دسترسی به دوره‌ها چقدر است؟",
    desc: "تمامی دوره‌ها به صورت مادام‌العمر در اختیار شما خواهند بود.",
  },
  {
    title: "آیا مدرک ارائه می‌شود؟",
    desc: "بله، پس از اتمام دوره گواهی پایان دوره دریافت خواهید کرد.",
  },
  {
    title: "آیا امکان ارتباط با مدرس هست؟",
    desc: "از طریق بخش Q&A می‌توانید با مدرس در ارتباط باشید.",
  },
];

const Collapse = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[900px] mx-auto space-y-4 ">
      {data.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all bg-[#E5F0FD] ${
              isOpen ? " shadow-lg border-gray-200" : " border-transparent "
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-right"
            >
              <span className="font-medium text-gray-800">{item.title}</span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl text-[#1A064F]"
              >
                +
              </motion.span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-gray-600 leading-8">
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Collapse;
