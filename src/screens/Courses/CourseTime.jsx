import React from "react";
import "./accardion.scss";

const CourseTime = ({
  setSortByTime,
  handleTimeChange,
  sortedCoursesByTime,
  sortByTime,
}) => {
  const timingTypes = [
    "کمتر از 3 ساعت",
    "بین 4 تا 7 ساعت",
    "بین 8 تا 18 ساعت",
    " بیشتر از 20 ساعت",
  ];

  return (
    <div className="tab border-t-2">
      <input type="checkbox" id="chck5" />
      <label className="tab-label" for="chck5">
        مدت دوره
      </label>
      <div className="tab-content text-sm">
        {" "}
        {timingTypes.map((timingType) => (
          <div key={timingType} className="flex items-center justify-between">
            <div className="flex items-center gap-2 my-1">
              <input
                className="checked:accent-zinc-500 w-3 h-3"
                type="checkbox"
                name="sortByPrice"
                id={timingType}
                onChange={() => handleTimeChange(timingType)}
              />
              <label htmlFor={timingType}>{`${timingType} `}</label>
            </div>
            <p className=" font-bold">({sortedCoursesByTime.length})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTime;
