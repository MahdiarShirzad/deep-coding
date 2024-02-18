import React from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";

const BlogSection = ({ blogs }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" container mx-auto max-w-[1320px] font-iransans mt-20">
      <div className="flex items-center justify-between ">
        <div className="">
          <h3 className=" text-3xl font-bold">وبلاگ</h3>
          <p className="mt-5 text-slate-500">
            لورم ایپسوم متن ساختگی با تولید سادگی است.
          </p>
        </div>
        <Link onClick={scrollToTop} to="/blogs">
          <Button>مشاهده همه</Button>
        </Link>
      </div>
      <div className="flex items-center justify-between mt-16">
        {blogs.slice(-4).map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
