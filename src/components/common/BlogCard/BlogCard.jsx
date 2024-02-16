import React from "react";
import img from "../../../assets/images/home-3/blog/1.png";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, category, date } = blog;
  return (
    <div className="w-[300px] px-4 py-4 rounded-lg shadow-md shadow-gray-200 mb-4">
      <img className="" src={img} alt="" />
      <h6 className=" text-purple-500 mt-4">{category}</h6>
      <h5 className=" text-sky-900 text-lg mt-3 font-medium">{title}</h5>
      <div className=" flex mt-5 items-center justify-between px-3">
        <p className="text-sm text-gray-400">{date}</p>
        <Link to="/blog-detail">
          <button className=" bg-[#140342] text-white px-4 py-2 text-sm font-thin rounded-lg">
            مشاهده
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
