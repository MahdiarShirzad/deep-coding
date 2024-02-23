import React from "react";

const BlogCategory = ({ categories, handleCategoryToggle }) => {
  return (
    <div>
      <div className="tab mb-4">
        <p className="text-xl">دسته بندی ها</p>
        <div className="tab-content text-sm mt-4">
          <div className="">
            {categories.map((category, i) => (
              <div key={i} className="flex items-center my-4 gap-5">
                <input
                  className=" hidden rounded-full w-3 cursor-pointer"
                  type="checkbox"
                  name={category}
                  id={category}
                  onChange={() => handleCategoryToggle(category)}
                />{" "}
                <label
                  className="text-gray-500 font-yekanSemiBold text-sm cursor-pointer"
                  htmlFor={category}
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
