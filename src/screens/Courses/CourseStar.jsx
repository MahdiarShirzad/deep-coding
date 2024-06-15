import React, { useEffect, useState } from "react";
import "./accardion.scss";
import RenderStars from "../../components/RenderStars/RenderStars";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";
import { useSearchParams } from "react-router-dom";

const CourseStar = ({ setPosts, items }) => {
  // const { data: items, isLoading } = useQuery({
  //   queryKey: ["courses"],
  //   queryFn: getCourses,
  // });

  const starRanges = [
    { min: 4.5, max: 5 },
    { min: 4, max: 5 },
    { min: 3.5, max: 5 },
    { min: 3, max: 5 },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedStarRangesFromParams =
    searchParams
      .get("stars")
      ?.split(",")
      .map((range) => {
        const [min, max] = range.split("-").map(Number);
        return { min, max };
      }) || [];

  const [selectedStarRange, setSelectedStarRange] = useState(
    selectedStarRangesFromParams
  );

  const handleStarRangeToggle = (min, max) => {
    const isRangeSelected = selectedStarRange.some(
      (range) => range.min === min && range.max === max
    );

    const newSelectedStarRange = isRangeSelected
      ? selectedStarRange.filter(
          (range) => range.min !== min || range.max !== max
        )
      : [...selectedStarRange, { min, max }];

    setSelectedStarRange(newSelectedStarRange);

    if (newSelectedStarRange.length > 0) {
      const starRangesString = newSelectedStarRange
        .map((range) => `${range.min}-${range.max}`)
        .join(",");
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        stars: starRangesString,
      });
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("stars");
      setSearchParams(newParams);
    }
  };

  const applyStarFilter = () => {
    if (items && items.length > 0) {
      let filteredItems = [...items];

      if (selectedStarRange.length > 0) {
        filteredItems = filteredItems.filter((course) =>
          selectedStarRange.some(
            (range) => course.star >= range.min && course.star <= range.max
          )
        );
      }

      setPosts(filteredItems);
    }
  };

  useEffect(() => {
    applyStarFilter();
  }, [selectedStarRange, items]);

  useEffect(() => {
    const newSelectedStarRange =
      searchParams
        .get("stars")
        ?.split(",")
        .map((range) => {
          const [min, max] = range.split("-").map(Number);
          return { min, max };
        }) || [];
    setSelectedStarRange(newSelectedStarRange);
  }, [searchParams]);

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
                  (range) => range.min === min && range.max === max
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
