import React from "react";
import "./accardion.scss";
import { useSearchParams } from "react-router-dom";

const timeRanges = [
  { min: 3, max: 12 },
  { min: 13, max: 20 },
  { min: 20, max: 40 },
  { min: 40, max: Infinity },
];

const CourseTime = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTimeRange =
    searchParams
      .get("times")
      ?.split(",")
      .map((time) => {
        const [min, max] = time.split("-");
        return {
          min: Number(min),
          max: max === "Infinity" ? Infinity : Number(max),
        };
      }) || [];

  const handleTimeRangeToggle = (min, max) => {
    const isSelected = selectedTimeRange.some(
      (r) => r.min === min && r.max === max,
    );

    const newSelectedTimeRange = isSelected
      ? selectedTimeRange.filter((r) => r.min !== min || r.max !== max)
      : [...selectedTimeRange, { min, max }];

    const newParams = new URLSearchParams(searchParams);

    if (newSelectedTimeRange.length > 0) {
      newParams.set(
        "times",
        newSelectedTimeRange
          .map((r) => `${r.min}-${r.max === Infinity ? "Infinity" : r.max}`)
          .join(","),
      );
    } else {
      newParams.delete("times");
    }

    newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <div className="tab border-t-2">
      <input type="checkbox" id="chck5" />
      <label className="tab-label" htmlFor="chck5">
        مدت دوره
      </label>
      <div className="tab-content text-sm">
        {timeRanges.map(({ min, max }) => (
          <div
            key={`${min}-${max}`}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2 my-1">
              <input
                className="checked:accent-zinc-500 w-3 h-3"
                type="checkbox"
                name="sortByTime"
                id={`${min}-${max}`}
                checked={selectedTimeRange.some(
                  (r) => r.min === min && r.max === max,
                )}
                onChange={() => handleTimeRangeToggle(min, max)}
              />
              <label className="cursor-pointer" htmlFor={`${min}-${max}`}>
                {max === Infinity
                  ? `بیشتر از ${min} ساعت`
                  : `${min}-${max} ساعت`}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTime;
