import React, { useState, useMemo } from "react";
import { toast } from "react-toastify";
import CommentHeader from "./CommentHeader.jsx";
import CommentFilters from "./CommentFilters.jsx";
import CommentCard from "./CommentCard.jsx";
import CommentReplyModal from "./CommentReplyModal.jsx";
import {
  useAdminAllComments,
  useApproveReview,
  useDeleteReview,
  useReplyToComment,
} from "../../../hooks/useReviews.js";

const ManageComments = () => {
  const { data: rawComments = [], isLoading, isError } = useAdminAllComments();
  const approveMutation = useApproveReview();
  const deleteMutation = useDeleteReview();
  const replyMutation = useReplyToComment();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  // Normalize API shape → UI shape
  const comments = useMemo(
    () =>
      rawComments.map((r) => ({
        id: r._id,
        userName: r.userId?.fullName ?? "کاربر ناشناس",
        userRole: r.userId?.role ?? "student",
        targetTitle: r.refTitle ?? r.refType,
        content: r.text,
        status: r.isApproved ? "approved" : "pending",
        createdAt: new Date(r.createdAt).toLocaleDateString("fa-IR"),
        refType: r.refType,
        refId: r.refId,
      })),
    [rawComments],
  );

  const totalCount = comments.length;
  const pendingCount = comments.filter((c) => c.status === "pending").length;
  const approvedCount = comments.filter((c) => c.status === "approved").length;

  const filteredComments = useMemo(
    () =>
      comments.filter((c) => {
        const matchesSearch =
          c.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.userName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus =
          statusFilter === "all" || c.status === statusFilter;
        return matchesSearch && matchesStatus;
      }),
    [comments, searchTerm, statusFilter],
  );

  const handleApproveComment = async (id) => {
    try {
      await approveMutation.mutateAsync(id);
      toast.success("نظر تایید شد");
    } catch {
      toast.error("خطا در تایید نظر");
    }
  };

  const handleDeleteComment = async (id) => {
    if (!window.confirm("آیا از حذف این نظر اطمینان دارید؟")) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success("نظر حذف شد");
    } catch {
      toast.error("خطا در حذف نظر");
    }
  };

  const handleOpenReplyModal = (comment) => {
    setSelectedComment(comment);
    setIsModalOpen(true);
  };

  const handleInsertReply = async (commentId, replyMessage) => {
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) return;
    try {
      await replyMutation.mutateAsync({
        commentId,
        refType: comment.refType,
        refId: comment.refId,
        text: replyMessage,
      });
      toast.success("پاسخ ثبت و نظر تایید شد");
      setIsModalOpen(false);
    } catch {
      toast.error("خطا در ثبت پاسخ");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-slate-950 rounded-xl text-slate-100 p-8 font-iransans flex items-center justify-center">
        <div className="animate-pulse text-slate-400 text-sm">
          در حال بارگذاری نظرات...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full min-h-screen bg-slate-950 rounded-xl text-slate-100 p-8 font-iransans flex items-center justify-center">
        <p className="text-rose-400 text-sm">
          خطا در دریافت نظرات. دوباره تلاش کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-950 rounded-xl text-slate-100 p-4 md:p-8 font-iransans pb-12">
      <CommentHeader
        total={totalCount}
        pending={pendingCount}
        approved={approvedCount}
      />

      <CommentFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="grid grid-cols-1 gap-4">
        {filteredComments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onApprove={handleApproveComment}
            onOpenReply={handleOpenReplyModal}
            onDelete={handleDeleteComment}
          />
        ))}
      </div>

      {filteredComments.length === 0 && (
        <div className="text-center text-slate-500 py-12 text-xs">
          هیچ دیدگاهی پیدا نشد.
        </div>
      )}

      <CommentReplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        comment={selectedComment}
        onSubmitReply={handleInsertReply}
      />
    </div>
  );
};

export default ManageComments;
