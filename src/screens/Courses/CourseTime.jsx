import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const timeRanges = [
  { min: 3, max: 12 },
  { min: 13, max: 20 },
  { min: 20, max: 40 },
  { min: 40, max: Infinity },
];

const CourseTime = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);

  const selectedTimeRange =
    searchParams
      .get("times")
      ?.split(",")
      .map((time) => {
        const [min, max] = time.split("-");
        return {
          min: Number(min),
          max: max === "Infinity" ? Infinity : Number(max),
        };
      }) || [];

  const handleTimeRangeToggle = (min, max) => {
    const isSelected = selectedTimeRange.some(
      (r) => r.min === min && r.max === max,
    );

    const newSelectedTimeRange = isSelected
      ? selectedTimeRange.filter((r) => r.min !== min || r.max !== max)
      : [...selectedTimeRange, { min, max }];

    const newParams = new URLSearchParams(searchParams);

    if (newSelectedTimeRange.length > 0) {
      newParams.set(
        "times",
        newSelectedTimeRange
          .map((r) => `${r.min}-${r.max === Infinity ? "Infinity" : r.max}`)
          .join(","),
      );
    } else {
      newParams.delete("times");
    }

    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 group"
      >
        <span className="text-base font-bold text-slate-800 transition-colors group-hover:text-blue-600">
          مدت دوره
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 mt-3">
              {timeRanges.map(({ min, max }) => {
                const isChecked = selectedTimeRange.some(
                  (r) => r.min === min && r.max === max,
                );
                return (
                  <label
                    key={`${min}-${max}`}
                    className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors group"
                  >
                    <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={isChecked}
                        onChange={() => handleTimeRangeToggle(min, max)}
                      />
                      <div
                        className={`w-full h-full rounded border-2 transition-all duration-200 flex items-center justify-center
                        ${isChecked ? "bg-slate-600 border-slate-600" : "bg-white border-slate-300 group-hover:border-slate-400"}`}
                      >
                        <svg
                          className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${isChecked ? "scale-100" : "scale-0"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span
                      className={`text-sm select-none transition-colors duration-200 ${isChecked ? "text-slate-900 font-medium" : "text-slate-600"}`}
                    >
                      {max === Infinity
                        ? `بیشتر از ${min} ساعت`
                        : `${min} تا ${max} ساعت`}
                    </span>
                  </label>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseTime;
