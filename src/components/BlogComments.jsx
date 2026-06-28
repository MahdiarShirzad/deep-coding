import React from "react";

const CommentNode = ({ comment }) => {
  return (
    <div className="mt-4">
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-sm text-gray-800">
            {comment.user}
          </span>
          <span className="text-[10px] text-gray-400">{comment.date}</span>
        </div>
        <p className="text-gray-700 text-sm leading-6">{comment.text}</p>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="mr-6 pr-4 border-r-2 border-indigo-200 mt-2">
          {comment.replies.map((reply) => (
            <CommentNode key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function BlogComments({ comments }) {
  if (!comments || comments.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">نظرات</h3>
      {comments.map((c) => (
        <CommentNode key={c.id} comment={c} />
      ))}
    </div>
  );
}
