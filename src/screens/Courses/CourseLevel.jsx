import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCourses } from "../../services/apiCourses";

const CourseLevel = ({ setPosts, items }) => {
  // const { data: items, isLoading } = useQuery({
  //   queryKey: ["courses"],
  //   queryFn: getCourses,
  // });

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLevelsFromParams = searchParams.get("levels")?.split(",") || [];

  const [selectedLevelType, setSelectedLevelType] = useState(
    selectedLevelsFromParams
  );

  const handleLevelTypeToggle = (levelType) => {
    const isLevelSelected = selectedLevelType.includes(levelType);
    let newSelectedLevelType;

    if (isLevelSelected) {
      newSelectedLevelType = selectedLevelType.filter(
        (type) => type !== levelType
      );
    } else {
      newSelectedLevelType = [...selectedLevelType, levelType];
    }

    setSelectedLevelType(newSelectedLevelType);

    if (newSelectedLevelType.length > 0) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        levels: newSelectedLevelType.join(","),
      });
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("levels");
      setSearchParams(newParams);
    }
  };

  useEffect(() => {
    if (items && items.length > 0) {
      var filteredItems = [...items];
    }

    if (selectedLevelType.length) {
      filteredItems = filteredItems.filter((course) =>
        selectedLevelType.includes(course.level)
      );
    }

    setPosts(filteredItems);
  }, [selectedLevelType, items, setPosts]);

  useEffect(() => {
    const newSelectedLevelType = searchParams.get("levels")?.split(",") || [];
    setSelectedLevelType(newSelectedLevelType);
  }, [searchParams]);

  const courseLevelTypes = ["همه سطوح", "مقدماتی", "متوسط", "پیشرفته"];

  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck4" />
      <label className="tab-label" htmlFor="chck4">
        سطح
      </label>
      <div className="tab-content text-sm">
        {courseLevelTypes.map((levelType) => (
          <div key={levelType} className="flex items-center justify-between">
            <div className="flex items-center gap-2 my-1">
              <input
                className="checked:accent-zinc-500 w-3 h-3"
                type="checkbox"
                name="sortByLevel"
                id={levelType}
                checked={selectedLevelType.includes(levelType)}
                onChange={() => handleLevelTypeToggle(levelType)}
              />
              <label
                className=" cursor-pointer"
                htmlFor={levelType}
              >{`${levelType}`}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLevel;
