import React, { useMemo, useRef, useState, useEffect } from "react";
import CourseCard from "../../components/CourseCard/CourseCard.jsx";
import CourseCategory from "./CourseCategory.jsx";
import CourseTime from "./CourseTime.jsx";
import CourseLevel from "./CourseLevel.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import SortingCourses from "./SortingCourses.jsx";
import SearchCourses from "../../components/SearchCourses/SearchCourses.jsx";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses.js";
import LoadingSkeleton from "../../components/loadingSkeleton/loadingSkeleton.jsx";
import { motion, useInView } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { buildCourseQueryParams } from "../../utils/buildCourseQueryParams.js";
import FilterButton from "../../components/FilterButton/FilterButton.jsx";

const headerVariants = {};
const cardVariants = {};

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

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

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

  // state for mobile detection and filter panel
  const [isMobile, setIsMobile] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    // Tailwind lg breakpoint is 1024px by default
    const mq = window.matchMedia("(max-width: 1024px)");
    const handle = (e) => {
      setIsMobile(e.matches);
      if (!e.matches) {
        // on desktop ensure filters are visible and panel closed
        setFiltersOpen(false);
      }
    };
    handle(mq); // initial
    mq.addEventListener?.("change", handle);
    return () => mq.removeEventListener?.("change", handle);
  }, []);

  // close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setFiltersOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="mt-[100px] mb-24 font-iransans container max-w-[1320px] mx-auto relative">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <h2 className="text-2xl mt-36 font-medium max-lg:mr-10">
          لیست دوره ها
        </h2>

        <p className="mt-4 max-lg:mr-10">
          با انتخاب دوره های آموزشی تخصصی و متنوع در زمینه برنامه نویسی، مهارت
          های خود را در دنیای فناوری ارتقا بده
        </p>
      </motion.div>

      <SearchCourses />

      <div
        className={`flex items-start justify-between mt-24 gap-8 transition-opacity ${
          isFetching ? "opacity-60" : "opacity-100"
        }`}
      >
        {/* Sidebar / Filters */}
        <aside className="hidden lg:block w-1/4 lg:pr-6">
          <CourseCategory />
          <CourseLevel />
          <CourseTime />
        </aside>

        <div className="w-full lg:w-4/5">
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

      {/* Mobile filter panel (animated) */}
      {isMobile && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={filtersOpen ? { x: 0 } : { x: "100%" }}
          transition={{ type: "tween", duration: 0.28 }}
          className="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white z-50 shadow-xl p-6 overflow-auto"
          aria-hidden={!filtersOpen}
          aria-label="فیلترها"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">فیلترها</h3>
            <button
              onClick={() => setFiltersOpen(false)}
              aria-label="بستن فیلترها"
              className="text-gray-600"
            >
              بستن
            </button>
          </div>

          <CourseCategory />
          <CourseLevel />
          <CourseTime />
        </motion.aside>
      )}

      {/* overlay when mobile filters open */}
      {isMobile && filtersOpen && (
        <div
          onClick={() => setFiltersOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
          aria-hidden="true"
        />
      )}

      <FilterButton
        visible={isMobile}
        isOpen={filtersOpen}
        onToggle={() => setFiltersOpen((s) => !s)}
      />
    </div>
  );
};

export default Courses;
