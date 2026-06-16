import React from "react";
import { getBlogs } from "../../services/apiBlogs";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import BlogCardSkeleton from "../../components/BlogCardSkeleton/BlogCardSkeleton";
import SearchBlogs from "../../components/SearchBlogs/SearchBlogs";

const LIMIT = 10;

const Blogs = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["blogs"],
      // ✅ arrow function — QueryFunctionContext دیگه به getBlogs نمیرسه
      queryFn: ({ pageParam = 1 }) =>
        getBlogs({ page: pageParam, limit: LIMIT }),
      initialPageParam: 1, // برای TanStack Query v5 (اگه v4 داری این خط رو حذف کن)
      getNextPageParam: (lastPage, allPages) => {
        const total = lastPage.total;
        const loaded = allPages.reduce(
          (acc, p) => acc + (p.data?.blogs?.length ?? 0),
          0,
        );
        // اگه هنوز بلاگی مونده، شماره صفحه بعدی رو برگردون
        return loaded < total ? allPages.length + 1 : undefined;
      },
    });

  // صفحات مختلف رو flat میکنیم
  const blogs = data?.pages.flatMap((page) => page.data?.blogs ?? []) ?? [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
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
          <SearchBlogs />
        </div>
      </div>

      {/* Skeleton */}
      {isLoading && (
        <div className="flex items-start justify-between mt-32 gap-7">
          <div className="w-full justify-between px-10 flex flex-wrap max-lg:mx-auto">
            {[...Array(6)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      )}

      {/* Empty */}
      {!isLoading && blogs.length === 0 && (
        <p className="text-center mt-10 text-2xl text-gray-600">
          وبلاگی یافت نشد!
        </p>
      )}

      {/* Blogs List */}
      {blogs.length > 0 && (
        <motion.div
          className="flex items-start justify-between mt-32 gap-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full justify-between px-10 flex flex-wrap max-lg:mx-auto">
            {blogs.map((blog) => (
              <motion.div key={blog._id} variants={cardVariants}>
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {hasNextPage && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isFetchingNextPage ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
