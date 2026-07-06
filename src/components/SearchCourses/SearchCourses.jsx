import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getCourses } from "../../services/apiCourses";

const SearchCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts([]);
    setIsOpen(false);
  };

  const handleResultClick = () => {
    clearSearch();
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const query = searchQuery.trim();

    if (!query) {
      setFilteredProducts([]);
      return;
    }

    let isCancelled = false;
    setIsLoading(true);

    const timeout = setTimeout(async () => {
      try {
        const result = await getCourses({ search: query, limit: 5 });
        if (!isCancelled) {
          setFilteredProducts(result.courses || []);
        }
      } catch (err) {
        if (!isCancelled) setFilteredProducts([]);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }, 400);

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  return (
    <div
      ref={containerRef}
      className="relative z-40 w-full max-w-3xl mx-auto mt-8 mb-6 max-md:mx-3"
    >
      {/* Search Input Container */}
      <div
        className={`flex items-center gap-3 px-5 py-3.5 bg-white transition-all duration-300 rounded-full border ${
          isOpen && searchQuery
            ? "border-slate-400 shadow-md ring-4 ring-slate-100"
            : "border-slate-300 shadow-sm hover:border-slate-400"
        }`}
      >
        <svg
          className={`w-5 shrink-0 transition-colors duration-300 ${
            isOpen ? "text-slate-700" : "text-slate-400"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          className="w-full text-base bg-transparent focus:outline-none placeholder:text-slate-400 text-slate-700"
          type="text"
          placeholder="دوره مورد نظر را جستجو کنید..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => searchQuery && setIsOpen(true)}
          aria-label="جستجوی دوره‌ها"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
            aria-label="پاک کردن جستجو"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      <AnimatePresence>
        {isOpen && searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 left-0 top-[calc(100%+12px)] max-h-[350px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-y-auto divide-y divide-slate-100"
          >
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-32 gap-3 text-slate-500">
                <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
                <span className="text-sm font-medium">در حال جستجو...</span>
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((course) => (
                <Link
                  key={course._id}
                  to={`/courses/${course._id}`}
                  onClick={handleResultClick}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-slate-50 group"
                >
                  <img
                    className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm transition-transform group-hover:scale-105"
                    src={course.img}
                    alt={course.name}
                  />
                  <div className="flex flex-col flex-1 py-1">
                    <p className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-600 line-clamp-1">
                      {course.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {course.teacher?.fullName || "مدرس نامشخص"}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 ml-2">
                    <svg
                      className="w-5 h-5 -scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-32 gap-2 text-slate-500">
                <svg
                  className="w-8 h-8 text-slate-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">دوره‌ای با این عنوان یافت نشد!</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchCourses;
