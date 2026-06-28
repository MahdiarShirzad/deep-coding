import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createReview,
  getReviewsForItem,
  getPendingReviews,
  approveReview,
  updateReview,
  deleteReview,
  getUserReviews,
  getAdminAllComments,
  replyToComment,
} from "../services/apiReview.js";

export const useReviewsForItem = (refType, refId) => {
  return useQuery({
    queryKey: ["reviews", refType, refId],
    queryFn: () => getReviewsForItem(refType, refId),
    enabled: !!refType && !!refId,
  });
};

export const usePendingReviews = () => {
  return useQuery({
    queryKey: ["pendingReviews"],
    queryFn: getPendingReviews,
  });
};

export const useUserReviews = (userId) => {
  return useQuery({
    queryKey: ["userReviews", userId],
    queryFn: () => getUserReviews(userId),
    enabled: !!userId,
  });
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
};

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, updateData }) =>
      updateReview(reviewId, updateData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["userReviews"] });
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["userReviews"] });
      queryClient.invalidateQueries({ queryKey: ["adminComments"] }); // ← add
    },
  });
};

export const useApproveReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: approveReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pendingReviews"] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["adminComments"] }); // ← add
    },
  });
};

export const useAdminAllComments = () => {
  return useQuery({
    queryKey: ["adminComments"],
    queryFn: getAdminAllComments,
    select: (data) => data?.data?.reviews ?? [],
  });
};

export const useReplyToComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: replyToComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminComments"] });
    },
  });
};
