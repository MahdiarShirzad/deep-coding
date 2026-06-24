const API_URL = import.meta.env.VITE_API_URL;

export const getTeacher = async (id) => {
  const res = await fetch(`${API_URL}/users/teachers/${id}`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "مدرسی یافت نشد");
  }

  const result = await res.json();

  return result;
};

export const getCoursesByteacher = async (id) => {
  const res = await fetch(`${API_URL}/users/teachers/${id}/courses`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message);
  }

  const result = await res.json();

  return result;
};
