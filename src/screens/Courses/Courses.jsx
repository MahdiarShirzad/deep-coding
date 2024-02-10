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
  console.log(items.price);

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
    // setSortByLevel(criteria);
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
          <CourseCategory items={items} setPosts={setPosts} />
          <CourseStar setPosts={setPosts} items={items} />
          <CoursePrice items={items} setPosts={setPosts} />
          <CourseLevel setPosts={setPosts} items={items} />
          <CourseTime items={items} setPosts={setPosts} />
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
                <CourseCard key={index} posts={course} />
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
