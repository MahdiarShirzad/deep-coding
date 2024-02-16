import React from "react";
import RenderStars from "../../components/RenderStars/RenderStars";
import CoursePreview from "./CoursePreview";
import { Link } from "react-router-dom";

const CourseHero = () => {
  return (
    <div className=" bg-gray-800 text-white font-iransans py-14">
      <div className=" max-w-[1320px] container mx-auto relative">
        <div className=" w-3/5">
          <h1 className=" text-right text-3xl font-bold">
            متخصص یادگیری ماشین و علم داده
          </h1>
          <p className=" mt-5 text-gray-300">
            تنها با یک دوره آموزشی به یک توسعه دهنده وب تمام پشته تبدیل شوید.
            HTML، CSS، Javascript، Node، React، PostgreSQL، Web3 و DApps
          </p>
          <div className=" flex gap-2 items-center  mt-12">
            <div className="flex gap-1 items-center">
              <RenderStars rating={3.9} />
            </div>
            <p className=" text-[#fcc419]">3.9</p>
            <p className=" text-sm mr-2">(581 رای)</p>
            <p className="text-sm mr-3">1376 دانش آموز</p>
          </div>
        </div>
        <div className=" flex items-center gap-2 mt-4">
          <p>مدرس :</p>
          <Link to="/teacher-info">
            <p className=" text-fuchsia-400">ممد</p>
          </Link>
        </div>
        <CoursePreview />
      </div>
    </div>
  );
};

export default CourseHero;
