import React, { useEffect, useState } from "react";

const CourseLevelSm = ({ setPosts, items }) => {
  const [selectedLevelType, setSelectedLevelType] = useState([]);

  const handleLevelTypeToggle = (levelType) => {
    if (selectedLevelType.includes(levelType)) {
      setSelectedLevelType(
        selectedLevelType.filter((type) => type !== levelType)
      );
    } else {
      setSelectedLevelType([...selectedLevelType, levelType]);
    }
  };

  const applyLevelFilter = () => {
    let filteredItems = [...items];

    if (selectedLevelType.length) {
      filteredItems = filteredItems.filter((course) =>
        selectedLevelType.includes(course.level)
      );
    }

    setPosts(filteredItems);
  };

  useEffect(() => {
    applyLevelFilter();
  }, [selectedLevelType]);
  const courseLevelTypes = ["همه سطوح", "مقدماتی", "متوسط", "پیشرفته"];

  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck44" />
      <label className="tab-label" for="chck44">
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
                id={`${levelType}1`}
                checked={selectedLevelType.includes(levelType)}
                onChange={() => handleLevelTypeToggle(levelType)}
              />
              <label htmlFor={`${levelType}1`}>{`${levelType}`}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLevelSm;
