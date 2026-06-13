import React from "react";
import "./accardion.scss";
import RenderStars from "../../components/RenderStars/RenderStars";
import { useSearchParams } from "react-router-dom";

const starRanges = [
  { min: 4.5, max: 5 },
  { min: 4, max: 5 },
  { min: 3.5, max: 5 },
  { min: 3, max: 5 },
];

const CourseStar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedStarRange =
    searchParams
      .get("stars")
      ?.split(",")
      .map((range) => {
        const [min, max] = range.split("-").map(Number);
        return { min, max };
      }) || [];

  const handleStarRangeToggle = (min, max) => {
    const isSelected = selectedStarRange.some(
      (r) => r.min === min && r.max === max,
    );

    const newSelectedStarRange = isSelected
      ? selectedStarRange.filter((r) => r.min !== min || r.max !== max)
      : [...selectedStarRange, { min, max }];

    const newParams = new URLSearchParams(searchParams);

    if (newSelectedStarRange.length > 0) {
      newParams.set(
        "stars",
        newSelectedStarRange.map((r) => `${r.min}-${r.max}`).join(","),
      );
    } else {
      newParams.delete("stars");
    }

    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck2" />
      <label className="tab-label" htmlFor="chck2">
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
                id={`${min}-${max}`}
                checked={selectedStarRange.some(
                  (r) => r.min === min && r.max === max,
                )}
                onChange={() => handleStarRangeToggle(min, max)}
              />
              <label
                className="flex items-center gap-2 cursor-pointer"
                htmlFor={`${min}-${max}`}
              >
                <div className="flex gap-1 w-[105px] cursor-pointer">
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

export default CourseStar;
