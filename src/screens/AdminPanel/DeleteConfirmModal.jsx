import React from "react";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, userName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full max-w-sm shadow-2xl text-center">
        <div className="text-3xl mb-2">🚨</div>
        <h3 className="text-base font-black text-white mb-2">
          حذف حساب کاربری
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          آیا از حذف دائم کاربر{" "}
          <span className="text-rose-400 font-bold">«{userName}»</span> مطمئن
          هستید؟ تمام دسترسی‌ها و اطلاعات او پاک خواهد شد.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={onConfirm}
            className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex-1"
          >
            بله، حذف شود
          </button>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2.5 rounded-xl transition-colors flex-1"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
