import React, { useEffect, useState } from "react";
import "./accardion.scss";
import { useSearchParams } from "react-router-dom";

const CourseTime = ({ items, setPosts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTimesFromParams = searchParams.get("times")?.split(",") || [];

  const [selectedTimeRange, setSelectedTimeRange] = useState(
    selectedTimesFromParams.map((time) => {
      const [min, max] = time.split("-");
      return {
        min: Number(min),
        max: Number(max) === Infinity ? Infinity : Number(max),
      };
    })
  );

  const timeRanges = [
    { min: 0, max: 3 },
    { min: 4, max: 7 },
    { min: 8, max: 18 },
    { min: 20, max: Infinity }, // Use Infinity for the last range
  ];

  const handleTimeRangeToggle = (min, max) => {
    const isRangeSelected = selectedTimeRange.some(
      (range) => range.min === min && range.max === max
    );

    let newSelectedTimeRange;

    if (isRangeSelected) {
      newSelectedTimeRange = selectedTimeRange.filter(
        (range) => range.min !== min || range.max !== max
      );
    } else {
      newSelectedTimeRange = [...selectedTimeRange, { min, max }];
    }

    setSelectedTimeRange(newSelectedTimeRange);

    if (newSelectedTimeRange.length > 0) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        times: newSelectedTimeRange
          .map(
            (range) =>
              `${range.min}-${range.max === Infinity ? "Infinity" : range.max}`
          )
          .join(","),
      });
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("times");
      setSearchParams(newParams);
    }
  };

  const applyTimeFilter = () => {
    if (items && items.length > 0) {
      var filteredItems = [...items];
    }

    if (selectedTimeRange.length > 0) {
      filteredItems = filteredItems.filter((course) =>
        selectedTimeRange.some(
          (range) =>
            course.time >= range.min &&
            (course.time <= range.max || range.max === Infinity)
        )
      );
    }

    setPosts(filteredItems);
  };

  useEffect(() => {
    applyTimeFilter();
  }, [selectedTimeRange, items]);

  useEffect(() => {
    const newSelectedTimeRange = searchParams.get("times")
      ? searchParams
          .get("times")
          .split(",")
          .map((time) => {
            const [min, max] = time.split("-");
            return {
              min: Number(min),
              max: max === "Infinity" ? Infinity : Number(max),
            };
          })
      : [];
    setSelectedTimeRange(newSelectedTimeRange);
  }, [searchParams]);

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
                  (range) => range.min === min && range.max === max
                )}
                onChange={() => handleTimeRangeToggle(min, max)}
              />
              <label className=" cursor-pointer" htmlFor={`${min}-${max}`}>
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
