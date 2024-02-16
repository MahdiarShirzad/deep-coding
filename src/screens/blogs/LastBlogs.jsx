import React from "react";
import img from "../../assets/images/blog-list/2.png";
import { Link } from "react-router-dom";

const LastBlogs = ({ blogs }) => {
  return (
    <div className=" border-t">
      <p className=" my-3 text-lg">آخرین اخبار</p>
      <div>
        {blogs.slice(-3).map((blog, i) => (
          <Link key={i} to="/blog-detail">
            <div className="flex items-center gap-4 my-3 px-3 py-2 rounded-2xl shadow-md">
              <img className="w-16 rounded-xl" src={img} alt="" />
              <div>
                <p className="font-yekanSemiBold text-base mb-2">
                  {blog.title}
                </p>
                <p className=" text-xs text-gray-600">{blog.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastBlogs;
