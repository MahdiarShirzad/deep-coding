import React, { useEffect, useState } from "react";
import "./accardion.scss";
import RenderStars from "../../components/RenderStars/RenderStars";

const CourseStarSm = ({ setPosts, items }) => {
  const starRanges = [
    { min: 4.5, max: 5 },
    { min: 4, max: 5 },
    { min: 3.5, max: 5 },
    { min: 3, max: 5 },
  ];

  const [selectedStarRange, setSelectedStarRange] = useState([]);

  const handleStarRangeToggle = (min, max) => {
    const isRangeSelected = selectedStarRange.some(
      (range) => range.min === min && range.max === max
    );

    if (isRangeSelected) {
      setSelectedStarRange(
        selectedStarRange.filter(
          (range) => range.min !== min || range.max !== max
        )
      );
    } else {
      setSelectedStarRange([...selectedStarRange, { min, max }]);
    }
  };

  const applyStarFilter = () => {
    let filteredItems = [...items];

    if (selectedStarRange.length > 0) {
      filteredItems = filteredItems.filter((course) =>
        selectedStarRange.some(
          (range) => course.star >= range.min && course.star <= range.max
        )
      );
    }

    setPosts(filteredItems);
  };

  useEffect(() => {
    applyStarFilter();
  }, [selectedStarRange]);

  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck22" />

      <label className="tab-label" htmlFor="chck22">
        امتیاز
      </label>
      <div className="tab-content text-sm">
        {starRanges.map(({ min, max }) => (
          <div
            key={`${min}-${max}`}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2 my-1">
              <input
                className="checked:accent-zinc-500 w-3 h-3"
                type="checkbox"
                name="sortBy"
                id={`${min}-${max}1`}
                onChange={() => handleStarRangeToggle(min, max)}
              />

              <label
                className=" flex items-center gap-2"
                htmlFor={`${min}-${max}1`}
              >
                <div className="flex gap-1 w-[105px]">
                  <RenderStars rating={min} />
                </div>
                {`${min} به بالا`}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStarSm;
