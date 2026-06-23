import React, { useState } from "react";
import CourseHeader from "./CourseHeader";
import CourseFormModal from "./CourseFormModal";
import CourseDeleteModal from "./CourseDeleteModal";
import TeacherCourseCard from "./TeacherCourseCard";

const TeachersCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: "1",
      name: "دوره جامع Deep Coding (React & Node.js)",
      price: 4500000,
      studentsCount: 142,
      status: "published",
      img: "https://via.placeholder.com/150/0f172a/ffffff?text=Deep+Coding",
    },
    {
      id: "2",
      name: "متخصص Next.js پیشرفته و معماری فرانت‌ند",
      price: 3800000,
      studentsCount: 98,
      status: "published",
      img: "https://via.placeholder.com/150/0f172a/ffffff?text=Next.js",
    },
    {
      id: "3",
      name: "آموزش جامع Clean Code و دیزاین پترن‌ها",
      price: 1900000,
      studentsCount: 0,
      status: "draft",
      img: "https://via.placeholder.com/150/0f172a/ffffff?text=Clean+Code",
    },
  ]);

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    status: "published",
  });

  const handleOpenAddModal = () => {
    setModalMode("add");
    setFormData({ name: "", price: "", status: "published" });
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (course) => {
    setModalMode("edit");
    setSelectedCourse(course);
    setFormData({
      name: course.name,
      price: course.price,
      status: course.status,
    });
    setIsFormModalOpen(true);
  };

  const handleOpenDeleteModal = (course) => {
    setSelectedCourse(course);
    setIsDeleteModalOpen(true);
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      const newCourse = {
        id: Date.now().toString(),
        name: formData.name,
        price: Number(formData.price),
        studentsCount: 0,
        status: formData.status,
        img: "https://via.placeholder.com/150/0f172a/ffffff?text=New+Course",
      };
      setCourses([...courses, newCourse]);
    } else {
      setCourses(
        courses.map((c) =>
          c.id === selectedCourse.id
            ? { ...c, ...formData, price: Number(formData.price) }
            : c,
        ),
      );
    }
    setIsFormModalOpen(false);
  };

  const handleDeleteCourse = () => {
    setCourses(courses.filter((c) => c.id !== selectedCourse.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="w-full px-6 max-md:px-3 font-iransans pb-10 text-white">
      {/* ۱. هدر صفحه */}
      <CourseHeader onAddClick={handleOpenAddModal} />

      {/* ۲. لیست کارت‌های دوره */}
      <div className="grid grid-cols-1 gap-4">
        {courses.map((course) => (
          <TeacherCourseCard
            key={course.id}
            course={course}
            onEditClick={handleOpenEditModal}
            onDeleteClick={handleOpenDeleteModal}
          />
        ))}
      </div>

      {/* ۳. مودال ایجاد و ویرایش */}
      <CourseFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleSaveCourse}
        modalMode={modalMode}
        formData={formData}
        setFormData={setFormData}
      />

      {/* ۴. مودال تایید حذف */}
      <CourseDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteCourse}
        courseName={selectedCourse?.name}
      />
    </div>
  );
};

export default TeachersCourses;
