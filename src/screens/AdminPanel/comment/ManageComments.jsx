import React, { useState } from "react";
import CommentHeader from "./CommentHeader.jsx";
import CommentFilters from "./CommentFilters.jsx";
import CommentCard from "./CommentCard.jsx";
import CommentReplyModal from "./CommentReplyModal.jsx";

const ManageComments = () => {
  const [comments, setComments] = useState([
    {
      id: "1",
      userName: "امیرحسین عباسی",
      userRole: "student",
      targetTitle: "دوره جامع Deep Coding",
      content:
        "استاد سلام، بخش مربوط به پیکربندی Node.js در سرور اوبونتو هماهنگ نیست با نسخه جدید، لطفا چک کنید.",
      status: "pending",
      createdAt: "۱۴۰۵/۰۴/۰۲",
    },
    {
      id: "2",
      userName: "سارا محمدی",
      userRole: "student",
      targetTitle: "متخصص Next.js پیشرفته",
      content:
        "فوق‌العاده‌ترین کلاسی بود که شرکت کردم. معماری پروژه بسیار تمیز تدریس شده.",
      status: "approved",
      createdAt: "۱۴۰۵/۰۳/۲۹",
    },
    {
      id: "3",
      userName: "رضا کریمی",
      userRole: "teacher",
      targetTitle: "مقاله بهینه‌سازی کدهای TypeScript",
      content: "ممنون از مقاله خوبتون، کاملاً کاربردی و دقیق بود.",
      status: "approved",
      createdAt: "۱۴۰۵/۰۳/۲۵",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const totalCount = comments.length;
  const pendingCount = comments.filter((c) => c.status === "pending").length;
  const approvedCount = comments.filter((c) => c.status === "approved").length;

  const handleApproveComment = (id) => {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, status: "approved" } : c)),
    );
    console.log(`Comment ${id} approved.`);
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
    console.log(`Comment ${id} deleted.`);
  };

  const handleOpenReplyModal = (comment) => {
    setSelectedComment(comment);
    setIsModalOpen(true);
  };

  const handleInsertReply = (commentId, replyMessage) => {
    setComments(
      comments.map((c) =>
        c.id === commentId ? { ...c, status: "approved" } : c,
      ),
    );
    console.log(`Replied to comment ${commentId}: ${replyMessage}`);
    setIsModalOpen(false);
  };

  const filteredComments = comments.filter((c) => {
    const matchesSearch =
      c.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.userName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
