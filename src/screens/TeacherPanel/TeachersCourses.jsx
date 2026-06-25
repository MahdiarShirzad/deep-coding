import React, { useState } from "react";
import CourseHeader from "./CourseHeader";
import CourseFormModal, { EMPTY_COURSE_FORM } from "./CourseFormModal"; // ← EMPTY_COURSE_FORM اضافه شد
import CourseDeleteModal from "./CourseDeleteModal";
import TeacherCourseCard from "./TeacherCourseCard";
import { getCoursesByteacher } from "../../services/apiTeachers";
import {
  addCourse,
  deleteCourse,
  updateCourse,
} from "../../services/apiCourses";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TeachersCourses = () => {
  const queryClient = useQueryClient();
  const teacher = queryClient.getQueryData(["user"]);

  const {
    data: coursesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["teacher-courses", teacher?._id],
    queryFn: () => getCoursesByteacher(teacher._id),
    enabled: !!teacher?._id,
  });

  const courses = coursesData?.data?.courses ?? [];

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState(EMPTY_COURSE_FORM);

  const { mutate: deleteCourseMutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["teacher-courses"] });
      setIsDeleteModalOpen(false);
    },
  });

  const { mutate: addCourseMutate, isPending: isAdding } = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["teacher-courses"] });
      setIsFormModalOpen(false);
    },
  });

  const { mutate: updateCourseMutate, isPending: isUpdating } = useMutation({
    mutationFn: updateCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["teacher-courses"] });
      setIsFormModalOpen(false);
    },
  });

  const handleOpenAddModal = () => {
    setModalMode("add");
    setFormData(EMPTY_COURSE_FORM);
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (course) => {
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
  };

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
    <div className="w-full px-6 max-md:px-3 font-iransans pb-10 text-white">
      <CourseHeader onAddClick={handleOpenAddModal} />

      <div className="grid grid-cols-1 gap-4">
        {courses.map((course) => (
          <TeacherCourseCard
            key={course._id}
            course={course}
            onEditClick={handleOpenEditModal}
            onDeleteClick={(course) => {
              setSelectedCourse(course);
              setIsDeleteModalOpen(true);
            }}
          />
        ))}
      </div>

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

export default TeachersCourses;
