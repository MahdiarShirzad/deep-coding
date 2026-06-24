import React, { useState, useCallback } from "react";
import BlogStats from "./BlogStats";
import BlogRow from "./BlogRow";
import BlogModal from "./BlogModal";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "چرا باید در سال ۲۰۲۶ از Next.js استفاده کنیم؟",
      category: "Frontend",
      date: "۱۴۰۵/۰۲/۱۵",
    },
    {
      id: 2,
      title: "پیاده‌سازی Clean Architecture در معماری Node.js",
      category: "Backend",
      date: "۱۴۰۵/۰۳/۰۱",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleDeleteBlog = useCallback((id) => {}, []);

  const handleEditClick = useCallback((blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  }, []);

  const handleAddClick = () => {
    setSelectedBlog(null);
    setIsModalOpen(true);
  };

  const handleSaveBlog = useCallback((formData) => {
    setBlogs((prevBlogs) => {
      if (formData.id) {
        return prevBlogs.map((b) => (b.id === formData.id ? formData : b));
      } else {
        return [...prevBlogs, { ...formData, id: Date.now() }];
      }
    });
    setIsModalOpen(false);
  }, []);

  return (
    <div
      className="p-6 bg-[#070a13] rounded-xl min-h-screen text-slate-200"
      dir="rtl"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold text-white">
            مدیریت مقالات / وبلاگ
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            توسعه ماژولار و بسیار سریع
          </p>
        </div>
        <button
          onClick={handleAddClick}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-lg shadow-indigo-600/20"
        >
          افزودن مقاله جدید
        </button>
      </div>

      <BlogStats totalBlogs={blogs.length} />

      <div className="bg-[#111827] border border-slate-800/80 rounded-xl overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-800/30 text-slate-400 text-xs border-b border-slate-800">
              <th className="p-4">عنوان مقاله</th>
              <th className="p-4">دسته‌بندی</th>
              <th className="p-4">تاریخ انتشار</th>
              <th className="p-4 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <BlogRow
                key={blog.id}
                blog={blog}
                onEdit={handleEditClick}
                onDelete={handleDeleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBlog}
        currentBlog={selectedBlog}
      />
    </div>
  );
};

export default ManageBlogs;
