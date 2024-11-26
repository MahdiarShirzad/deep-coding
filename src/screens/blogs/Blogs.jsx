import React from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiBlogs";
import { Spinner } from "../../components/Spinner/Spinner";
import { motion } from "framer-motion";
import SearchBlogs from "../../components/SearchBlogs/SearchBlogs";

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const blogCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h3 className="mt-36 text-2xl font-medium max-lg:mr-10">لیست وبلاگ</h3>
      <p className="mt-4 text-gray-700 max-lg:mr-10">
        با خواندن مقالات آموزشی و به روز در حوزه برنامه نویسی و تکنولوژی، از
        جدیدترین ترندها و بهترین روش های کدنویسی مطلع شو و دانش خود را به روز
        نگه دار
      </p>
      <div className="flex justify-between items-center">
        <div className="w-full px-10">
          <SearchBlogs products={blogs} />
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center mt-10">
          <Spinner />
        </div>
      )}

      {!isLoading && (!blogs || blogs.length === 0) && (
        <p className="text-center mt-10 text-2xl text-gray-600">
          وبلاگی یافت نشد!
        </p>
      )}

      {/* Blogs List */}
      {!isLoading && blogs && blogs.length > 0 && (
        <div className="flex items-start justify-between mt-32 gap-7">
          <div className="w-full justify-between px-10 flex flex-wrap max-lg:mx-auto">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                variants={blogCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
