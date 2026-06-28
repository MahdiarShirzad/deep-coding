import React, { useState } from "react";

const CommentReplyModal = ({ isOpen, onClose, comment, onSubmitReply }) => {
  const [replyText, setReplyText] = useState("");

  if (!isOpen || !comment) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onSubmitReply(comment.id, replyText);
    setReplyText("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full max-w-lg shadow-2xl relative">
        <h3 className="text-sm font-black mb-4 text-white">
          💬 پاسخ ادمین به دیدگاه
        </h3>

        <div className="bg-slate-950 p-3 rounded-xl text-xs text-slate-400 mb-4 border border-slate-800/40 max-h-24 overflow-y-auto">
          <span className="font-bold text-slate-300 block mb-1">
            {comment.userName}:
          </span>
          {comment.content}
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-2">
              متن پاسخ شما (با اکانت مدیریت منتشر می‌شود):
            </label>
            <textarea
              rows="4"
              required
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="پاسخ خود را اینجا بنویسید..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-violet-500 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors resize-none leading-relaxed"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex-1"
            >
              ثبت و تایید نهایی پاسخ
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-5 py-2.5 rounded-xl transition-colors"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentReplyModal;
