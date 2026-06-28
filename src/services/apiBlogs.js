import { toast } from "react-toastify";
import { apiRequest } from "./apiClient.js";

const API_URL = import.meta.env.VITE_API_URL;

export const getBlogs = async (queryParams = {}) => {
  const params = new URLSearchParams();

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, value);
    }
  });

  const queryString = params.toString();
  const url = queryString
    ? `${API_URL}/blogs?${queryString}`
    : `${API_URL}/blogs`;

  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در دریافت بلاگ ها");
  }

  const result = await res.json();

  return result;
};

export const getBlog = async (id) => {
  const res = await fetch(`${API_URL}/blogs/${id}`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "بلاگی یافت نشد");
  }

  const result = await res.json();

  return result.data.blog;
};

export const addBlog = async (data) => {
  const res = await fetch(`${API_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در ایجاد بلاگ");
  }

  const result = await res.json();
  return result.data.blog;
};

export const deleteBlog = async (id) => {
  try {
    await apiRequest(`/blogs/${id}`, { method: "DELETE" });
    toast.success("بلاگ حذف شد");
  } catch (error) {
    console.log(error);
    toast.error("حذف انجام نشد");
  }
};

export const updateBlog = async ({ id, formData }) => {
  try {
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      if (key === "coverImg" && value instanceof File) {
        form.append(key, value);
      } else if (
        Array.isArray(value) ||
        (typeof value === "object" && !(value instanceof File))
      ) {
        form.append(key, JSON.stringify(value));
      } else {
        form.append(key, value);
      }
    });

    const res = await apiRequest(`/blogs/${id}`, {
      method: "PATCH",
      body: form,
    });

    toast.success("بلاگ با موفقیت بروزرسانی شد");
    return res;
  } catch (error) {
    console.log(error);
    toast.error("بروزرسانی انجام نشد");
    throw error;
  }
};
