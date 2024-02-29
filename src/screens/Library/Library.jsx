import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import BooksCategory from "./BooksCategory";
import AOS from "aos";
import "aos/dist/aos.css";

const Library = ({ books }) => {
  const [book, setBook] = useState(books);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  console.log(books);
  return (
    <div className=" my-36 font-iransans container max-w-[1320px] mx-auto">
      <h3 className=" mt-36 text-2xl font-medium max-lg:mr-10">کتابخانه</h3>
      <p className=" mt-4 text-gray-700 max-lg:mr-10">
        با کتاب های راهنمای مسیر یادگیری زبان های برنامه نویسی مختلف، بهترین
        مسیر رو برای خودت پیدا کن
      </p>
      <div className=" flex items-start  justify-between mt-32 gap-12">
        <div
          className="w-4/5  flex flex-wrap justify-between max-lg:mx-auto"
          data-aos="fade-left"
        >
          {book.map((book) => (
            <BookCard book={book} key={book.id} />
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
