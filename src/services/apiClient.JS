const BASE_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(
  path,
  { method = "GET", body, isFormData = false, skipAuth = false } = {},
) {
  const token = localStorage.getItem("token");

  const headers = {};
  if (token && !skipAuth) headers.Authorization = `Bearer ${token}`;
  if (!isFormData) headers["Content-Type"] = "application/json";

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: isFormData ? body : body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message || "خطایی رخ داد. دوباره تلاش کن.");
    error.status = res.status;
    throw error;
  }

  return data;
}
