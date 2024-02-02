import React from "react";

const CoursePrice = () => {
  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck3" />

      <label className="tab-label" for="chck3">
        قیمت
      </label>
      <div className="tab-content text-sm">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-3 h-3"
              type="radio"
              name=""
              id=""
            />
            <div></div>
            <label htmlFor="">همه</label>
          </div>
          <p>(32)</p>
        </div>
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-3 h-3"
              type="radio"
              name=""
              id=""
            />
            <div></div>
            <label htmlFor="">پولی</label>
          </div>
          <p>(32)</p>
        </div>
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-3 h-3"
              type="radio"
              name=""
              id=""
            />
            <div></div>
            <label htmlFor="">رایگان</label>
          </div>
          <p>(32)</p>
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;
