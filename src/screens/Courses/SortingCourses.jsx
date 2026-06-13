import React from "react";
import { useSearchParams } from "react-router-dom";

const sortOptions = [
  { label: "جدیدترین", value: "-createdAt" },
  { label: "محبوب ترین", value: "-ratingsAverage" },
  { label: "ارزان‌ترین", value: "price" },
  { label: "گران‌ترین", value: "-price" },
];

const SortingCourses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "-createdAt";

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", e.target.value);
    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <select
      value={currentSort}
      onChange={handleSortChange}
      className="border rounded px-2 py-1 text-sm cursor-pointer"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortingCourses;
