import { apiRequest } from "../utils/apiClients";

const API_URL = import.meta.env.VITE_API_URL;

export const getUsersCart = async () => {
  const res = await apiRequest("/cart");
  console.log(res);

  return res.data.cart;
};

export const addToCart = async (courseId) => {
  const res = await apiRequest(`/cart/${courseId}`, { method: "POST" });
  return res.data.cart;
};

export const deleteFromCart = async (courseId) => {
  const res = await apiRequest(`/cart/${courseId}`, { method: "DELETE" });

  return res.data.cart;
};

export const cartCheckout = async () => {
  const res = await apiRequest("/cart/checkout", {
    method: "POST",
  });
  return res.data;
};
