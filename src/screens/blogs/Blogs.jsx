import React from "react";
import { getBlogs } from "../../services/apiBlogs";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import BlogCardSkeleton from "../../components/BlogCardSkeleton/BlogCardSkeleton";

const Blogs = () => {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["blogs", "all"],
    queryFn: () => getBlogs(),
  });

  console.log("data: ", data);

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
    </div>
  );
};

export default Blogs;
