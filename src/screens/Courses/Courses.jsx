import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import CourseCategory from "./CourseCategory";
import CourseStar from "./CourseStar";
import CoursePrice from "./CoursePrice";
import CourseTime from "./CourseTime";
import CourseLevel from "./CourseLevel";

const Courses = () => {
  const [posts, setPosts] = useState([]);
  const [defaultPosts, setDefaultPosts] = useState([]);
  const [sortingOption, setSortingOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("پیش فرض");
  const [isOpen, setIsOpen] = useState(false);

  const sortPosts = (sortBy) => {
    if (sortBy === "") {
      const sortedPosts = [...posts].sort((a, b) => {
        const scoreA = parseFloat(a.score);
        const scoreB = parseFloat(b.score);
        return scoreB - scoreA;
      });
      setPosts(sortedPosts);
    }
    if (sortBy === "") {
      const sortedPosts = [...posts].sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceA - priceB;
      });
      setPosts(sortedPosts);
    }
    if (sortBy === "") {
      const sortedPosts = [...posts].sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceB - priceA;
      });
      setPosts(sortedPosts);
    }
    setSortingOption(sortBy);
  };

  const resetTodefault = () => {
    setPosts();
    setSortingOption("");
    setSelectedOption("");
    setIsOpen(false);
  };

  useEffect(() => {
    setDefaultPosts();
    setSortingOption("");
  }, []);

  const handleSort = (sortBy) => {
    sortPosts(sortBy);
    setSelectedOption(sortBy);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h2 className=" text-2xl mt-36 font-medium">لیست دوره ها</h2>
      <p className="mt-4">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      <div className="flex items-start justify-between mt-32 gap-8">
        <div className=" w-1/4">
          <CourseCategory />
          <CourseStar />
          <CoursePrice />
          <CourseLevel />
          <CourseTime />
        </div>
        <div className=" w-4/5">
          <div className=" flex items-center justify-between px-10">
            <p className="text-gray-600 text-sm">
              نمایش <span className=" text-gray-800 font-semibold">200 </span>
              نتیجه
            </p>
            <div className=" flex gap-3 items-center">
              <p className=" text-gray-600 text-sm">مرتب سازی :</p>
              <div>
                <div className="relative inline-block text-left">
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
                          onClick={() => handleSort("پیش فرض")}
                          className={`block px-4 py-2 text-sm cursor-pointer rounded-lg hover:bg-gray-500 ${
                            sortingOption === "" ? "bg-gray-500" : ""
                          }`}
                        >
                          پیش فرض
                        </li>

                        <li
                          onClick={() => handleSort("محبوب ترین")}
                          className={`block px-4 py-2 text-sm  hover:bg-gray-500 rounded-lg cursor-pointer ${
                            selectedOption === "محبوبیت" ? "bg-gray-500" : ""
                          } `}
                        >
                          محبوب ترین
                        </li>
                        <li
                          onClick={() => handleSort("بیشترین نمره")}
                          className={`block px-4 py-2 text-sm  hover:bg-gray-500 rounded-lg cursor-pointer ${
                            selectedOption === "بیشترین نمره"
                              ? "bg-gray-500"
                              : ""
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
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex items-center justify-between flex-wrap mt-7 px-2">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
            <div className="flex items-center justify-center">pagination</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
