import React, { useState, useCallback } from "react";
import BookStats from "./BookStats";
import BookRow from "./BookRow";
import BookFormModal from "../../../components/BookFormModal";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../../../services/apiBooks";
import BookDeleteModal from "../../../components/BookDeleteModal";

export const EMPTY_BOOK_FORM = {
  title: "",
  author: "",
  publisher: "",
  price: "",
  discountPrice: "",
  description: "",
  image: null,
  tags: [],
  status: "published",
};

const ManageBook = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState(EMPTY_BOOK_FORM);

  const { data, isLoading } = useQuery({
    queryKey: ["books", page],
    queryFn: () => getBooks({ page, limit: 10 }),
    keepPreviousData: true,
  });

  const books = data?.data?.books ?? [];
  const totalCount = data?.data?.totalCount ?? 0;
  const totalPages = data?.data?.totalPages ?? 1;

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["books"] });
  };

  const { mutate: addBookMutate, isPending: isAdding } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      invalidate();
      setIsFormModalOpen(false);
    },
  });

  const { mutate: updateBookMutate, isPending: isUpdating } = useMutation({
    mutationFn: updateBook,
    onSuccess: () => {
      invalidate();
      setIsFormModalOpen(false);
    },
  });

  const { mutate: deleteBookMutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      invalidate();
      setIsDeleteModalOpen(false);
    },
  });

  const handleAddClick = () => {
    setModalMode("add");
    setFormData(EMPTY_BOOK_FORM);
    setSelectedBook(null);
    setIsFormModalOpen(true);
  };

  const handleEditClick = useCallback((book) => {
    setModalMode("edit");
    setSelectedBook(book);
    setFormData({
      title: book.title || "",
      author: book.author || "",
      publisher: book.publisher || "",
      price: book.price || "",
      discountPrice: book.discountPrice || "",
      description: book.description || "",
      image: book.image || null,
      tags: book.tags || [],
      status: book.status || "published",
    });
    setIsFormModalOpen(true);
  }, []);

  const handleSaveBook = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      addBookMutate(formData);
    } else {
      updateBookMutate({ id: selectedBook.id || selectedBook._id, formData });
    }
  };

  const handleDeleteBook = (id) => {
    deleteBookMutate(id);
  };

  return (
    <div
      className="p-6 bg-[#070a13] rounded-xl min-h-screen text-slate-200"
      dir="rtl"
    >
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

      <BookStats totalBooks={totalCount || books.length} />

      <div className="bg-[#111827] border border-slate-800/80 rounded-xl overflow-hidden">
        <table className="w-full text-right border-collapse block md:table">
          <thead className="hidden md:table-header-group">
            <tr className="bg-slate-800/30 text-slate-400 text-xs border-b border-slate-800">
              <th className="p-4">تصویر</th>
              <th className="p-4">عنوان کتاب</th>
              <th className="p-4">نویسنده / ناشر</th>
              <th className="p-4">قیمت نسخه</th>
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
              books.map((book) => (
                <BookRow
                  key={book.id || book._id}
                  book={book}
                  onEdit={handleEditClick}
                  onDelete={(bookToDelete) => {
                    setSelectedBook(bookToDelete);
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

      <BookFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleSaveBook}
        modalMode={modalMode}
        formData={formData}
        setFormData={setFormData}
        isPending={isAdding || isUpdating}
      />

      <BookDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteBook}
        bookTitle={selectedBook?.title}
        bookId={selectedBook?.id || selectedBook?._id}
        isPending={isDeleting}
      />
    </div>
  );
};

export default ManageBook;
