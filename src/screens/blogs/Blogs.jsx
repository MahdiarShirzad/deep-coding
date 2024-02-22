import React, { useEffect, useState } from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import BlogCategory from "./BlogCategory";
import LastBlogs from "./LastBlogs";
import BlogLabel from "./BlogLabel";

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
  return (
    <div className=" mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h3 className=" mt-36 text-2xl font-medium">لیست وبلاگ</h3>
      <p className=" mt-4 text-gray-700">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      <div className=" flex items-start justify-between mt-32 gap-7">
        <div className="w-4/5 flex flex-wrap gap-9 max-lg: justify-center">
          {blog.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
        <div className="w-1/4 px-2 max-lg:hidden">
          <BlogCategory
            categories={blogCategories}
            handleCategoryToggle={handleCategoryToggle}
          />
          <LastBlogs blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
