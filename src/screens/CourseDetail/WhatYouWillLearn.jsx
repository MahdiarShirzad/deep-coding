import React from "react";

const WhatYouWillLearn = ({ selectedCourse }) => {
  const willLearn = selectedCourse?.willLearn;

  if (!willLearn || willLearn.length === 0) return null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 font-iransans">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        در این دوره چه می‌آموزید؟
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {willLearn.map((learn, index) => (
          <li key={index} className="flex items-start gap-3 group">
            <svg
              className="w-6 h-6 text-violet-600 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
              {learn}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
