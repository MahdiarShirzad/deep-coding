import React from "react";

const BlogDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  blogTitle,
  blogId,
  isPending,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative bg-[#111827] border border-slate-700 rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl"
        dir="rtl"
      >
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-rose-500/10 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-rose-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-lg font-bold text-white text-center mb-2">
          حذف مقاله
        </h2>
        <p className="text-slate-400 text-sm text-center mb-6">
          آیا از حذف مقاله{" "}
          <span className="text-white font-semibold">«{blogTitle}»</span> مطمئن
          هستید؟ این عملیات قابل بازگشت نیست.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={isPending}
            className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors disabled:opacity-50"
          >
            انصراف
          </button>
          <button
            onClick={() => onConfirm(blogId)}
            disabled={isPending}
            className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-rose-600 hover:bg-rose-500 text-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                در حال حذف...
              </>
            ) : (
              "بله، حذف شود"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDeleteModal;
