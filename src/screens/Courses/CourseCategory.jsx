import React from "react";
import "./accardion.scss";

const CourseCategory = ({ categories, handleCategoryToggle, courseCounts }) => {
  return (
    <div className="tab mb-4">
      <input type="checkbox" id="chck1" />
      <label className="tab-label" for="chck1">
        دسته بندی ها
      </label>
      <div className="tab-content text-sm">
        {categories.map((category, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center my-1 gap-3 text-base">
              <input
                className="checked:accent-gray-800 rounded-full w-5 h-4 cursor-pointer"
                type="checkbox"
                name={category}
                id={category}
                onChange={() => handleCategoryToggle(category)}
              />
              <label
                className="text-gray-800 cursor-pointer"
                htmlFor={category}
              >
                {category}
              </label>
            </div>
            <div className="font-bold">({courseCounts[category]})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
