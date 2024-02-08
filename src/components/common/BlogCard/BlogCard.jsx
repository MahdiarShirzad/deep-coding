import React from "react";
import img from "../../../assets/images/home-3/blog/1.png";

const BlogCard = () => {
  return (
    <div className="w-[300px] px-4 py-4 rounded-lg shadow-md shadow-gray-200 mb-4">
      <img className="" src={img} alt="" />
      <h6 className=" text-purple-500 mt-4">طراحی وب</h6>
      <h5 className=" text-sky-900 text-lg mt-3 font-medium">
        7 قابلیت بهینه شده برای LINQ در Net 6.
      </h5>
      <div className=" flex mt-5 items-center justify-between px-3">
        <p className="text-sm text-gray-400">16 مهر 1406</p>
        <button className=" bg-sky-900 text-white px-4 py-2 text-sm font-thin rounded-lg">
          مشاهده
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
