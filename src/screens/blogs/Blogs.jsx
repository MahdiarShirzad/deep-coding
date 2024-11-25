import React from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import SearchCourses from "../../components/SearchCourses/SearchCourses";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiBlogs";
import { Spinner } from "../../components/Spinner/Spinner";
import { motion } from "framer-motion";

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  // Animation Variants
  const blogCardVariants = {
    hidden: { opacity: 0, x: 50 }, // Start invisible and below the viewport
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // Smooth easing for slide-in
      },
    },
  };

  return (
    <div className="mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h3 className="mt-36 text-2xl font-medium max-lg:mr-10">لیست وبلاگ</h3>
      <p className="mt-4 text-gray-700 max-lg:mr-10">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      <div className="flex justify-between items-center">
        <div className="w-full px-10">
          <SearchCourses products={blogs} />
        </div>
      </div>

      {/* Spinner while loading */}
      {isLoading && (
        <div className="flex justify-center mt-10">
          <Spinner />
        </div>
      )}

      {/* No Blogs Found */}
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
                viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
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
