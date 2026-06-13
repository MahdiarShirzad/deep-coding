import React from "react";
import "./accardion.scss";
import { useSearchParams } from "react-router-dom";

const courseCategories = [
  "برنامه نویسی وب",
  "برنامه نویسی موبایل",
  "هوش مصنوعی و یادگیری ماشین",
  "دیتا ساینس",
  "بک‌اند و پایگاه داده",
  "DevOps و Cloud",
  "امنیت و شبکه",
];

const CourseCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("categories")?.split(",") || [];

  const handleCategoryToggle = (category) => {
    const newSelectedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((c) => c !== category)
      : [...selectedCategory, category];

    const newParams = new URLSearchParams(searchParams);

    if (newSelectedCategory.length > 0) {
      newParams.set("categories", newSelectedCategory.join(","));
    } else {
      newParams.delete("categories");
    }

    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <div className="tab mb-4">
      <input type="checkbox" id="chck11" />
      <label className="tab-label" htmlFor="chck11">
        دسته بندی ها
      </label>
      <div className="tab-content text-sm">
        {courseCategories.map((category, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center my-1 gap-3 text-base">
              <input
                className="checked:accent-gray-800 rounded-full w-3 h-4 cursor-pointer"
                type="checkbox"
                name={category}
                id={category}
                checked={selectedCategory.includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              <label
                className="text-gray-800 cursor-pointer"
                htmlFor={category}
              >
                {category}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
