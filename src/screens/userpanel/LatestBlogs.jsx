import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/common/BlogCard/BlogCard";

const LatestBlogs = () => {
  const blogs = useSelector((state) => state.data.blogs);
  return (
    <>
      <p className=" mt-12 text-xl font-semibold">جدید ترین مقالات</p>
      <div className="w-4/6  flex items-center gap-7 mt-4">
        {blogs.slice(-2).map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </>
  );
};

export default LatestBlogs;
