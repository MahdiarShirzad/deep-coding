import React from "react";
import { useSearchParams } from "react-router-dom";

const courseLevelTypes = ["همه سطوح", "مقدماتی", "متوسط", "پیشرفته"];

const CourseLevel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLevelType = searchParams.get("levels")?.split(",") || [];

  const handleLevelTypeToggle = (levelType) => {
    const newSelectedLevelType = selectedLevelType.includes(levelType)
      ? selectedLevelType.filter((type) => type !== levelType)
      : [...selectedLevelType, levelType];

    const newParams = new URLSearchParams(searchParams);

    if (newSelectedLevelType.length > 0) {
      newParams.set("levels", newSelectedLevelType.join(","));
    } else {
      newParams.delete("levels");
    }

    newParams.delete("page");
    setSearchParams(newParams);
  };

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
              <label className="cursor-pointer" htmlFor={levelType}>
                {levelType}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLevel;
