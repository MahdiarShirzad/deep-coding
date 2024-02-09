import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import CourseCategory from "./CourseCategory";
import CourseStar from "./CourseStar";
import CoursePrice from "./CoursePrice";
import CourseTime from "./CourseTime";
import CourseLevel from "./CourseLevel";
import Pagination from "../../components/Pagination/Pagination";
import SortingCourses from "./SortingCourses";

const Courses = ({ items }) => {
  const [posts, setPosts] = useState(items);
  const [loading, setLoading] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Sorting
  const [defaultCourses, setDefaultCourses] = useState([]);
  const [sortingOption, setSortingOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("پیش فرض");
  const [isOpen, setIsOpen] = useState(false);

  const sortPosts = (sortBy) => {
    let sortedPosts = [...defaultCourses];

    if (sortBy === "محبوب ترین") {
      sortedPosts = sortedPosts.sort(
        (a, b) => parseFloat(b.popularity) - parseFloat(a.popularity)
      );
    } else if (sortBy === "بیشترین نمره") {
      sortedPosts = sortedPosts.sort(
        (a, b) => parseFloat(b.score) - parseFloat(a.score)
      );
    } else if (sortBy === "جدید ترین") {
      sortedPosts = sortedPosts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else {
      sortedPosts = defaultCourses;
    }

    setPosts(sortedPosts);
    setSortingOption(sortBy);
  };

  const resetTodefault = () => {
    setPosts(defaultCourses);
    setSortingOption("پیش فرض");
    setSelectedOption("پیش فرض");
    setIsOpen(false);
  };

  useEffect(() => {
    setDefaultCourses(posts);
    setSortingOption("");
  }, []);

  const handleSort = (sortBy) => {
    sortPosts(sortBy);
    setSelectedOption(sortBy);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Category
  const uniqueCategories = [...new Set(items.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [courseCounts, setCourseCounts] = useState({});

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
      const filteredItems = items.filter((item) =>
        selectedCategory.includes(item.category)
      );
      setPosts(filteredItems);

      const counts = {};
      uniqueCategories.forEach((category) => {
        const categoryCount = filteredItems.filter(
          (item) => item.category === category
        ).length;
        counts[category] = categoryCount;
      });
      setCourseCounts(counts);
    } else {
      setPosts(items);

      const counts = {};
      uniqueCategories.forEach((category) => {
        const categoryCount = items.filter(
          (item) => item.category === category
        ).length;
        counts[category] = categoryCount;
      });
      setCourseCounts(counts);
    }
  }, [selectedCategory, items]);
  console.log(courseCounts);

  // Star
  const [sortBy, setSortBy] = useState("default");

  const sortCourses = () => {
    switch (sortBy) {
      case "4.5":
        return posts.filter((course) => course.star >= 4.5);
      case "4":
        return posts.filter((course) => course.star > 4);
      case "3.5":
        return posts.filter((course) => course.star >= 3.5);
      case "3":
        return posts.filter((course) => course.star >= 3);
      default:
        return posts;
    }
  };

  const handleStarChange = (criteria) => {
    setSortBy(criteria);
  };

  const sortedCoursesByStar = sortCourses();

  // pricing
  const [sortByPrice, setSortByPrice] = useState("default");

  const sortCoursesByPrice = () => {
    switch (sortByPrice) {
      case "paid":
        return posts.filter((course) => course.price !== 0);
      case "free":
        return posts.filter((course) => course.price === 0);
      case "default":
      default:
        return posts;
    }
  };

  const handlePriceChange = (criteria) => {
    setSortByPrice(criteria);
  };
  const sortedCoursesByPrice = sortCoursesByPrice();
  //Level
  const [sortByLevel, setSortByLevel] = useState("All");

  const sortCoursesByLevel = () => {
    switch (sortByLevel) {
      case "basic":
        return posts.filter((course) => course.level === "مقدماتی");
      case "intermediate":
        return posts.filter((course) => course.price === "متوسط");
      case "advanced":
        return posts.filter((course) => course.price === "پیشرفته");
      case "All":
      default:
        return posts;
    }
  };

  const handleLevelChange = (criteria) => {
    setSortByLevel(criteria);
  };
  const sortedCoursesByLevel = sortCoursesByLevel();

  // Time
  const [sortByTime, setSortByTime] = useState("+All");

  const sortCoursesByTime = () => {
    switch (sortByTime) {
      case "-3":
        return posts.filter((course) => course.time <= 3);
      case "4-7":
        return posts.filter((course) => course.time <= 7 && course.time >= 4);
      case "8-18":
        return posts.filter((course) => course.time >= 8 && course.time <= 8);
      case "+20":
        return posts.filter((course) => course.time >= 20);
      case "All":
      default:
        return posts;
    }
  };

  const handleTimeChange = (criteria) => {
    setSortByLevel(criteria);
  };
  const sortedCoursesByTime = sortCoursesByTime();

  return (
    <div className=" mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h2 className=" text-2xl mt-36 font-medium">لیست دوره ها</h2>
      <p className="mt-4">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      <div className="flex items-start justify-between mt-32 gap-8">
        <div className=" w-1/4">
          <CourseCategory
            handleCategoryToggle={handleCategoryToggle}
            categories={uniqueCategories}
            courseCounts={courseCounts}
          />
          <CourseStar
            handleStarChange={handleStarChange}
            sortedCoursesByStar={sortedCoursesByStar}
            sortBy={sortBy}
          />
          <CoursePrice
            sortByPrice={sortByPrice}
            sortCoursesByPrice={sortCoursesByPrice}
            handlePriceChange={handlePriceChange}
            sortedCoursesByPrice={sortedCoursesByPrice}
          />
          <CourseLevel
            sortByLevel={sortByLevel}
            sortCoursesByLevel={sortCoursesByLevel}
            handleLevelChange={handleLevelChange}
            sortedCoursesByLevel={sortedCoursesByLevel}
          />
          <CourseTime
            setSortByTime={setSortByTime}
            handleTimeChange={handleTimeChange}
            sortedCoursesByTime={sortedCoursesByTime}
            sortByTime={sortByTime}
          />
        </div>
        <div className=" w-4/5">
          <div className=" flex items-center justify-between px-10">
            <p className="text-gray-600 text-sm">
              نمایش{" "}
              <span className=" text-gray-800 font-semibold">
                {posts.length}{" "}
              </span>
              نتیجه
            </p>
            <div className=" flex gap-3 items-center">
              <p className=" text-gray-600 text-sm">مرتب سازی :</p>
              <div>
                <div className="relative inline-block text-left">
                  <SortingCourses
                    setCourses={setPosts}
                    courses={posts}
                    isOpen={isOpen}
                    toggleDropdown={toggleDropdown}
                    selectedOption={selectedOption}
                    handleSort={handleSort}
                    sortingOption={sortingOption}
                    resetTodefault={resetTodefault}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex items-center gap-8 flex-wrap mt-7 px-2">
              {currentPosts.map((course, index) => (
                <CourseCard key={index} title={course.name} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Pagination
                setCurrentPage={setCurrentPage}
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
