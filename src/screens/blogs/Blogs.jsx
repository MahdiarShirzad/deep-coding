import React from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import BlogCategory from "./BlogCategory";
import LastBlogs from "./LastBlogs";
import BlogLabel from "./BlogLabel";

const Blogs = () => {
  return (
    <div className=" mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h3 className=" mt-36 text-2xl font-medium">لیست وبلاگ</h3>
      <p className=" mt-4 text-gray-700">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      <div className=" flex items-start justify-between mt-32 gap-7">
        <div className="w-4/5 flex flex-wrap justify-between">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="w-1/4 px-2">
          <BlogCategory />
          <LastBlogs />
          <BlogLabel />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
