import React from "react";
import TopCoursesCard from "../../components/common/TopCoursesCard/TopCoursesCard";

const TopCourses = () => {
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
          <li className="bg-white px-4 py-2 text-[#6440FB] rounded-full cursor-pointer">
            همه
          </li>
          <li className="px-4 py-2 rounded-full cursor-pointer">طراحی وب</li>
          <li className="px-4 py-2 rounded-full cursor-pointer">گرافیک</li>
          <li className="px-4 py-2 rounded-full cursor-pointer">
            برنامه نویسی
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-between mt-10">
        <TopCoursesCard />
        <TopCoursesCard />
        <TopCoursesCard />
        <TopCoursesCard />
        <TopCoursesCard />
        <TopCoursesCard />
      </div>
    </div>
  );
};

export default TopCourses;
