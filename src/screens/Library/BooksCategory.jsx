import React, { useEffect, useState } from "react";
import "./accardion.scss";

const BooksCategory = ({ items, setBooks }) => {
  const uniqueCategories = [...new Set(items.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleCategoryToggle = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(
        selectedCategory.filter(
          (selectedCategory) => selectedCategory !== category
        )
      );
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  useEffect(() => {
    if (selectedCategory.length > 0) {
      const filteredItems = items.filter((item) =>
        selectedCategory.includes(item.category)
      );
      setBooks(filteredItems);

      const counts = {};
      uniqueCategories.forEach((category) => {
        const categoryCount = filteredItems.filter(
          (item) => item.category === category
        ).length;
        counts[category] = categoryCount;
      });
    } else {
      setBooks(items);

      const counts = {};
      uniqueCategories.forEach((category) => {
        const categoryCount = items.filter(
          (item) => item.category === category
        ).length;
        counts[category] = categoryCount;
      });
    }
  }, [selectedCategory, items]);
  return (
    <div className="tab mb-4">
      <p className=" mb-4 text-xl font-bold">دسته بندی ها</p>
      <div className="tab-content text-sm">
        {uniqueCategories.map((category, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center my-1 gap-3 text-base">
              <input
                className="checked:accent-gray-800 rounded-full w-3 h-4 cursor-pointer "
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksCategory;
