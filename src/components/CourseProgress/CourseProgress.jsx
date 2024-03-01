import React from "react";

const CourseProgress = ({ courseName, completionPercentage }) => {
  return (
    <div className=" w-[500px]">
      <div className="h-2 relative">
        <div className="flex gap-1">
          <p>{completionPercentage}</p>
          <p>درصد</p>
        </div>
        <div
          className="bg-blue-200 h-full my-2 rounded- absolute left-0 rounded-tl-full rounded-bl-full"
          style={{ width: `${100 - completionPercentage}%` }}
        />
        <div
          className="bg-blue-500 h-full my-2 rounded-tr-full rounded-br-full"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default CourseProgress;
