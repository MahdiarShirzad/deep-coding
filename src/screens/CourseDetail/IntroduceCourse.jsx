import React from "react";
import parse from "html-react-parser";

const IntroduceCourse = ({ selectedCourse }) => {
  if (!selectedCourse?.introduction) return null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 font-iransans">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">معرفی دوره</h2>

      <article className="text-slate-600 text-base sm:text-lg leading-loose text-justify [&>p]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:mr-5 [&>ul]:mb-4">
        {parse(selectedCourse.introduction)}
      </article>
    </div>
  );
};

export default IntroduceCourse;
