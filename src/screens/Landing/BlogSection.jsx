import BlogCard from "../../components/common/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiBlogs";
import BlogCardSkeleton from "../../components/BlogCardSkeleton/BlogCardSkeleton";

const titleVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, type: "spring", stiffness: 120 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, type: "spring", stiffness: 120 },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0, // مهم: تاخیر صفر
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.995 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

const BlogSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["blogs", "landing"],

    queryFn: () =>
      getBlogs({
        limit: 3,
        sort: "-createdAt",
      }),
  });

  const blogs = data ?? [];

  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <div className="container mx-auto max-w-[1320px] font-iransans mt-20">
      <div className="flex max-lg:px-10 items-center justify-between max-md:gap-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={titleVariants}
        >
          <h3 className="text-3xl font-bold max-lg:text-xl max-sm:text-base">
            آخرین مطالب وبلاگ
          </h3>
          <p className="mt-5 text-slate-500 max-md:text-sm max-md:mt-2">
            کاوش در جدیدترین مطالب و نکات آموزشی برای پیشرفت شما.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={linkVariants}
        >
          <Link onClick={scrollToTop} to="/blogs">
            <Button>مشاهده همه مقالات</Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center flex-wrap max-lg:px-16 max-lg:flex-col max-lg:justify-center max-lg:items-center justify-between mt-16"
        variants={listContainer}
        initial="hidden"
        animate="visible"
        layout
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                className="w-full max-w-[320px] mx-2 my-4"
                variants={cardVariants}
                layout
              >
                <div
                  style={{ width: "320px", height: "220px" }}
                  className="rounded-lg overflow-hidden"
                >
                  <BlogCardSkeleton />
                </div>
              </motion.div>
            ))
          : blogs.map((blog) => (
              <motion.div
                key={blog._id}
                className="w-full max-w-[320px] mx-2 my-4"
                variants={cardVariants}
                layout
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
                }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
};

export default BlogSection;
