import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./accardion.scss";

const BooksCategory = ({ items, setBooks }) => {
  const uniqueCategories = [...new Set(items?.map((item) => item.category))];
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategoriesFromParams =
    searchParams.get("categories")?.split(",") || [];

  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoriesFromParams
  );

  const handleCategoryToggle = (category) => {
    const newSelectedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter(
          (selectedCategory) => selectedCategory !== category
        )
      : [...selectedCategory, category];

    setSelectedCategory(newSelectedCategory);

    if (newSelectedCategory.length > 0) {
      setSearchParams({ categories: newSelectedCategory.join(",") });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    if (selectedCategory.length > 0) {
      const filteredItems = items?.filter((item) =>
        selectedCategory.includes(item.category)
      );
      setBooks(filteredItems);
    } else {
      setBooks(items);
    }
  }, [selectedCategory, items]);

  useEffect(() => {
    const newSelectedCategory =
      searchParams.get("categories")?.split(",") || [];
    setSelectedCategory(newSelectedCategory);
  }, [searchParams]);

  return (
    <div className="tab mb-4">
      <p className="mb-4 text-xl font-bold">دسته بندی ها</p>
      <div className="tab-content text-sm">
        {uniqueCategories.map((category, index) => (
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

export default BooksCategory;
