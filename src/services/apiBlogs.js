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
