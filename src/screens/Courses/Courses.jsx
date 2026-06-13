import React, { useMemo } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import CourseCategory from "./CourseCategory";
import CourseTime from "./CourseTime";
import CourseLevel from "./CourseLevel";
import Pagination from "../../components/Pagination/Pagination";
import SortingCourses from "./SortingCourses";
import SearchCourses from "../../components/SearchCourses/SearchCourses";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";
import LoadingSkeleton from "../../components/loadingSkeleton/loadingSkeleton";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { buildCourseQueryParams } from "../../utils/buildCourseQueryParams";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(
    () => buildCourseQueryParams(searchParams),
    [searchParams],
  );

  const {
    data,
    isPending: isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["courses", queryParams],
    queryFn: () => getCourses(queryParams),
    placeholderData: keepPreviousData,
  });

  const courses = data?.courses || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = data?.totalPages || 1;
  const currentPage = data?.currentPage || 1;

  const showLoading = isLoading || isFetching;

  const handlePageChange = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page);
    setSearchParams(newParams);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto">
      {/* Header */}
      <h2 className="text-2xl mt-36 font-medium max-lg:mr-10">لیست دوره ها</h2>

      <p className="mt-4 max-lg:mr-10">
        با انتخاب دوره های آموزشی تخصصی و متنوع در زمینه برنامه نویسی، مهارت های
        خود را در دنیای فناوری ارتقا بده
      </p>

      <SearchCourses />

      {/* Main layout */}
      <div
        className={`flex items-start justify-between mt-24 gap-8 transition-opacity ${
          isFetching ? "opacity-60" : "opacity-100"
        }`}
      >
        <div className="w-1/4 max-lg:hidden max-xl:mr-10">
          <CourseCategory />
          <CourseLevel />
          <CourseTime />
        </div>

        <div className="w-4/5 max-lg:mx-auto max-lg:w-full">
          <div className="flex items-center justify-between gap-1 max-md:mx-3 lg:px-10">
            <p className="text-gray-600 text-sm">
              <span>نمایش</span>
              <span className="text-gray-800 font-semibold ml-2 mr-3">
                {totalCount}
              </span>
              <span>نتیجه</span>
            </p>

            <div className="flex gap-3 items-center">
              <p className="text-gray-600 text-sm">مرتب سازی :</p>
              <SortingCourses />
            </div>
          </div>

          <div className="min-h-[700px] flex flex-wrap mt-7 gap-5 px-5 justify-center lg:justify-start">
            {showLoading ? (
              Array.from({ length: 12 }).map((_, i) => (
                <LoadingSkeleton key={i} />
              ))
            ) : courses.length > 0 ? (
              courses.map((course) => (
                <motion.div
                  key={course._id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <CourseCard posts={course} />
                </motion.div>
              ))
            ) : (
              <p className="text-center w-full mt-20 text-3xl">
                دوره ای یافت نشد!
              </p>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
