// import axios from "axios";
import { apiRequest } from "./apiClient";

// const API_URL = import.meta.env.VITE_API_URL;

export const getUsersWishlist = async () => {
  // تابع apiRequest توکن رو خودش خودکار میذاره، پس فقط آدرس رو میدیم
  const data = await apiRequest("/users/wishlist", { method: "GET" });
  return data;
};

export const addToWishlist = async (idOrSlug) => {
  const data = await apiRequest(`/users/wishlist/${idOrSlug}`, {
    method: "POST",
  });
  return data;
};

export const removeFromWishlist = async (idOrSlug) => {
  const data = await apiRequest(`/users/wishlist/${idOrSlug}`, {
    method: "DELETE",
  });
  return data;
};
