import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";
import { motion } from "framer-motion";
import { Spinner } from "../../components/Spinner/Spinner";
import BookCardSkeleton from "../../components/BookCardSkeleton/BookCardSkeleton";

const Library = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });

  const books = data?.data?.books || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 font-iransans max-w-[1320px] mx-auto dir-rtl text-right">
      <header className="mb-12 md:mb-16 max-w-2xl">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 font-yekanBold">
          کتابخانه مسیر یادگیری
        </h3>
        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          با کتاب‌های راهنمای مسیر یادگیری زبان‌های برنامه‌نویسی مختلف، بهترین و
          کوتاه‌ترین مسیر را برای آینده خودت پیدا کن.
        </p>
      </header>

      <div className="w-full">
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center w-full">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <BookCardSkeleton key={index} />
              ))}
          </div>
        )}

        {!isLoading && books.length === 0 && (
          <div className="text-center py-16 w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-xl text-gray-500 font-medium">کتابی یافت نشد!</p>
          </div>
        )}

        {!isLoading && books.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Library;
