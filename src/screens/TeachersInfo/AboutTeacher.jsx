import React from "react";

const AboutTeacher = ({ teacher }) => {
  const aboutText = teacher?.teacherInfo?.about;

  if (!aboutText) return null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">درباره مدرس</h2>
      <div className="leading-relaxed sm:leading-loose text-base sm:text-lg text-slate-600 text-justify">
        {aboutText}
      </div>
    </div>
  );
};

export default AboutTeacher;
