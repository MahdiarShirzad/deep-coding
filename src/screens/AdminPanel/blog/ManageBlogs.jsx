import React, { useState, useCallback } from "react";
import BlogStats from "./BlogStats";
import BlogRow from "./BlogRow";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import BlogFormModal, {
  EMPTY_BLOG_FORM,
} from "../../../components/BlogFormModal";
import BlogDeleteModal from "../../../components/BlogDeleteModal"; // ✅ import added
import {
  addBlog,
  deleteBlog,
  getBlogs,
  updateBlog,
} from "../../../services/apiBlogs";

const ManageBlogs = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [formData, setFormData] = useState(EMPTY_BLOG_FORM);

  const { data, isLoading } = useQuery({
    queryKey: ["blogs", page],
    queryFn: () => getBlogs({ page, limit: 10 }),
    keepPreviousData: true,
  });

  const blogs = data?.data?.blogs ?? [];
  const totalCount = data?.data?.totalCount ?? 0;
  const totalPages = data?.data?.totalPages ?? 1;

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["blogs"] });
  };

  const { mutate: addBlogMutate, isPending: isAdding } = useMutation({
    mutationFn: addBlog,
    onSuccess: () => {
      invalidate();
      setIsFormModalOpen(false);
    },
  });

  const { mutate: updateBlogMutate, isPending: isUpdating } = useMutation({
    mutationFn: updateBlog, // ✅ now properly imported
    onSuccess: () => {
      invalidate();
      setIsFormModalOpen(false);
    },
  });

  const { mutate: deleteBlogMutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      invalidate();
      setIsDeleteModalOpen(false);
    },
  });

  const handleAddClick = () => {
    setModalMode("add");
    setFormData(EMPTY_BLOG_FORM);
    setSelectedBlog(null);
    setIsFormModalOpen(true);
  };

  const handleEditClick = useCallback((blog) => {
    setModalMode("edit");
    setSelectedBlog(blog);
    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      category: blog.category || "",
      author: blog.author || "",
      status: blog.status || "published",
      coverImg: blog.coverImg || null,
      tags: blog.tags || [],
      content: blog.content || [],
    });
    setIsFormModalOpen(true);
  }, []);

  const handleSaveBlog = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      addBlogMutate(formData);
    } else {
      updateBlogMutate({ id: selectedBlog.id || selectedBlog._id, formData }); // ✅ correct shape
    }
  };

  const handleDeleteBlog = (id) => {
    deleteBlogMutate(id);
  };

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

      <BlogStats totalBlogs={totalCount || blogs.length} />

      <div className="bg-[#111827] border border-slate-800/80 rounded-xl overflow-hidden">
        <table className="w-full text-right border-collapse block md:table">
          <thead className="hidden md:table-header-group">
            <tr className="bg-slate-800/30 text-slate-400 text-xs border-b border-slate-800">
              <th className="p-4">تصویر</th>
              <th className="p-4">عنوان مقاله</th>
              <th className="p-4">دسته‌بندی</th>
              <th className="p-4"> </th>
              <th className="p-4 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {isLoading ? (
              <tr className="block md:table-row">
                <td
                  colSpan={5}
                  className="p-8 text-center text-slate-500 text-sm block md:table-cell"
                >
                  در حال بارگذاری...
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <BlogRow
                  key={blog.id || blog._id}
                  blog={blog}
                  onEdit={handleEditClick}
                  onDelete={(blogToDelete) => {
                    setSelectedBlog(blogToDelete);
                    setIsDeleteModalOpen(true);
                  }}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg text-sm bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            قبلی
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 rounded-lg text-sm transition-colors ${
                p === page
                  ? "bg-violet-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg text-sm bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            بعدی
          </button>
        </div>
      )}

      <BlogFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleSaveBlog}
        modalMode={modalMode}
        formData={formData}
        setFormData={setFormData}
        isPending={isAdding || isUpdating}
      />

      <BlogDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteBlog}
        blogTitle={selectedBlog?.title}
        blogId={selectedBlog?.id || selectedBlog?._id}
        isPending={isDeleting}
      />
    </div>
  );
};

export default ManageBlogs;
