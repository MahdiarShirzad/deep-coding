import React from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { Link } from "react-router-dom";

const BlogSection = () => {
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
          <button className="bg-[#F4F1FE] border-[#F4F1FE] px-8 py-4 rounded-xl text-[#6440FB] hover:text-white hover:bg-[#6440FB]">
            مشاهده همه
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-between mt-16">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogSection;
