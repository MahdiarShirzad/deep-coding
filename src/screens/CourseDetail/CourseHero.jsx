import React from "react";
import RenderStars from "../../components/RenderStars/RenderStars";
import CoursePreview from "./CoursePreview";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUser } from "../../services/apiAuth";

const CourseHero = ({ selectedCourse, teachers, user }) => {
  if (teachers && teachers.length > 0) {
    var teacher = teachers?.find((t) => t.name === selectedCourse?.teacher);
  }

  const handleAddToWishList = () => {
    const currentWishList = user?.user_metadata.wishlist || [];

    const courseExists = currentWishList.some(
      (course) => course.id === selectedCourse.id
    );
    if (courseExists) {
      toast.error("این دوره قبلاً به سبد خرید افزوده شده است!", {
        position: "top-center",
      });
      return;
    }

    const updatedCourses = [...currentWishList, selectedCourse];

    const updates = {
      wishlist: updatedCourses,
    };

    if (user) {
      updateUser(updates);
      toast.success("دوره به غلاقه مندی ها  افزوده شد!", {
        position: "top-center",
      });
    } else {
      toast.error("خطا در افزودن به علاقه مندی ها !");
    }
  };

  return (
    <div className=" bg-gray-800 text-white font-iransans py-14">
      <div className=" max-w-[1320px] container mx-auto relative max-xl:px-8 max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-10">
        <div className=" w-3/5 max-lg:mx-auto">
          <h1 className=" text-right text-3xl font-bold">
            {selectedCourse?.name}
          </h1>
          <p className=" mt-5 text-gray-300 text-justify">
            {selectedCourse?.desc}
          </p>
          <div className=" flex gap-2 items-center  mt-12">
            <div className="flex gap-1 items-center">
              <RenderStars rating={selectedCourse?.star} />
            </div>
            <p className=" text-[#fcc419]">{selectedCourse?.star}</p>
            <p className=" text-sm mr-2">(581 رای)</p>
            <p className="text-sm mr-3">1376 دانش آموز</p>
          </div>
          <div className=" flex items-center gap-2 mt-4">
            <p>مدرس :</p>
            <Link to={`/teacher-info/${teacher?.id}`}>
              <p className=" text-fuchsia-400">{selectedCourse?.teacher}</p>
            </Link>
          </div>
          <button
            onClick={handleAddToWishList}
            className=" mt-4  flex gap-2 items-center border px-3 py-2 rounded-lg bg-slate-200 text-black"
          >
            <svg
              className="w-[30px]"
              viewBox="0 0 64 64"
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
                  d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
                  stroke="#000"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p>افزودن به علاقه مندی ها</p>
          </button>
        </div>
        <CoursePreview selectedCourse={selectedCourse} user={user} />
      </div>
    </div>
  );
};

export default CourseHero;
