import React, { useState, useEffect } from "react";

const CourseModal = ({ isOpen, onClose, onSave, currentCourse }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    if (currentCourse) {
      setFormData(currentCourse);
    } else {
      setFormData({ title: "", category: "", price: "" });
    }
  }, [currentCourse, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#111827] border border-slate-800 w-full max-w-md rounded-xl p-6 shadow-2xl">
        <h2 className="text-lg font-bold text-white mb-6">
          {currentCourse ? "ویرایش دوره" : "افزودن دوره جدید"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              عنوان دوره
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
              دسته‌بندی
            </label>
            <input
              type="text"
              required
              className="w-full bg-[#070a13] border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">قیمت</label>
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
              تایید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
