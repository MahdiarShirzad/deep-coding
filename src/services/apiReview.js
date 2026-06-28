import { apiRequest } from "./apiClient.js"; // Adjust path based on your structure

export const createReview = async (reviewData) => {
  const response = await apiRequest("/reviews", {
    method: "POST",
    body: JSON.stringify(reviewData),
  });
  return response.data.review;
};

export const getReviewsForItem = async (refType, refId) => {
  const params = new URLSearchParams({
    refType,
    refId,
  });

  const response = await apiRequest(`/reviews?${params}`);
  return response.data.reviews;
};

export const getPendingReviews = async () => {
  const response = await apiRequest("/reviews/pending");
  return response.data.reviews;
};

export const approveReview = async (reviewId) => {
  const response = await apiRequest(`/reviews/${reviewId}/approve`, {
    method: "PATCH",
  });
  return response.data.review;
};

export const deleteReview = async (reviewId) => {
  await apiRequest(`/reviews/${reviewId}`, {
    method: "DELETE",
  });
};

export const updateReview = async (reviewId, updateData) => {
  const response = await apiRequest(`/reviews/${reviewId}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
  });
  return response.data.review;
};

export const getUserReviews = async (userId) => {
  const response = await apiRequest(`/reviews/user/${userId}`);
  return response.data.reviews;
};

export const getAdminAllComments = async () => {
  return apiRequest("/reviews/admin/all");
};

export const replyToComment = async ({ commentId, refType, refId, text }) => {
  return apiRequest("/reviews/admin/reply", {
    method: "POST",
    body: { commentId, refType, refId, text },
  });
};
