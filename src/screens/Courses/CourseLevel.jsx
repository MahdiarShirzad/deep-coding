import React from "react";

const CourseLevel = ({
  sortByLevel,
  sortCoursesByLevel,
  handleLevelChange,
  sortedCoursesByLevel,
}) => {
  const courseLevelTypes = ["همه سطوح", "مقدماتی", "متوسط", "پیشرفته"];

  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck4" />
      <label className="tab-label" for="chck4">
        سطح
      </label>
      <div className="tab-content text-sm">
        {courseLevelTypes.map((levelType) => (
          <div key={levelType} className="flex items-center justify-between">
            <div className="flex items-center gap-2 my-1">
              <input
                className="checked:accent-zinc-500 w-3 h-3"
                type="checkbox"
                name="sortByLevel"
                id={levelType}
                onChange={() => handleLevelChange(levelType)}
              />
              <label htmlFor={levelType}>{`${levelType}`}</label>
            </div>
            <p className=" font-bold">({sortedCoursesByLevel.length})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLevel;
