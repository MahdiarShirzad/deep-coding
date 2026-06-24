import React, { useState } from "react";
import CourseHeader from "./CourseHeader";
import CourseFormModal from "./CourseFormModal";
import CourseDeleteModal from "./CourseDeleteModal";
import TeacherCourseCard from "./TeacherCourseCard";
import { getCoursesByteacher } from "../../services/apiTeachers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCourse } from "../../services/apiCourses";

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

  const { mutate: deleCourseMutate, isPending } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["teacher-courses"] });
    },
  });

  const courses = coursesData?.data?.courses ?? [];

  // console.log(courses);

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
    setIsFormModalOpen(true);
  };

  const handleOpenDeleteModal = (course) => {
    setSelectedCourse(course);
    setIsDeleteModalOpen(true);
  };

  const handleSaveCourse = (e) => {
    setIsFormModalOpen(false);
  };

  const handleDeleteCourse = (id) => {
    deleCourseMutate(id);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="w-full px-6 max-md:px-3 font-iransans pb-10 text-white">
      <CourseHeader onAddClick={handleOpenAddModal} />

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
      />
    </div>
  );
};

export default TeachersCourses;
