import { useEffect, useRef, useState } from "react";
import Separator from "../common/Seperator/Separator";
import { Link } from "react-router-dom";
import { getBlogs } from "../../services/apiBlogs";

const CHAR_THRESHOLD = 5;

const SearchBlogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const lastTriggeredLengthRef = useRef(0);

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
  };

  const handleResultClick = () => {
    setSearchQuery("");
    setFilteredProducts([]);
    setIsOpen(false);
    lastTriggeredLengthRef.current = 0;
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const query = searchQuery.trim();

    if (!query) {
      setFilteredProducts([]);
      setIsOpen(false);
      lastTriggeredLengthRef.current = 0;
      return;
    }

    const currentLength = query.length;
    const lastLength = lastTriggeredLengthRef.current;

    const currentBucket = Math.floor(currentLength / CHAR_THRESHOLD);
    const lastBucket = Math.floor(lastLength / CHAR_THRESHOLD);
    const shouldFetch =
      currentLength >= CHAR_THRESHOLD && currentBucket > lastBucket;

    if (!shouldFetch) return;

    lastTriggeredLengthRef.current = currentLength;

    let isCancelled = false;
    setIsLoading(true);
    setIsOpen(true);

    (async () => {
      try {
        const result = await getBlogs({ search: query, limit: 5 });

        if (!isCancelled) {
          setFilteredProducts(result?.data?.blogs || []);
        }
      } catch (err) {
        if (!isCancelled) setFilteredProducts([]);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [searchQuery]);

  return (
    <div
      ref={containerRef}
      className="mt-8 border max-md:mx-3 border-slate-300 transition-none px-4 flex items-center gap-4 py-3 rounded-3xl relative mb-2"
    >
      <svg
        className="w-[20px] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="#8f8f8f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        className="transition-none block relative w-full px-3 py-3 rounded-3xl focus:outline-none placeholder:text-base focus:bg-white focus:placeholder:opacity-0"
        type="text"
        placeholder="بلاگ مورد نظر را جستجو کنید"
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={() =>
          searchQuery && filteredProducts.length > 0 && setIsOpen(true)
        }
      />

      {isOpen && searchQuery && (
        <div className="absolute right-0 left-0 top-[68px] max-h-80 rounded-xl bg-white overflow-y-auto border border-gray-300 z-50 shadow-md">
          {isLoading ? (
            <div className="h-20 flex justify-center items-center text-gray-500">
              در حال جستجو...
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((blog, index) => (
              <div key={blog._id}>
                <Link
                  to={`/blogs/${blog._id}`}
                  onClick={handleResultClick}
                  className="flex gap-4 py-2 items-center px-6 hover:bg-gray-50 transition-colors"
                >
                  <img
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                    src={blog.coverImg}
                    alt={blog.title}
                  />
                  <div className="py-2">
                    <p className="font-medium text-sm">{blog.title}</p>
                    {blog.category && (
                      <p className="text-xs font-light mt-1 text-gray-400">
                        {blog.category}
                      </p>
                    )}
                  </div>
                </Link>
                {index < filteredProducts.length - 1 && <Separator />}
              </div>
            ))
          ) : (
            searchQuery.length >= CHAR_THRESHOLD && (
              <div className="h-20 flex justify-center items-center text-gray-500">
                بلاگ یافت نشد
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBlogs;
