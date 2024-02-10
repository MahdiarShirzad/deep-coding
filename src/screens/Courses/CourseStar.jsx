import React, { useEffect, useState } from "react";
import "./accardion.scss";

const CourseStar = ({ setPosts, items }) => {
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

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <svg
          class="w-[18px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fcc419"
          stroke="#fcc419"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    if (halfStar) {
      stars.push(
        <svg
          className="w-[15px]"
          viewBox="0 -0.02 60.031 60.031"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fcc419"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <defs>
              <style> </style>
            </defs>
            <path
              class="cls-1"
              d="M828.776,237.723l-11.4,8.657a3,3,0,0,0-.993,1.3,2.948,2.948,0,0,0-.162,1.618l3.078,17.135a3,3,0,0,1-1.275,3.011,3.161,3.161,0,0,1-3.326.147l-13.174-7.409a3.156,3.156,0,0,0-3.09,0L785.257,269.6a3.164,3.164,0,0,1-1.55.4,3.13,3.13,0,0,1-1.777-.551,3,3,0,0,1-1.274-3.011l3.076-17.135a2.929,2.929,0,0,0-.16-1.618,3,3,0,0,0-.993-1.3l-11.4-8.657a3,3,0,0,1-1.117-3.085,3.069,3.069,0,0,1,2.391-2.285l14.654-2.967a3.129,3.129,0,0,0,1.28-.577,3.02,3.02,0,0,0,.885-1.074l7.914-16.018a3.131,3.131,0,0,1,5.586,0l7.91,16.018a3.028,3.028,0,0,0,.884,1.074,3.162,3.162,0,0,0,1.281.577l14.655,2.967a3.07,3.07,0,0,1,2.394,2.285A3,3,0,0,1,828.776,237.723Zm-17.121-2.454a9.22,9.22,0,0,1-3.713-1.675,9.12,9.12,0,0,1-2.647-3.216L800,219.658v36.125a9.188,9.188,0,0,1,4.451,1.166l7.839,4.409-1.976-10.994a9.01,9.01,0,0,1,3.454-8.781l6.122-4.647Z"
              data-name="half rating"
              id="half_rating"
              transform="translate(-769.969 -210)"
            ></path>
          </g>
        </svg>
      );
    }

    const emptyStars = 5 - (filledStars + (halfStar ? 1 : 0));
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          <svg
            className="w-[21px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10.1437 6.62759C10.9303 4.6666 11.3236 3.6861 12 3.6861C12.6763 3.6861 13.0696 4.6666 13.8562 6.6276L13.8928 6.71891C14.3372 7.82678 14.5594 8.38071 15.0123 8.7174C15.4651 9.05409 16.0596 9.10733 17.2485 9.2138L17.4634 9.23305C19.4092 9.40732 20.3822 9.49445 20.5903 10.1134C20.7985 10.7324 20.076 11.3898 18.6309 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1415 16.8809 14.5776C16.8491 14.659 16.8227 14.7423 16.8018 14.8271C16.6897 15.2818 16.7968 15.7645 17.0111 16.73L17.0777 17.0305C17.4714 18.8049 17.6682 19.692 17.3246 20.0747C17.1961 20.2177 17.0292 20.3206 16.8438 20.3712C16.3476 20.5066 15.6431 19.9326 14.2342 18.7845C13.309 18.0306 12.8464 17.6537 12.3153 17.5689C12.1064 17.5355 11.8935 17.5355 11.6846 17.5689C11.1535 17.6537 10.6909 18.0306 9.76577 18.7845C8.35681 19.9326 7.65234 20.5066 7.15614 20.3712C6.97072 20.3206 6.80381 20.2177 6.67538 20.0747C6.33171 19.692 6.52854 18.8049 6.92222 17.0305L6.98889 16.73C7.2031 15.7645 7.31021 15.2818 7.19815 14.8271C7.17725 14.7423 7.15081 14.659 7.11901 14.5776C6.94854 14.1415 6.58279 13.8087 5.85128 13.1432L5.369 12.7044C3.92395 11.3898 3.20143 10.7324 3.40961 10.1134C3.61779 9.49445 4.5907 9.40732 6.53651 9.23305L6.75145 9.2138C7.94036 9.10733 8.53482 9.05409 8.98767 8.7174C9.44052 8.38071 9.66272 7.82678 10.1071 6.71891L10.1437 6.62759Z"
                fill="#2A4157"
                fill-opacity="0.24"
                stroke-width="1.4"
              ></path>{" "}
            </g>
          </svg>
        </span>
      );
    }

    return stars;
  };

  useEffect(() => {
    applyStarFilter();
  }, [selectedStarRange]);

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
                onChange={() => handleStarRangeToggle(min, max)}
              />

              <label
                className=" flex items-center gap-2"
                htmlFor={`${min}-${max}`}
              >
                <div className="flex gap-1 w-[105px]">{renderStars(min)}</div>
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
