import React, { useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import BooksCategory from "./BooksCategory";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";
import { motion } from "framer-motion";

const Library = () => {
  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const [book, setBook] = useState(books);

  // Animation Variants
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
      <div className="flex items-start justify-between mt-32 gap-12">
        {/* Book Cards */}
        <div className="w-4/5 flex flex-wrap justify-start gap-3 max-lg:mx-auto">
          {book?.map((book) => (
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

        <div className="w-1/4 px-2 max-lg:hidden">
          <BooksCategory items={books} setBooks={setBook} />
        </div>
      </div>
    </div>
  );
};

export default Library;
