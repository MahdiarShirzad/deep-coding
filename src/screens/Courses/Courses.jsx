import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import CourseCategory from "./CourseCategory";
import CourseStar from "./CourseStar";
import CoursePrice from "./CoursePrice";
import CourseTime from "./CourseTime";
import CourseLevel from "./CourseLevel";
import Pagination from "../../components/Pagination/Pagination";
import SortingCourses from "./SortingCourses";

import { useParams } from "react-router-dom";

const Courses = ({ items, teachers }) => {
  const [posts, setPosts] = useState(items);
  const [loading, setLoading] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className=" mt-[100px]  mb-24 font-iransans container max-w-[1320px] mx-auto">
      <h2 className=" text-2xl mt-36 font-medium">لیست دوره ها</h2>
      <p className="mt-4">
        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
      <div className="flex items-start justify-between mt-32 gap-8">
        <div className=" w-1/4 lg:block md:block sm:hidden xs:hidden">
          {" "}
          {/* add responsive classes to hide the filter section on small screens */}
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
                    setPosts={setPosts}
                    posts={posts}
                    items={items}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" min-h-[700px] flex items-start gap-8 flex-wrap mt-7 px-2">
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
        <div className="  bg-blue-950 lg:hidden fixed bottom-10 left-10 p-3 rounded-full">
          {" "}
          {/* add responsive classes to show the filter button on small screens */}
          <label htmlFor="filter" className="cursor-pointer">
            <svg
              className=" w-[40px]"
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
                {" "}
                <path
                  d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </label>
          <input
            type="checkbox"
            name="filter"
            id="filter"
            className=" hidden"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-white z-10 transform transition-all duration-300 ease-in-out -translate-x-full">
            {" "}
            {/* add a div to show the filter section on small screens with transition and conditional classes */}
            <div className="w-1/4 h-full overflow-y-auto">
              {" "}
              {/* add a div to wrap the filter components */}
              <CourseCategory items={items} setPosts={setPosts} />
              <CourseStar setPosts={setPosts} items={items} />
              <CoursePrice items={items} setPosts={setPosts} />
              <CourseLevel setPosts={setPosts} items={items} />
              <CourseTime items={items} setPosts={setPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
