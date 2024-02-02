import React from "react";
import "./accardion.scss";

const CourseCategory = () => {
  return (
    <div className="tab mb-4">
      <input type="checkbox" id="chck1" />
      <label className="tab-label" for="chck1">
        دسته بندی ها
      </label>
      <div className="tab-content text-sm">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-4 h-4"
              type="checkbox"
              name=""
              id=""
            />
            <label className="" htmlFor="">
              JS
            </label>
          </div>
          <p className="">(32)</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
