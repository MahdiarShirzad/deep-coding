import React, { useState, useCallback } from "react";
import BookStats from "./BookStats";
import BookRow from "./BookRow";
import BookModal from "./BookModal";

const ManageBook = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Node.js Design Patterns",
      author: "Mario Casciaro",
      price: "۴۲۰,۰۰۰",
    },
    {
      id: 2,
      title: "Fluent Python",
      author: "Luciano Ramalho",
      price: "۵۸۰,۰۰۰",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // حذف بهینه منبع با عملکرد آدرس ثابت در حافظه
  const handleDeleteBook = useCallback((id) => {}, []);

  // مدیریت باز شدن مودال ادیت
  const handleEditClick = useCallback((book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  }, []);

  // مدیریت باز شدن مودال افزودن جدید
  const handleAddClick = () => {
    setSelectedBook(null);
    setIsModalOpen(true);
  };

  // ذخیره نهایی حالت افزودن یا ادیت
  const handleSaveBook = useCallback((formData) => {
    setBooks((prevBooks) => {
      if (formData.id) {
        return prevBooks.map((b) => (b.id === formData.id ? formData : b));
      } else {
        return [...prevBooks, { ...formData, id: Date.now() }];
      }
    });
    setIsModalOpen(false);
  }, []);

  return (
    <div
      className="p-6 bg-[#070a13] rounded-xl min-h-screen text-slate-200"
      dir="rtl"
    >
      {/* هدر کامپوننت */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold text-white">
            مدیریت کتاب‌ها و منابع
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            ماژولار، بهینه و توسعه‌پذیر
          </p>
        </div>
        <button
          onClick={handleAddClick}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-lg shadow-indigo-600/20"
        >
          افزودن کتاب جدید
        </button>
      </div>

      {/* ۱. کامپوننت نمایش آمار کل کتاب‌ها */}
      <BookStats totalBooks={books.length} />

      {/* ۲. جدول نمایش کل داده‌ها */}
      <div className="bg-[#111827] border border-slate-800/80 rounded-xl overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-800/30 text-slate-400 text-xs border-b border-slate-800">
              <th className="p-4">عنوان کتاب</th>
              <th className="p-4">نویسنده / ناشر</th>
              <th className="p-4">قیمت نسخه</th>
              <th className="p-4 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookRow
                key={book.id}
                book={book}
                onEdit={handleEditClick}
                onDelete={handleDeleteBook}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ۳. کامپوننت مودال فرم ادمین */}
      <BookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBook}
        currentBook={selectedBook}
      />
    </div>
  );
};

export default ManageBook;
