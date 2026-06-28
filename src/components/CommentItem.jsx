import React from "react";

const CommentItem = ({ comment, isReply = false }) => {
  return (
    <div
      className={`mb-4 ${
        isReply
          ? "mr-8 pr-4 border-r-2 border-indigo-200 mt-4"
          : "border-b border-gray-100 pb-4 last:border-0"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 font-bold text-sm">
          {comment.user?.fullName ? comment.user.fullName.charAt(0) : "ک"}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">
            {comment.user?.fullName || "کاربر ناشناس"}
          </p>
          <div className="text-xs text-gray-400 mt-0.5">
            {new Date(comment.createdAt).toLocaleString("fa-IR")}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 leading-loose mr-10">
        {comment.text}
      </p>

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-3">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply._id ?? reply.createdAt}
              comment={reply}
              isReply={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
