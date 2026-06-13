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

export const getCourse = async (slug) => {
  const res = await fetch(`${API_URL}/courses/${slug}`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "دوره‌ای یافت نشد");
  }

  const result = await res.json();
  return result.data.course;
};
