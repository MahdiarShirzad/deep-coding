import React, { useState } from "react";

/* ─── Constants ─────────────────────────────────────────────────────────── */

const BOOK_CATEGORIES = [
  "Programming",
  "Web Development",
  "Mobile Development",
  "Artificial Intelligence",
  "Data Science",
  "DevOps & Cloud",
  "Security",
  "Database",
  "Software Architecture",
  "Computer Science",
  "Open Source",
];

const TABS = [
  { id: "basic", label: "📋 اطلاعات پایه" },
  { id: "media", label: "🖼️ رسانه" },
  { id: "description", label: "📝 توضیحات" },
  { id: "tags", label: "🏷️ تگ‌ها" },
];

export const EMPTY_BOOK_FORM = {
  title: "",
  slug: "",
  category: "",
  authorName: "",
  status: "published",
  image: null,
  description: "",
  introduction: "",
  tags: [],
};

/* ─── Helpers ───────────────────────────────────────────────────────────── */

const toSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w\u0600-\u06FF-]/g, "")
    .replace(/--+/g, "-");

/* ─── Component ─────────────────────────────────────────────────────────── */

const BookFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  modalMode,
  formData,
  setFormData,
}) => {
  const [activeTab, setActiveTab] = useState("basic");

  if (!isOpen) return null;

  /* ── Primitive field setter ── */
  const set = (field, value) => setFormData({ ...formData, [field]: value });

  /* ── Tags helpers ── */
  const tagAdd = () => set("tags", [...(formData.tags ?? []), ""]);

  const tagSet = (i, value) => {
    const t = [...(formData.tags ?? [])];
    t[i] = value;
    set("tags", t);
  };

  const tagDel = (i) => {
    const t = [...(formData.tags ?? [])];
    t.splice(i, 1);
    set("tags", t);
  };

  /* ── Utility ── */
  const fname = (value) => {
    if (!value) return null;
    return typeof value === "string" ? value : value.name;
  };

  /* ── Shared class strings ── */
  const inputCls =
    "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm " +
    "focus:outline-none focus:border-violet-500 text-white transition-colors placeholder:text-slate-700";

  /* ─────────────────────────────────────────────────────────────────────── */
  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col"
        style={{ maxHeight: "90vh" }}
        dir="rtl"
      >
        {/* ══ Header + Tabs ══ */}
        <div className="px-5 pt-5 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {modalMode === "add" ? "📖 ایجاد کتاب جدید" : "🛠️ ویرایش کتاب"}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-500 hover:text-white transition-colors w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-800 text-lg"
            >
              ✕
            </button>
          </div>

          <div
            className="flex gap-0.5 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-2 text-xs font-medium whitespace-nowrap transition-all rounded-t-lg border-b-2 ${
                  activeTab === t.id
                    ? "text-violet-400 border-violet-500 bg-slate-950/60"
                    : "text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-800/40"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="border-b border-slate-800" />
        </div>

        {/* ══ Scrollable form body ══ */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
            {/* ════ TAB: Basic ════ */}
            {activeTab === "basic" && (
              <>
                {/* Title */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    عنوان کتاب *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title ?? ""}
                    onChange={(e) => {
                      const title = e.target.value;
                      setFormData({
                        ...formData,
                        title,
                        ...(modalMode === "add" ? { slug: toSlug(title) } : {}),
                      });
                    }}
                    className={inputCls}
                    placeholder="مثلا: Java Programming Mastery"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    اسلاگ (Slug) *
                    <span className="text-slate-600 mr-1">
                      — به صورت خودکار از عنوان ساخته می‌شود
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug ?? ""}
                    onChange={(e) => set("slug", e.target.value)}
                    className={`${inputCls} font-mono`}
                    placeholder="java-programming-mastery"
                    dir="ltr"
                  />
                </div>

                {/* Author name */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    نام نویسنده *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.authorName ?? ""}
                    onChange={(e) => set("authorName", e.target.value)}
                    className={inputCls}
                    placeholder="مثلا: James Robertson"
                  />
                </div>

                {/* Category + Status */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      دسته‌بندی *
                    </label>
                    <select
                      required
                      value={formData.category ?? ""}
                      onChange={(e) => set("category", e.target.value)}
                      className={inputCls}
                    >
                      <option value="">انتخاب دسته‌بندی...</option>
                      {BOOK_CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      وضعیت انتشار
                    </label>
                    <select
                      value={formData.status ?? "published"}
                      onChange={(e) => set("status", e.target.value)}
                      className={inputCls}
                    >
                      <option value="published">انتشار عمومی</option>
                      <option value="draft">پیش‌نویس (مخفی)</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* ════ TAB: Media ════ */}
            {activeTab === "media" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    تصویر جلد کتاب *
                  </label>

                  {/* File picker */}
                  <label
                    htmlFor="book-cover-img"
                    className="flex items-center gap-3 w-full bg-slate-950 border border-slate-800
                               hover:border-violet-500 rounded-xl px-4 py-3 cursor-pointer transition-colors"
                  >
                    <span className="text-base">🖼️</span>
                    <span
                      className={`text-sm truncate flex-1 ${
                        formData.image ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {fname(formData.image) ?? "انتخاب تصویر (PNG، JPG، WebP)"}
                    </span>
                    {formData.image && (
                      <span className="text-xs text-violet-400 flex-shrink-0 border border-violet-800 rounded px-2 py-0.5">
                        تغییر
                      </span>
                    )}
                    <input
                      id="book-cover-img"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        e.target.files[0] && set("image", e.target.files[0])
                      }
                    />
                  </label>

                  {/* Preview — new File */}
                  {formData.image && typeof formData.image !== "string" && (
                    <div
                      className="mt-3 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center"
                      style={{ aspectRatio: "3/4", maxHeight: "320px" }}
                    >
                      <img
                        src={URL.createObjectURL(formData.image)}
                        alt="preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Preview — existing URL (edit mode) */}
                  {formData.image && typeof formData.image === "string" && (
                    <div
                      className="mt-3 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center"
                      style={{ aspectRatio: "3/4", maxHeight: "320px" }}
                    >
                      <img
                        src={formData.image}
                        alt="preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <p className="mt-2 text-xs text-slate-600">
                    نسبت تصویر پیشنهادی: ۳ در ۴ (جلد کتاب)
                  </p>
                </div>
              </div>
            )}

            {/* ════ TAB: Description ════ */}
            {activeTab === "description" && (
              <>
                {/* Short description */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    توضیح کوتاه *
                    <span className="text-slate-600 mr-1">
                      — یک پاراگراف خلاصه
                    </span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description ?? ""}
                    onChange={(e) => set("description", e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="یک پاراگراف کوتاه درباره محتوا و هدف کتاب..."
                  />
                </div>

                {/* Full introduction */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    معرفی کامل کتاب *
                    <span className="text-slate-600 mr-1">
                      — متن مفصل صفحه کتاب
                    </span>
                  </label>
                  <textarea
                    required
                    rows={10}
                    value={formData.introduction ?? ""}
                    onChange={(e) => set("introduction", e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="معرفی جامع و کامل کتاب را اینجا بنویسید..."
                  />
                </div>
              </>
            )}

            {/* ════ TAB: Tags ════ */}
            {activeTab === "tags" && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">
                    تگ‌ها <span className="text-slate-600">(اختیاری)</span>
                  </span>
                  <button
                    type="button"
                    onClick={tagAdd}
                    className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    + افزودن
                  </button>
                </div>

                {!formData.tags || formData.tags.length === 0 ? (
                  <p className="text-xs text-slate-700 text-center py-8 border border-dashed border-slate-800 rounded-xl">
                    <span className="block text-2xl mb-2">🏷️</span>
                    هنوز تگی اضافه نشده
                  </p>
                ) : (
                  <div className="space-y-2">
                    {formData.tags.map((tag, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <span className="text-xs text-slate-600 w-4 flex-shrink-0 text-left">
                          {i + 1}.
                        </span>
                        <input
                          type="text"
                          value={tag}
                          onChange={(e) => tagSet(i, e.target.value)}
                          className={`${inputCls} flex-1`}
                          placeholder={`تگ ${i + 1} — مثلا: Java`}
                          dir="ltr"
                        />
                        <button
                          type="button"
                          onClick={() => tagDel(i)}
                          className="text-slate-600 hover:text-red-400 text-sm flex-shrink-0 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ══ Footer ══ */}
          <div className="px-5 py-4 border-t border-slate-800/80 flex items-center gap-3 flex-shrink-0">
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors flex-1"
            >
              {modalMode === "add" ? "📖 ایجاد کتاب" : "💾 اعمال تغییرات"}
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

export default BookFormModal;
