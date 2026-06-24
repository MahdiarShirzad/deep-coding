import React from "react";

const CourseFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  modalMode,
  formData,
  setFormData,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full max-w-lg shadow-2xl relative">
        <h3 className="text-lg font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          {modalMode === "add" ? "✨ ایجاد دوره جدید" : "🛠️ ویرایش مشخصات دوره"}
        </h3>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">
              نام دوره آموزشی
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 text-white transition-colors"
              placeholder="مثلا: آموزش گام به گام TypeScript"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">
                قیمت (تومان)
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 text-white transition-colors"
                placeholder="4500000"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">
                وضعیت انتشار
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 text-white transition-colors"
              >
                <option value="published">انتشار عمومی</option>
                <option value="draft">پیش‌نویس (مخفی)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 mt-6">
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors flex-1"
            >
              {modalMode === "add" ? "ایجاد کارگاه" : "اعمال تغییرات"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-5 py-3 rounded-xl transition-colors"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseFormModal;
