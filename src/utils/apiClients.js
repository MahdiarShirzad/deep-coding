const BASE_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(
  path,
  { method = "GET", body, isFormData = false, skipAuth = false } = {},
) {
  const token = localStorage.getItem("token");

  const headers = {};
  if (token && !skipAuth) headers.Authorization = `Bearer ${token}`;
  if (!isFormData) headers["Content-Type"] = "application/json";

  let finalBody = undefined;
  if (isFormData) {
    finalBody = body;
  } else if (body) {
    if (typeof body === "string") {
      finalBody = body;
    } else {
      finalBody = JSON.stringify(body);
    }
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: finalBody,
  });

  if (res.status === 204) return null;

  let text;
  try {
    text = await res.text();
  } catch (err) {
    console.error("❌ Failed to read response body:", err);
    throw new Error("Failed to read server response");
  }

  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("❌ Invalid JSON from server:", text);
      throw new Error(
        `Server returned invalid JSON: ${text.substring(0, 200)}`,
      );
    }
  }

  if (!res.ok) {
    const errorMsg = data?.message || `Server error: ${res.status}`;
    const error = new Error(errorMsg);
    error.status = res.status;
    error.data = data;
    console.error("❌ API Error Response:", {
      status: res.status,
      message: errorMsg,
      data: data,
    });
    throw error;
  }

  return data;
}
