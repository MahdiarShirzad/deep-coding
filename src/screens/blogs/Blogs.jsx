import React from "react";
import { getBlogs } from "../../services/apiBlogs";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import BlogCardSkeleton from "../../components/BlogCardSkeleton/BlogCardSkeleton";

const Blogs = () => {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="mt-[120px] mb-24 font-iransans container max-w-[1320px] mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900">لیست وبلاگ‌ها</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
          با خواندن مقالات آموزشی و به‌روز در حوزه برنامه‌نویسی و تکنولوژی، دانش
          خود را ارتقا بده و همیشه یک قدم جلوتر باش.
        </p>
      </motion.div>

      {/* Search (در آینده) */}
      {/* <div className="mb-10">
        <SearchBlogs />
      </div> */}

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Blogs List */}
      {!isLoading && data && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.map((blog) => (
            <motion.div key={blog._id} variants={cardVariants}>
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Load More Button */}
      <div className="flex justify-center items-center mt-14">
        <button className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-300 flex items-center justify-center gap-2 text-white px-6 py-3 rounded-2xl shadow-md hover:shadow-lg">
          <p className="text-sm font-medium">بارگذاری بیشتر</p>

          <svg className="w-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
              stroke="#fff"
              strokeWidth="1.5"
            ></path>
            <path
              d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
              stroke="#fff"
              strokeWidth="1.5"
            ></path>
            <path
              d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              stroke="#fff"
              strokeWidth="1.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
