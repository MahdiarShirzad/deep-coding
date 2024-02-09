import React from "react";

const CoursePrice = ({
  sortByPrice,
  sortCoursesByPrice,
  handlePriceChange,
  sortedCoursesByPrice,
}) => {
  const priceTypes = ["همه", "پولی", "رایگان"];
  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck3" />

      <label className="tab-label" for="chck3">
        قیمت
      </label>
      <div className="tab-content text-sm">
        <div className=" my-1">
          {priceTypes.map((priceType) => (
            <div key={priceType} className="flex items-center justify-between">
              <div className="flex items-center gap-2 my-1">
                <input
                  className="checked:accent-zinc-500 w-3 h-3"
                  type="radio"
                  name="sortByPrice"
                  id={priceType}
                  checked={sortByPrice === priceType}
                  onChange={() => handlePriceChange(priceType)}
                />
                <label htmlFor={priceType}>{`${priceType} `}</label>
              </div>
              <p className=" font-bold">({sortedCoursesByPrice.length})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;
