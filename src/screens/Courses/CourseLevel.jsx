import React from "react";

const CourseLevel = () => {
  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck4" />
      <label className="tab-label" for="chck4">
        سطح
      </label>
      <div className="tab-content text-sm">
        <div className=" flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-4 h-4"
              type="checkbox"
              name=""
              id=""
            />
            <label className="" htmlFor="">
              همه سطوح
            </label>
          </div>
          <p className="">(32)</p>
        </div>{" "}
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-4 h-4"
              type="checkbox"
              name=""
              id=""
            />
            <label className="" htmlFor="">
              مقدماتی
            </label>
          </div>
          <p className="">(32)</p>
        </div>{" "}
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-4 h-4"
              type="checkbox"
              name=""
              id=""
            />
            <label className="" htmlFor="">
              متوسط
            </label>
          </div>
          <p className="">(32)</p>
        </div>{" "}
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-4 h-4"
              type="checkbox"
              name=""
              id=""
            />
            <label className="" htmlFor="">
              پیشرفته
            </label>
          </div>
          <p className="">(32)</p>
        </div>
      </div>
    </div>
  );
};

export default CourseLevel;
