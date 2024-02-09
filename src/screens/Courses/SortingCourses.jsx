import React from "react";

const SortingCourses = ({
  isOpen,
  toggleDropdown,
  selectedOption,
  handleSort,
  sortingOption,
  resetTodefault,
}) => {
  return (
    <>
      <div>
        <button
          type="button"
          className="inline-flex justify-end gap-2  rounded-md border border-gray-300 shadow-sm bg-gray-200 w-36 px-4 py-2 text-sm font-medium  focus:outline-none focus:border-blue-300  focus:ring-0"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className="w-4"
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
              <path
                d="m12 14.586 6.293-6.293a1 1 0 1 1 1.414 1.414l-6.646 6.647a1.5 1.5 0 0 1-2.122 0L4.293 9.707a1 1 0 0 1 1.414-1.414L12 14.586z"
                fill="#000"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute z-40 right-0 mt-2 text-right w-56 rounded-lg shadow-lg bg-gray-200  ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul
            className="py-1 flex flex-col gap-1 px-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li
              onClick={resetTodefault}
              className={`block px-4 py-2 text-sm cursor-pointer rounded-lg hover:bg-gray-500 ${
                sortingOption === "پیش فرض" ? "bg-gray-500" : ""
              }`}
            >
              پیش فرض
            </li>

            <li
              onClick={() => handleSort("محبوب ترین")}
              className={`block px-4 py-2 text-sm  hover:bg-gray-500 rounded-lg cursor-pointer ${
                selectedOption === "محبوب ترین" ? "bg-gray-500" : ""
              } `}
            >
              محبوب ترین
            </li>
            <li
              onClick={() => handleSort("بیشترین نمره")}
              className={`block px-4 py-2 text-sm  hover:bg-gray-500 rounded-lg cursor-pointer ${
                selectedOption === "بیشترین نمره" ? "bg-gray-500" : ""
              } `}
            >
              بیشترین نمره
            </li>
            <li
              onClick={() => handleSort("جدید ترین")}
              className={`block px-4 py-2 text-sm  hover:bg-gray-500 rounded-lg cursor-pointer ${
                selectedOption === "جدید ترین" ? "bg-gray-500" : ""
              } `}
            >
              جدید ترین
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SortingCourses;
