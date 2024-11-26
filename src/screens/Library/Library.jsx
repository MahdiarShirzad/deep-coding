import React, { useReducer } from "react";
import BookCard from "../../components/BookCard/BookCard";
import BooksCategory from "./BooksCategory";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";
import { motion } from "framer-motion";
import { Spinner } from "../../components/Spinner/Spinner";
import SearchBooks from "../../components/SearchBooks/SearchBooks";

// Initial state for useReducer
const initialState = {
  filteredBooks: [],
  visibleBooksCount: 12,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTERED_BOOKS":
      return {
        ...state,
        filteredBooks: action.payload,
        visibleBooksCount: Math.min(action.payload.length, 12),
      };
    case "LOAD_MORE":
      return {
        ...state,
        visibleBooksCount: Math.min(
          state.visibleBooksCount + 12,
          state.filteredBooks.length
        ),
      };
    default:
      return state;
  }
};

const Library = () => {
  // Fetch books using react-query
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  // useReducer for managing state
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    filteredBooks: books,
  });

  const { filteredBooks, visibleBooksCount } = state;

  // Determine whether to show "Load More" button
  const showLoadMoreButton = visibleBooksCount < filteredBooks.length;

  // Handle category filter updates from BooksCategory
  const handleSetFilteredBooks = (filtered) => {
    dispatch({ type: "SET_FILTERED_BOOKS", payload: filtered });
  };

  // Animation variants
  const bookCardVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <div className="my-36 font-iransans container max-w-[1320px] mx-auto">
      <h3 className="mt-36 text-2xl font-medium max-lg:mr-10">کتابخانه</h3>
      <p className="mt-4 text-gray-700 max-lg:mr-10">
        با کتاب های راهنمای مسیر یادگیری زبان های برنامه نویسی مختلف، بهترین
        مسیر رو برای خودت پیدا کن
      </p>

      <div className="flex justify-between items-center">
        <div className="w-full px-10">
          <SearchBooks products={books} />
        </div>
      </div>

      {/* Sidebar for category filters */}
      <div className="flex items-start justify-between mt-32 gap-12">
        <div className="w-4/5 flex flex-wrap justify-start gap-3 max-lg:mx-auto">
          {/* Spinner while loading */}
          {isLoading && (
            <div className="flex justify-center mt-10 w-full">
              <Spinner />
            </div>
          )}

          {/* No books found */}
          {!isLoading && filteredBooks.length === 0 && (
            <p className="text-center mt-10 text-2xl text-gray-600 w-full">
              کتابی یافت نشد!
            </p>
          )}

          {/* Books grid */}
          {!isLoading &&
            filteredBooks.slice(0, visibleBooksCount).map((book) => (
              <motion.div
                key={book.id}
                variants={bookCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
        </div>

        {/* Category filters */}
        <div className="w-1/4 px-2 max-lg:hidden">
          <BooksCategory items={books} setBooks={handleSetFilteredBooks} />
        </div>
      </div>

      {/* Load More button */}
      {!isLoading && showLoadMoreButton && (
        <button
          onClick={() => dispatch({ type: "LOAD_MORE" })}
          className="flex items-center justify-center w-[150px] h-[50px] rounded-xl mx-auto gap-2 bg-[#140342] text-white mt-8"
        >
          <p>مشاهده بیشتر</p>
          <svg
            className="w-6"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <path
              fill="#ffffff"
              d="M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Library;
