import React, { useReducer } from "react";
import TopCoursesCard from "../../components/common/TopCoursesCard/TopCoursesCard";

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

const TopCourses = ({ courses }) => {
  const [selectedCategory, dispatch] = useReducer(categoryReducer, "all");

  const categories = ["all", "طراحی وب", "برنامه نویسی", "گرافیک"];

  const setCategory = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const coursesData = courses;

  const filteredCourses =
    selectedCategory === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <div className="mt-24 max-w-[1320px] mx-auto">
      <div className="flex font-iransans items-center justify-between">
        <div>
          <h3 className="text-3xl font-semibold">
            پرمخاطب ترین دوره ها را جستجو کنید
          </h3>
          <p className="text-sm mt-3 text-slate-600">
            بیش از 10000 طرح منحصر به فرد در لیست دوره های آنلاین
          </p>
        </div>
        <ul className="flex items-center justify-center gap-3 p-2 rounded-full bg-gray-200">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setCategory(category)}
              className={`px-4 py-2 rounded-full cursor-pointer ${
                selectedCategory === category ? "bg-white text-[#6440FB]" : ""
              }`}
            >
              {category === "all" ? "همه" : category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-between mt-10">
        {filteredCourses.slice(0, 6).map((course, index) => (
          <TopCoursesCard key={index} title={course.name} />
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
