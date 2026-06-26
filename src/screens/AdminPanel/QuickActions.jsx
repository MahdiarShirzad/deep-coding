import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addCourse } from "../../services/apiCourses";
import CourseFormModal, {
  EMPTY_COURSE_FORM,
} from "../TeacherPanel/CourseFormModal";
import { getTeachers } from "../../services/apiTeachers";

const QuickActions = () => {
  const queryClient = useQueryClient();

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [formData, setFormData] = useState(EMPTY_COURSE_FORM);

  const { mutate: addCourseMutate, isPending: isAdding } = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["teacher-courses"] });
      setIsFormModalOpen(false);
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

  // const handleDeleteCourse = (id) => {
  //   deleteCourseMutate(id);
  // };

  const actions = [
    {
      title: "ایجاد مقاله جدید",
      icon: "✍️",
      bg: "bg-violet-600 hover:bg-violet-500",
    },
    {
      title: "ایجاد دوره جدید",
      icon: "📚",
      bg: "bg-emerald-600 hover:bg-emerald-500",
      onClick: () => setIsFormModalOpen(true),
    },
    {
      title: "ایجاد کتاب جدید",
      icon: "📖",
      bg: "bg-cyan-600 hover:bg-cyan-500",
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

      <CourseFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
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
