import { apiRequest } from "./apiClient";

// const API_URL = import.meta.env.VITE_API_URL;

export async function signUp({ fullName, email, password, confirmPassword }) {
  const data = await apiRequest("/users/signup", {
    method: "POST",
    skipAuth: true,
    body: {
      fullName,
      email,
      password,
      passwordConfirm: confirmPassword,
    },
  });

  localStorage.setItem("token", data.token);
  return {
    user: data.data.user,
    token: data.token,
  };
}

export async function login({ email, password }) {
  const data = await apiRequest("/users/login", {
    method: "POST",
    skipAuth: true,
    body: { email, password },
  });

  localStorage.setItem("token", data.token);
  return data.data.user;
}

export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const data = await apiRequest("/users/getMe");
    return data.data.user;
  } catch (err) {
    if (err.status === 401) {
      localStorage.removeItem("token");
    }
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
}

export async function updateUser(updates, avatarFile) {
  if (avatarFile) {
    const formData = new FormData();

    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (typeof value === "object" && !(value instanceof File)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    formData.append("avatar", avatarFile);

    const data = await apiRequest("/users/updateMe", {
      method: "PATCH",
      body: formData,
      isFormData: true,
    });
    return data.data.user;
  }

  const data = await apiRequest("/users/updateMe", {
    method: "PATCH",
    body: updates,
  });
  return data.data.user;
}

export const getLastUsers = async () => {
  const data = await apiRequest("/users/last-users");
  return data?.data?.users ?? [];
};
