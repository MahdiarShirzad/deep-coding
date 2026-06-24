import React from "react";
import CourseSectionCollapse from "./CourseSectionCollapse";

const CourseHeadline = ({ selectedCourse }) => {
  const sections = selectedCourse?.sections;

  if (!sections || sections.length === 0) return null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 font-iransans">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">سرفصل‌های دوره</h2>

      <div className="space-y-3">
        <CourseSectionCollapse sections={sections} />
      </div>
    </div>
  );
};

export default CourseHeadline;
