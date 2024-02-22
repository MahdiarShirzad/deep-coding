import React, { useEffect, useState } from "react";
import "./accardion.scss";

const CourseTimeSm = ({ items, setPosts }) => {
  const timeRanges = [
    { min: 0, max: 3 },
    { min: 4, max: 7 },
    { min: 8, max: 18 },
    { min: 20, max: Infinity }, // Use Infinity for the last range
  ];

  const [selectedTimeRange, setSelectedTimeRange] = useState([]);

  const handleTimeRangeToggle = (min, max) => {
    const isRangeSelected = selectedTimeRange.some(
      (range) => range.min === min && range.max === max
    );

    if (isRangeSelected) {
      setSelectedTimeRange(
        selectedTimeRange.filter(
          (range) => range.min !== min || range.max !== max
        )
      );
    } else {
      setSelectedTimeRange([...selectedTimeRange, { min, max }]);
    }
  };

  const applyTimeFilter = () => {
    let filteredItems = [...items];

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
  }, [selectedTimeRange]);

  return (
    <div className="tab border-t-2">
      <input type="checkbox" id="chck55" />
      <label className="tab-label" htmlFor="chck55">
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
                id={`${min}-${max}5`}
                onChange={() => handleTimeRangeToggle(min, max)}
              />
              <label htmlFor={`${min}-${max}5`}>
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

export default CourseTimeSm;
