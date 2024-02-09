import React from "react";
import "./accardion.scss";
import RenderStars from "../../components/RenderStars/RenderStars";

const CourseStar = ({ handleStarChange, sortedCoursesByStar, sortBy }) => {
  const starTypes = ["4.5", "4", "3.5", "3"];

  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck2" />

      <label className="tab-label" for="chck2">
        امتیاز
      </label>
      <div className="tab-content text-sm">
        {starTypes.map((starType) => (
          <div key={starType} className="flex items-center justify-between">
            <div className="flex items-center gap-2 my-1">
              <input
                className="checked:accent-zinc-500 w-3 h-3"
                type="radio"
                name="sortBy"
                id={starType}
                checked={sortBy === starType}
                onChange={() => handleStarChange(starType)}
              />
              <div className="flex gap-1">
                <RenderStars rating={starType} />
              </div>
              <label htmlFor={starType}>{`${starType} به بالا`}</label>
            </div>
            <p className=" font-bold">({sortedCoursesByStar.length})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStar;
