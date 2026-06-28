import React from "react";

const CommentCard = ({ comment, onApprove, onOpenReply, onDelete }) => {
  return (
    <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl flex flex-col gap-4 hover:border-slate-700/80 transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800/50 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300">
            {comment.userName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-200">
                {comment.userName}
              </h4>
              <span className="bg-slate-950 text-slate-400 text-[9px] px-1.5 py-0.5 rounded border border-slate-800 dir-ltr">
                {comment.userRole === "teacher" ? "👨‍🏫 مدرس" : "👨‍🎓 دانشجو"}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">
              {comment.createdAt} • ثبت شده برای:{" "}
              <span className="text-violet-400 font-semibold">
                «{comment.targetTitle}»
              </span>
            </p>
          </div>
        </div>

        <div>
          {comment.status === "pending" ? (
            <span className="bg-amber-500/10 text-amber-400 text-[10px] px-2 py-1 rounded-md border border-amber-500/20 font-bold">
              ⏳ در انتظار تایید
            </span>
          ) : (
            <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded-md border border-emerald-500/20 font-bold">
              ✅ تایید شده
            </span>
          )}
        </div>
      </div>

      <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-950">
        {comment.content}
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          {comment.status === "pending" && (
            <button
              onClick={() => onApprove(comment.id)}
              className="bg-emerald-500/10 hover:bg-emerald-600 border border-emerald-500/20 hover:border-emerald-600 text-emerald-400 hover:text-white text-[11px] font-bold px-3 py-2 rounded-xl transition-all"
            >
              ✔️ تایید نمایش
            </button>
          )}
          <button
            onClick={() => onOpenReply(comment)}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-cyan-400 text-[11px] font-bold px-3 py-2 rounded-xl transition-colors"
          >
            💬 پاسخ به نظر
          </button>
        </div>

        <button
          onClick={() => onDelete(comment.id)}
          className="text-slate-500 hover:text-rose-400 text-xs p-2 transition-colors"
          title="حذف کامنت"
        >
          🗑️ حذف قطعی
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
