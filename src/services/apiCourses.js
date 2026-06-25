import axios from "axios";
import { toast } from "react-toastify";
import { apiRequest } from "./apiClient";

const API_URL = import.meta.env.VITE_API_URL;

export const getCourses = async (queryParams = {}) => {
  const params = new URLSearchParams();

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, value);
    }
  });

  const queryString = params.toString();
  const url = queryString
    ? `${API_URL}/courses?${queryString}`
    : `${API_URL}/courses`;

  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در دریافت دوره‌ها");
  }

  const result = await res.json();

  return {
    courses: result.data.courses,
    totalCount: result.totalCount,
    totalPages: result.totalPages,
    currentPage: result.currentPage,
  };
};

export const getCourse = async (id) => {
  const res = await fetch(`${API_URL}/courses/${id}`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "دوره‌ای یافت نشد");
  }

  const result = await res.json();
  return result.data.course;
};

export const deleteCourse = async (id) => {
  try {
    await apiRequest(`/courses/${id}`, {
      method: "DELETE",
    });
    toast.success("دوره حذف شد");
  } catch (err) {
    console.log(err);

    toast.error("حذف انجام نشد");
    throw err;
  }
};

const buildCourseFormData = (formData) => {
  const data = new FormData();

  const textFields = [
    "name",
    "category",
    "level",
    "price",
    "discountPrice",
    "time",
    "desc",
    "introduction",
    "status",
  ];

  textFields.forEach((field) => {
    if (formData[field] !== undefined && formData[field] !== "") {
      data.append(field, formData[field]);
    }
  });

  (formData.willLearn || [])
    .filter(Boolean)
    .forEach((item) => data.append("willLearn", item));
  (formData.requirements || [])
    .filter(Boolean)
    .forEach((item) => data.append("requirements", item));
  (formData.tags || [])
    .filter(Boolean)
    .forEach((tag) => data.append("tags", tag));

  if (formData.sections?.length) {
    const cleanSections = formData.sections.map((sec) => ({
      title: sec.title,
      lessons: (sec.lessons || []).map((les) => ({
        title: les.title,
        duration: les.duration || 0,
        isFree: les.isFree || false,
        order: les.order || 0,
      })),
    }));
    data.append("sections", JSON.stringify(cleanSections));
  }

  if (formData.img instanceof File) {
    data.append("img", formData.img);
  }
  if (formData.introductionVideo instanceof File) {
    data.append("introductionVideo", formData.introductionVideo);
  }

  return data;
};

export const addCourse = async (formData) => {
  try {
    const data = buildCourseFormData(formData);

    const res = await apiRequest("/courses", {
      method: "POST",
      body: data,
      isFormData: true,
    });
    toast.success("دوره با موفقیت ایجاد شد ✓");
    return res;
  } catch (error) {
    console.log(error);
    toast.error(error.message || "خطا در ایجاد دوره");
  }
};

export const updateCourse = async ({ id, formData }) => {
  try {
    const data = buildCourseFormData(formData);

    const res = await apiRequest(`/courses/${id}`, {
      method: "PATCH",
      body: data,
      isFormData: true,
    });
    toast.success("دوره با موفقیت ویرایش شد ✓");
    return res;
  } catch (error) {
    toast.error(error.message || "خطا در ویرایش دوره");
    console.log(error);
  }
};
