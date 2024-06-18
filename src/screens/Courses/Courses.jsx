import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import CourseCategory from "./CourseCategory";
import CourseStar from "./CourseStar";
import CourseTime from "./CourseTime";
import CourseLevel from "./CourseLevel";
import Pagination from "../../components/Pagination/Pagination";
import SortingCourses from "./SortingCourses";
import styles from "./Courses.module.css";
import CourseCategorySm from "./CourseCategorySm";
import CourseStarSm from "./CourseStarSm";
import CoursePriceSm from "./CoursePriceSm";
import CourseLevelSm from "./CourseLevelsm";
import CourseTimeSm from "./CourseTimeSm";
import SearchCourses from "../../components/SearchCourses/SearchCourses";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";
import { Spinner } from "../../components/Spinner/Spinner";

const Courses = ({}) => {
  const { data: courses, isPending: isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (courses) {
      setPosts(courses);
    }
  }, [courses]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className=" mt-[100px]  mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h2 className=" text-2xl mt-36 font-medium max-lg:mr-10">لیست دوره ها</h2>
      <p className="mt-4 max-lg:mr-10">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      {posts && posts.length > 0 && (
        <>{!isLoading ? <SearchCourses products={courses} /> : null}</>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-start justify-between mt-24 gap-8">
          {posts && posts.length > 0 && (
            <div className={`w-1/4 max-lg:hidden max-xl:mr-10 `}>
              <CourseCategory setPosts={setPosts} />
              <CourseStar setPosts={setPosts} items={courses} />
              <CourseLevel setPosts={setPosts} items={courses} />
              <CourseTime items={courses} setPosts={setPosts} />
            </div>
          )}
          <div className=" w-4/5 max-lg:mx-auto max-lg:w-full">
            {posts && posts.length > 0 && (
              <div className=" flex items-center justify-between gap-1 max-md:mx-3 lg:px-10">
                <p className="text-gray-600 text-sm">
                  <span> نمایش</span>
                  {courses && (
                    <span className=" text-gray-800 font-semibold ml-2 mr-3 ">
                      {posts?.length}
                    </span>
                  )}
                  <span> نتیجه</span>
                </p>

                <div className=" flex gap-3 items-center">
                  <p className=" text-gray-600 text-sm">مرتب سازی :</p>
                  <div>
                    <div className="relative inline-block text-left">
                      <SortingCourses
                        setPosts={setPosts}
                        posts={posts}
                        items={courses}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <div
                className=" min-h-[700px] flex items-start justify-start lg:gap-5 max-xl:justify-between max-xl:px-32 max-md:mt-16 px-5 flex-wrap mt-7 max-lg:justify-center max-lg:gap-12 max-xl:mx-auto"
                data-aos="fade-left"
              >
                {posts && posts.length > 0 ? (
                  <>
                    {currentPosts?.map((course, index) => (
                      <CourseCard key={index} posts={course} />
                    ))}
                  </>
                ) : (
                  <p className="text-center w-full mt-20 text-3xl">
                    دوره ای یافت نشد !
                  </p>
                )}
              </div>
              {posts && posts.length > 0 && (
                <div className="flex items-center justify-center">
                  <Pagination
                    setCurrentPage={setCurrentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={posts?.length}
                    currentPage={currentPage}
                  />
                </div>
              )}
            </div>
          </div>
          <div className=" lg:hidden fixed bottom-10 left-5 bg-[#140342] p-4 text-white rounded-full">
            <input
              className={`${styles.toggleCourse} hidden`}
              type="checkbox"
              name="toggle_course"
              id="toggle_course"
            />
            <label className=" relative cursor-pointer" htmlFor="toggle_course">
              <svg
                className=" w-[30px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.2673 6.24223C2.20553 4.40955 3.50184 1 6.26039 1H17.7396C20.4981 1 21.7945 4.40955 19.7327 6.24223L15.3356 10.1507C15.1221 10.3405 15 10.6125 15 10.8981V21.0858C15 22.8676 12.8457 23.7599 11.5858 22.5L9.58578 20.5C9.21071 20.1249 8.99999 19.6162 8.99999 19.0858V10.8981C8.99999 10.6125 8.87785 10.3405 8.66436 10.1507L4.2673 6.24223ZM6.26039 3C5.34088 3 4.90877 4.13652 5.59603 4.74741L9.99309 8.6559C10.6336 9.22521 11 10.0412 11 10.8981V19.0858L13 21.0858V10.8981C13 10.0412 13.3664 9.22521 14.0069 8.6559L18.404 4.74741C19.0912 4.13652 18.6591 3 17.7396 3H6.26039Z"
                    fill="#fff"
                  ></path>{" "}
                </g>
              </svg>
            </label>
            {posts && posts.length > 0 && (
              <ul
                className={`w-[350px]  lg:hidden overflow-scroll z-20 ${styles.listFilter} ${styles.toggleX} min-h-[700px]`}
              >
                <CourseCategorySm items={courses} setPosts={setPosts} />
                <CourseStarSm setPosts={setPosts} items={posts} />
                <CourseLevelSm setPosts={setPosts} items={posts} />
                <CourseTimeSm items={posts} setPosts={setPosts} />
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
