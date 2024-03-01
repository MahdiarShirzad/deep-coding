import React, { useEffect, useState } from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import BlogCategory from "./BlogCategory";
import LastBlogs from "./LastBlogs";
import SearchCourses from "../../components/SearchCourses/SearchCourses";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = ({ blogs }) => {
  const [blog, setBlog] = useState(blogs);
  const blogCategories = [...new Set(blogs.map((blog) => blog.category))];

  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleCategoryToggle = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(
        selectedCategory.filter(
          (selectedCategory) => selectedCategory !== category
        )
      );
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  useEffect(() => {
    if (selectedCategory.length > 0) {
      const filteredItems = blogs.filter((blog) =>
        selectedCategory.includes(blog.category)
      );
      setBlog(filteredItems);
    } else {
      setBlog(blogs);
    }
  }, [selectedCategory, blogs]);

  const [visibleBlogs, setVisibleBlogs] = useState(15);
  const [loading, setLoading] = useState(false);

  const loadMoreBlogs = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 15);
      setLoading(false);
    }, 2000);
  };

  const handleScroll = () => {
    const footerTopPosition = document
      .querySelector("footer")
      .getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTopPosition < windowHeight && !loading) {
      loadMoreBlogs();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleBlogs, loading]);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div className=" mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h3 className=" mt-36 text-2xl font-medium max-lg:mr-10">لیست وبلاگ</h3>
      <p className=" mt-4 text-gray-700 max-lg:mr-10">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      <div className=" flex justify-between items-center">
        <div className=" w-full px-10">
          <SearchCourses products={blogs} />
        </div>
      </div>
      <div className=" flex items-start  justify-between mt-32 gap-7">
        <div
          className="w-full justify-between px-10 flex flex-wrap  max-lg:mx-auto"
          data-aos="fade-left"
        >
          {blog.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
        {/* <div className="w-1/4 px-2 max-lg:hidden">
          <BlogCategory
            categories={blogCategories}
            handleCategoryToggle={handleCategoryToggle}
          />
          <LastBlogs blogs={blogs} />
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;
