import BlogCard from "../../components/common/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const titleVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
};

const cardVariants = (isEven) => ({
  hidden: {
    opacity: 0,
    x: isEven ? 200 : -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      // delay: 0.25,
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
});

const BlogSection = ({ blogs }) => {
  const titleRef = useRef(null);
  const linkRef = useRef(null);
  const cardRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const linkInView = useInView(linkRef, { once: true });
  const cardInView = useInView(cardRef, { once: true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className=" container mx-auto max-w-[1320px] font-iransans mt-20">
      <div className="flex max-lg:px-10 items-center justify-between max-md:gap-4">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
          className=""
        >
          <h3 className=" text-3xl font-bold max-lg:text-xl max-sm:text-base">
            آخرین مطالب وبلاگ
          </h3>
          <p className="mt-5 text-slate-500 max-md:text-sm max-md:mt-2">
            کاوش در جدیدترین مطالب و نکات آموزشی برای پیشرفت شما.
          </p>
        </motion.div>
        <motion.div
          ref={linkRef}
          initial="hidden"
          animate={linkInView ? "visible" : "hidden"}
          variants={linkVariants}
        >
          <Link onClick={scrollToTop} to="/blogs">
            <Button>مشاهده همه مقالات</Button>
          </Link>
        </motion.div>
      </div>
      <div className="flex items-center flex-wrap max-lg:px-16 max-lg:flex-col max-lg:justify-center max-lg:items-center justify-between mt-16">
        {blogs.slice(-4).map((blog, index) => (
          <motion.div
            ref={cardRef}
            key={index}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            variants={cardVariants(index % 2 === 0)}
          >
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
