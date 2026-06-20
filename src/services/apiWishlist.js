// import axios from "axios";
import { toast } from "react-toastify";
import { apiRequest } from "./apiClient";

// const API_URL = import.meta.env.VITE_API_URL;

export const getUsersWishlist = async () => {
  const data = await apiRequest("/users/wishlist", { method: "GET" });
  return data.data.wishlist;
};

export const addToWishlist = async (idOrSlug) => {
  try {
    const data = await apiRequest(`/users/wishlist/${idOrSlug}`, {
      method: "POST",
    });

    toast.success("دوره با موفقیت به علاقه‌مندی‌ها اضافه شد!", {
      position: "top-right",
      autoClose: 3000,
    });

    return data;
  } catch (error) {
    toast.error(error.message || "خطایی در افزودن به علاقه‌مندی‌ها رخ داد.", {
      position: "top-right",
      autoClose: 4000,
    });
    throw error;
  }
};

export const removeFromWishlist = async (idOrSlug) => {
  const data = await apiRequest(`/users/wishlist/${idOrSlug}`, {
    method: "DELETE",
  });
  return data;
};
