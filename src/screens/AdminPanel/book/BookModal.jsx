import React, { useState, useEffect } from "react";

const BookModal = ({ isOpen, onClose, onSave, currentBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
  });

  useEffect(() => {
    if (currentBook) {
      setFormData(currentBook);
    } else {
      setFormData({ title: "", author: "", price: "" });
    }
  }, [currentBook, isOpen]);

  if (!isOpen) return null;

  console.log("✍️ Book Modal Form Rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#111827] border border-slate-800 w-full max-w-md rounded-xl p-6 shadow-2xl">
        <h2 className="text-lg font-bold text-white mb-6">
          {currentBook ? "ویرایش کتاب / منبع" : "افزودن کتاب جدید"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              عنوان کتاب
            </label>
            <input
              type="text"
              required
              className="w-full bg-[#070a13] border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">
              نویسنده / ناشر
            </label>
            <input
              type="text"
              required
              className="w-full bg-[#070a13] border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">
              قیمت نسخه فیزیکی/دیجیتال
            </label>
            <input
              type="text"
              required
              className="w-full bg-[#070a13] border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm shadow-lg shadow-violet-600/20"
            >
              تایید و ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
