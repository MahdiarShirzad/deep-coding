import React, { useEffect, useState } from "react";

const CoursePriceSm = ({ items, setPosts }) => {
  const priceTypes = ["همه", "پولی", "رایگان"];

  const [selectedPriceType, setSelectedPriceType] = useState([]);

  const handlePriceTypeToggle = (priceType) => {
    if (selectedPriceType.includes(priceType)) {
      setSelectedPriceType(
        selectedPriceType.filter((type) => type !== priceType)
      );
    } else {
      setSelectedPriceType([...selectedPriceType, priceType]);
    }
  };

  const applyPriceFilter = () => {
    if (items && items.length > 0) {
      var filteredItems = [...items];
    }

    if (selectedPriceType.includes("پولی")) {
      filteredItems = filteredItems.filter((course) => course.price !== 0);
    }

    if (selectedPriceType.includes("رایگان")) {
      filteredItems = filteredItems.filter((course) => course.price === 0);
    }

    setPosts(filteredItems);
  };

  useEffect(() => {
    applyPriceFilter();
  }, [selectedPriceType]);

  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck33" />

      <label className="tab-label" htmlFor="chck33">
        قیمت
      </label>
      <div className="tab-content text-sm">
        <div className=" my-1">
          {priceTypes.map((priceType) => (
            <div key={priceType} className="flex items-center justify-between">
              <div className="flex items-center gap-2 my-1">
                <input
                  className="checked:accent-gray-800 rounded-full w-3 h-4 cursor-pointer"
                  type="checkbox"
                  id={`${priceType}1`}
                  checked={selectedPriceType.includes(priceType)}
                  onChange={() => handlePriceTypeToggle(priceType)}
                />
                <label htmlFor={`${priceType}1`}>{`${priceType} `}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePriceSm;
