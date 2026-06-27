import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export const getBooks = async (queryParams = {}) => {
  const params = new URLSearchParams();

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, value);
    }
  });

  const queryString = params.toString();
  const url = queryString
    ? `${API_URL}/books?${queryString}`
    : `${API_URL}/books`;

  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در دریافت کتاب‌ها");
  }

  return res.json();
};

export const getBook = async (id) => {
  const res = await fetch(`${API_URL}/books/${id}`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "کتابی یافت نشد");
  }

  return res.json();
};

export const addBook = async (data) => {
  const form = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (key === "image" && value instanceof File) {
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

  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    toast.error(err.message || "خطا در ایجاد کتاب");
    throw new Error(err.message || "خطا در ایجاد کتاب");
  }

  toast.success("کتاب با موفقیت اضافه شد");
  const result = await res.json();
  return result.data?.book ?? result;
};

export const updateBook = async ({ id, formData }) => {
  const form = new FormData();

  Object.entries(formData).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (key === "image" && value instanceof File) {
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

  const res = await fetch(`${API_URL}/books/${id}`, {
    method: "PATCH",
    body: form,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    toast.error(err.message || "بروزرسانی انجام نشد");
    throw new Error(err.message || "بروزرسانی انجام نشد");
  }

  toast.success("کتاب با موفقیت بروزرسانی شد");
  return res.json();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    toast.error(err.message || "حذف انجام نشد");
    throw new Error(err.message || "حذف انجام نشد");
  }

  toast.success("کتاب حذف شد");
};
