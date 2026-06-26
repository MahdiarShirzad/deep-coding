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
    throw new Error(err.message || "خطا در دریافت کتاب ها");
  }

  const result = await res.json();

  // console.log(result);

  return result;
};

export const getBook = async (id) => {
  const res = await fetch(`${API_URL}/books/${id}`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "کتابی یافت نشد");
  }

  const result = await res.json();

  console.log(result);

  return result;
};

export const addBook = async (data) => {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در ایجاد کتاب");
  }

  const result = await res.json();
  return result.data.book;
};
