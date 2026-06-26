import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addCourse } from "../../services/apiCourses";
import CourseFormModal, {
  EMPTY_COURSE_FORM,
} from "../TeacherPanel/CourseFormModal";
import { getTeachers } from "../../services/apiTeachers";
import { addBlog } from "../../services/apiBlogs";
import BlogFormModal, { EMPTY_BLOG_FORM } from "../../components/BlogFormModal";
import { addBook } from "../../services/apiBooks";
import BookFormModal, { EMPTY_BOOK_FORM } from "../../components/BookFormModal";

const QuickActions = () => {
  const queryClient = useQueryClient();

  // Course modal state
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [formData, setFormData] = useState(EMPTY_COURSE_FORM);

  // Blog modal state
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [blogModalMode, setBlogModalMode] = useState("add");
  const [blogFormData, setBlogFormData] = useState(EMPTY_BLOG_FORM);

  // Book modal state
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookModalMode, setBookModalMode] = useState("add");
  const [bookFormData, setBookFormData] = useState(EMPTY_BOOK_FORM);

  const { mutate: addCourseMutate, isPending: isAdding } = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["teacher-courses"] });
      setIsCourseModalOpen(false);
    },
  });

  const { mutate: addBlogMutate, isPending: isAddingBlog } = useMutation({
    mutationFn: addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setIsBlogModalOpen(false);
      setBlogFormData(EMPTY_BLOG_FORM);
    },
  });

  const { mutate: addBookMutate, isPending: isAddingBook } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      setIsBookModalOpen(false);
      setBookFormData(EMPTY_BOOK_FORM);
    },
  });

  const { data: teachersData } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });

  const teachers = teachersData?.data?.teachers ?? [];

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      addCourseMutate(formData);
    } else {
      // updateCourseMutate({ id: selectedCourse._id, formData });
    }
  };

  const handleSaveBlog = (e) => {
    e.preventDefault();
    if (blogModalMode === "add") {
      addBlogMutate(blogFormData);
    } else {
      // updateBlogMutate({ id: selectedBlog._id, blogFormData });
    }
  };

  const handleSaveBook = (e) => {
    e.preventDefault();
    if (bookModalMode === "add") {
      addBookMutate(bookFormData);
    } else {
      // updateBookMutate({ id: selectedBook._id, bookFormData });
    }
  };

  const actions = [
    {
      title: "ایجاد مقاله جدید",
      icon: "✍️",
      bg: "bg-violet-600 hover:bg-violet-500",
      onClick: () => {
        setBlogModalMode("add");
        setBlogFormData(EMPTY_BLOG_FORM);
        setIsBlogModalOpen(true);
      },
    },
    {
      title: "ایجاد دوره جدید",
      icon: "📚",
      bg: "bg-emerald-600 hover:bg-emerald-500",
      onClick: () => setIsCourseModalOpen(true),
    },
    {
      title: "ایجاد کتاب جدید",
      icon: "📖",
      bg: "bg-cyan-600 hover:bg-cyan-500",
      onClick: () => {
        setBookModalMode("add");
        setBookFormData(EMPTY_BOOK_FORM);
        setIsBookModalOpen(true);
      },
    },
    {
      title: "مدیریت دیدگاه‌ها",
      icon: "💬",
      bg: "bg-amber-600 hover:bg-amber-500",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl mb-8">
      <h3 className="text-sm font-bold text-white mb-4">⚡ عملیات سریع</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            onClick={action.onClick}
            key={index}
            className={`${action.bg} text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg`}
          >
            <span className="text-base">{action.icon}</span>
            {action.title}
          </button>
        ))}
      </div>

      <BlogFormModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        onSubmit={handleSaveBlog}
        modalMode={blogModalMode}
        formData={blogFormData}
        setFormData={setBlogFormData}
        isSubmitting={isAddingBlog}
      />

      <BookFormModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        onSubmit={handleSaveBook}
        modalMode={bookModalMode}
        formData={bookFormData}
        setFormData={setBookFormData}
        isSubmitting={isAddingBook}
      />

      <CourseFormModal
        isOpen={isCourseModalOpen}
        onClose={() => setIsCourseModalOpen(false)}
        onSubmit={handleSaveCourse}
        modalMode={modalMode}
        formData={formData}
        setFormData={setFormData}
        teachers={teachers}
      />
    </div>
  );
};

export default QuickActions;
