import React from "react";
import "./accardion.scss";

const CourseTime = () => {
  return (
    <div className="tab border-t-2">
      <input type="checkbox" id="chck5" />
      <label className="tab-label" for="chck5">
        مدت دوره
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
              کمتر از 3 ساعت
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
              بین 4 تا 7 ساعت
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
              بین 8 تا 18 ساعت
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
              بیشتر از 20 ساغت
            </label>
          </div>
          <p className="">(32)</p>
        </div>
      </div>
    </div>
  );
};

export default CourseTime;
