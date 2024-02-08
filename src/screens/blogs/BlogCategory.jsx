import React from "react";

const BlogCategory = () => {
  return (
    <div>
      <div className="tab mb-4">
        <p className="text-lg">دسته بندی ها</p>
        <div className="tab-content text-sm mt-4">
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
    </div>
  );
};

export default BlogCategory;
