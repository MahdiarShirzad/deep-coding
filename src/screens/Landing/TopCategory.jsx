import React from "react";
import TopCategoriesSlider from "./TopCategoriesSlider";

const TopCategory = ({ items }) => {
  const uniqueCategories = [...new Set(items.map((item) => item.category))];
  return (
    <div className="mt-12 font-iransans max-w-[1320px]  container mx-auto">
      <h3 className="text-2xl font-semibold text-center">دسته بندی های برتر</h3>
      <p className="text-center mt-5">
        لورم ایپسوم متن ساختگی با تولید سادگی است.
      </p>
      <div>
        <TopCategoriesSlider uniqueCategories={uniqueCategories} />
      </div>
    </div>
  );
};

export default TopCategory;
