import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const courseLevelTypes = ["همه سطوح", "مقدماتی", "متوسط", "پیشرفته"];

const CourseLevel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);

  const selectedLevelType = searchParams.get("levels")?.split(",") || [];

  const handleLevelTypeToggle = (levelType) => {
    const newSelectedLevelType = selectedLevelType.includes(levelType)
      ? selectedLevelType.filter((type) => type !== levelType)
      : [...selectedLevelType, levelType];

    const newParams = new URLSearchParams(searchParams);

    if (newSelectedLevelType.length > 0) {
      newParams.set("levels", newSelectedLevelType.join(","));
    } else {
      newParams.delete("levels");
    }

    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <div className="mb-6 border-b border-slate-100 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 group"
      >
        <span className="text-base font-bold text-slate-800 transition-colors group-hover:text-blue-600">
          سطح دوره
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
              {courseLevelTypes.map((levelType) => {
                const isChecked = selectedLevelType.includes(levelType);
                return (
                  <label
                    key={levelType}
                    className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors group"
                  >
                    <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={isChecked}
                        onChange={() => handleLevelTypeToggle(levelType)}
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
                      {levelType}
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

export default CourseLevel;
