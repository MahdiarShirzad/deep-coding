import React, { useState, useCallback } from "react";
import CourseStats from "./CourseStats.jsx";
import CourseRow from "./CourseRow.jsx";
import CourseModal from "./CourseModal.jsx";

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "آموزش جامع React و Next.js",
      category: "Frontend",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      id: 2,
      title: "طراحی معماری و پترن‌ها با Node.js",
      category: "Backend",
      price: "۳,۲۰۰,۰۰۰",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // بهینه‌سازی رفرنس تابع حذف با useCallback
  const handleDeleteCourse = useCallback((id) => {}, []);

  // بهینه‌سازی رفرنس تابع ادیت
  const handleEditClick = useCallback((course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }, []);

  const handleAddClick = () => {
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  // ذخیره یا آپدیت نهایی
  const handleSaveCourse = useCallback((formData) => {
    setCourses((prevCourses) => {
      if (formData.id) {
        // حالت ویرایش
        return prevCourses.map((c) => (c.id === formData.id ? formData : c));
      } else {
        // حالت افزودن جدید
        return [...prevCourses, { ...formData, id: Date.now() }];
      }
    });
    setIsModalOpen(false);
  }, []);

  console.log("🚀 Main Dashboard Rendered");

  return (
    <div className="p-6 bg-[#070a13] min-h-screen text-slate-200" dir="rtl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold text-white">مدیریت دوره‌ها</h1>
        </div>
        <button
          onClick={handleAddClick}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-lg shadow-indigo-600/20"
        >
          افزودن دوره جدید
        </button>
      </div>

      <CourseStats totalCourses={courses.length} />

      <div className="bg-[#111827] border border-slate-800/80 rounded-xl overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-800/30 text-slate-400 text-xs border-b border-slate-800">
              <th className="p-4">عنوان دوره</th>
              <th className="p-4">دسته‌بندی</th>
              <th className="p-4">قیمت</th>
              <th className="p-4 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                onEdit={handleEditClick}
                onDelete={handleDeleteCourse}
              />
            ))}
          </tbody>
        </table>
      </div>

      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCourse}
        currentCourse={selectedCourse}
      />
    </div>
  );
};

export default ManageCourses;
