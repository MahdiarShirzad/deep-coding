import React from "react";

const CourseRequirements = ({ selectedCourse }) => {
  const requirements = selectedCourse?.requirements;

  if (!requirements || requirements.length === 0) return null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 font-iransans">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        پیش‌نیازهای دوره
      </h2>

      <ul className="flex flex-col gap-3">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0"></span>
            <span className="text-base sm:text-lg text-slate-700">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRequirements;
