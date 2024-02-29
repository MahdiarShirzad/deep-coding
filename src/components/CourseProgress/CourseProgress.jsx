import React from "react";

const CourseProgress = ({ courseName, completionPercentage }) => {
  return (
    <div>
      <p>درصد پیشرفت: {completionPercentage}%</p>
      <div className="bg-gray-300 h-8">
        <div className=" flex gap-1">
          <p>{completionPercentage}</p>
          <p>درصد</p>
        </div>
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default CourseProgress;
