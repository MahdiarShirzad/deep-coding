import React from "react";

const BlogCategory = ({ categories, handleCategoryToggle }) => {
  return (
    <div>
      <div className="tab mb-4">
        <p className="text-lg">دسته بندی ها</p>
        <div className="tab-content text-sm mt-4">
          <div className="">
            {categories.map((category, i) => (
              <div key={i} className="flex items-center my-3 gap-5">
                <input
                  className="checked:accent-gray-800 rounded-full w-3 cursor-pointer"
                  type="checkbox"
                  name={category}
                  id={category}
                  onChange={() => handleCategoryToggle(category)}
                />{" "}
                <label
                  className="text-gray-800 font-yekanSemiBold text-base cursor-pointer"
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
