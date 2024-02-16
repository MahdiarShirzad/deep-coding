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
      </div>
    </div>
  );
};

export default Courses;
