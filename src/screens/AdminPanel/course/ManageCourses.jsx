import React, { useState, useCallback } from "react";
import CourseStats from "./CourseStats.jsx";
import CourseRow from "./CourseRow.jsx";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../../../services/apiCourses.js";
import CourseFormModal, {
  EMPTY_COURSE_FORM,
} from "../../TeacherPanel/CourseFormModal.jsx";
import CourseDeleteModal from "../../TeacherPanel/CourseDeleteModal.jsx";

const ManageCourses = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState(EMPTY_COURSE_FORM);

  const { data, isLoading } = useQuery({
    queryKey: ["adminCourses", page],
    queryFn: () => getCourses({ page, limit: 10 }),
    keepPreviousData: true,
  });

  const courses = data?.courses ?? [];
  const totalCount = data?.totalCount ?? 0;
  const totalPages = data?.totalPages ?? 1;

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["adminCourses"] });
    queryClient.invalidateQueries({ queryKey: ["courses"] });
  };

  const { mutate: addCourseMutate, isPending: isAdding } = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      invalidate();
      setIsFormModalOpen(false);
    },
  });

  const { mutate: updateCourseMutate, isPending: isUpdating } = useMutation({
    mutationFn: updateCourse,
    onSuccess: () => {
      invalidate();
      setIsFormModalOpen(false);
    },
  });

  const { mutate: deleteCourseMutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      invalidate();
      setIsDeleteModalOpen(false);
    },
  });

  const handleAddClick = () => {
    setModalMode("add");
    setFormData(EMPTY_COURSE_FORM);
    setSelectedCourse(null);
    setIsFormModalOpen(true);
  };

  const handleEditClick = useCallback((course) => {
    setModalMode("edit");
    setSelectedCourse(course);
    setFormData({
      name: course.name || "",
      category: course.category || "",
      level: course.level || "همه سطوح",
      status: course.status || "published",
      price: course.price || "",
      discountPrice: course.discountPrice || "",
      time: course.time || "",
      img: course.img || null,
      introductionVideo: course.introductionVideo || null,
      desc: course.desc || "",
      introduction: course.introduction || "",
      willLearn: course.willLearn?.length ? course.willLearn : [""],
      requirements: course.requirements?.length ? course.requirements : [""],
      tags: course.tags || [],
      sections: course.sections || [],
    });
    setIsFormModalOpen(true);
  }, []);

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      addCourseMutate(formData);
    } else {
      updateCourseMutate({ id: selectedCourse._id, formData });
    }
  };

  const handleDeleteCourse = (id) => {
    deleteCourseMutate(id);
  };

  return (
    <div
      className="p-6 rounded-xl bg-[#070a13] min-h-screen text-slate-200"
      dir="rtl"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-white">مدیریت دوره‌ها</h1>
        <button
          onClick={handleAddClick}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-lg shadow-indigo-600/20"
        >
          افزودن دوره جدید
        </button>
      </div>

      <CourseStats totalCourses={totalCount} />

      <div className="bg-[#111827] md:border md:border-slate-800/80 rounded-xl overflow-hidden">
        <table className="w-full text-right border-collapse block md:table">
          <thead className="hidden md:table-header-group">
            <tr className="bg-slate-800/30 text-slate-400 text-xs border-b border-slate-800">
              <th className="p-4">تصویر</th>
              <th className="p-4">عنوان دوره</th>
              <th className="p-4">دسته‌بندی</th>
              <th className="p-4">قیمت</th>
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
              courses.map((course) => (
                <CourseRow
                  key={course._id}
                  course={course}
                  onEdit={handleEditClick}
                  onDelete={(courseToDelete) => {
                    setSelectedCourse(courseToDelete);
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

      <CourseFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleSaveCourse}
        modalMode={modalMode}
        formData={formData}
        setFormData={setFormData}
      />

      <CourseDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteCourse}
        courseName={selectedCourse?.name}
        courseId={selectedCourse?._id}
        isPending={isDeleting}
      />
    </div>
  );
};

export default ManageCourses;
