import React, { useState } from "react";

const BLOG_CATEGORIES = [
  "Artificial Intelligence",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "DevOps & Cloud",
  "Security",
  "Database",
  "Programming",
  "Open Source",
];

const TABS = [
  { id: "basic", label: "📋 اطلاعات پایه" },
  { id: "media", label: "🖼️ رسانه" },
  { id: "tags", label: "🏷️ تگ‌ها" },
  { id: "content", label: "📝 محتوا" },
];

export const EMPTY_BLOG_FORM = {
  title: "",
  slug: "",
  category: "",
  author: "",
  status: "published",
  coverImg: null,
  tags: [],
  content: [],
};

const toSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w\u0600-\u06FF-]/g, "")
    .replace(/--+/g, "-");

const BlogFormModal = ({
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

  /* ── Content section helpers ── */
  const contentAdd = () =>
    set("content", [
      ...(formData.content ?? []),
      { heading: "", headingId: "", text: "", images: [] },
    ]);

  /** Update heading + auto-derive headingId */
  const contentHeadingUpd = (ci, heading) => {
    const updated = (formData.content ?? []).map((x, i) =>
      i !== ci ? x : { ...x, heading, headingId: toSlug(heading) },
    );
    set("content", updated);
  };

  const contentUpd = (ci, field, value) => {
    const updated = (formData.content ?? []).map((x, i) =>
      i !== ci ? x : { ...x, [field]: value },
    );
    set("content", updated);
  };

  const contentDel = (ci) => {
    const c = [...(formData.content ?? [])];
    c.splice(ci, 1);
    set("content", c);
  };

  /* ── Content image helpers ── */
  const imgAdd = (ci) => {
    const updated = (formData.content ?? []).map((x, i) =>
      i !== ci
        ? x
        : { ...x, images: [...(x.images ?? []), { url: "", caption: "" }] },
    );
    set("content", updated);
  };

  const imgUpd = (ci, ii, field, value) => {
    const updated = (formData.content ?? []).map((x, i) =>
      i !== ci
        ? x
        : {
            ...x,
            images: (x.images ?? []).map((img, j) =>
              j !== ii ? img : { ...img, [field]: value },
            ),
          },
    );
    set("content", updated);
  };

  const imgDel = (ci, ii) => {
    const updated = (formData.content ?? []).map((x, i) => {
      if (i !== ci) return x;
      const imgs = [...(x.images ?? [])];
      imgs.splice(ii, 1);
      return { ...x, images: imgs };
    });
    set("content", updated);
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

  const tinyInputCls =
    "w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white " +
    "focus:outline-none focus:border-violet-500 transition-colors placeholder:text-slate-700";

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
              {modalMode === "add" ? "✍️ ایجاد مقاله جدید" : "🛠️ ویرایش مقاله"}
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
                    عنوان مقاله *
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
                    placeholder="مثلا: شبکه‌های عصبی چیست؟ راهنمای کامل برای مبتدی‌ها"
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
                    placeholder="what-is-neural-network"
                    dir="ltr"
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    نویسنده *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author ?? ""}
                    onChange={(e) => set("author", e.target.value)}
                    className={inputCls}
                    placeholder="مثلا: Mahdyar Shirzad"
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
                      {BLOG_CATEGORIES.map((c) => (
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
                    تصویر کاور مقاله *
                  </label>

                  {/* File picker button */}
                  <label
                    htmlFor="blog-cover-img"
                    className="flex items-center gap-3 w-full bg-slate-950 border border-slate-800
                               hover:border-violet-500 rounded-xl px-4 py-3 cursor-pointer transition-colors"
                  >
                    <span className="text-base">🖼️</span>
                    <span
                      className={`text-sm truncate flex-1 ${
                        formData.coverImg ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {fname(formData.coverImg) ??
                        "انتخاب تصویر (PNG، JPG، WebP)"}
                    </span>
                    {formData.coverImg && (
                      <span className="text-xs text-violet-400 flex-shrink-0 border border-violet-800 rounded px-2 py-0.5">
                        تغییر
                      </span>
                    )}
                    <input
                      id="blog-cover-img"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        e.target.files[0] && set("coverImg", e.target.files[0])
                      }
                    />
                  </label>

                  {/* Live preview — new File object */}
                  {formData.coverImg &&
                    typeof formData.coverImg !== "string" && (
                      <div className="mt-2 rounded-xl overflow-hidden border border-slate-700 aspect-video bg-slate-950">
                        <img
                          src={URL.createObjectURL(formData.coverImg)}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                  {/* Preview — existing URL string (edit mode) */}
                  {formData.coverImg &&
                    typeof formData.coverImg === "string" && (
                      <div className="mt-2 rounded-xl overflow-hidden border border-slate-700 aspect-video bg-slate-950">
                        <img
                          src={formData.coverImg}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                </div>
              </div>
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
                          placeholder={`تگ ${i + 1} — مثلا: Deep Learning`}
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

            {/* ════ TAB: Content ════ */}
            {activeTab === "content" && (
              <div className="space-y-3">
                {(!formData.content || formData.content.length === 0) && (
                  <div className="text-center py-10 text-slate-600 text-sm border border-dashed border-slate-800 rounded-xl">
                    <div className="text-2xl mb-2">📝</div>
                    هنوز بخشی اضافه نشده
                  </div>
                )}

                {(formData.content ?? []).map((sec, ci) => (
                  <div
                    key={ci}
                    className="border border-slate-700 rounded-xl overflow-hidden"
                  >
                    {/* Section header row */}
                    <div className="flex items-center gap-2 bg-slate-800/60 px-3 py-2.5">
                      <span className="text-xs font-bold text-violet-400 flex-shrink-0 bg-violet-950 border border-violet-800 rounded px-1.5 py-0.5">
                        بخش {ci + 1}
                      </span>
                      <input
                        type="text"
                        value={sec.heading}
                        onChange={(e) => contentHeadingUpd(ci, e.target.value)}
                        className="flex-1 bg-transparent text-sm text-white focus:outline-none placeholder:text-slate-600"
                        placeholder="عنوان بخش..."
                      />
                      <button
                        type="button"
                        onClick={() => contentDel(ci)}
                        className="text-slate-500 hover:text-red-400 transition-colors text-sm flex-shrink-0"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Section body */}
                    <div className="p-3 space-y-3">
                      {/* Heading ID */}
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">
                          Heading ID
                          <span className="text-slate-700 mr-1">
                            — خودکار از عنوان ساخته می‌شود
                          </span>
                        </label>
                        <input
                          type="text"
                          value={sec.headingId}
                          onChange={(e) =>
                            contentUpd(ci, "headingId", e.target.value)
                          }
                          className={`${tinyInputCls} font-mono`}
                          placeholder="what-is-neural-network"
                          dir="ltr"
                        />
                      </div>

                      {/* Body text */}
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">
                          متن بخش *
                        </label>
                        <textarea
                          rows={4}
                          value={sec.text}
                          onChange={(e) =>
                            contentUpd(ci, "text", e.target.value)
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-violet-500 resize-none placeholder:text-slate-700 transition-colors"
                          placeholder="متن این بخش از مقاله را بنویسید..."
                        />
                      </div>

                      {/* Images */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs text-slate-500">
                            تصاویر بخش{" "}
                            <span className="text-slate-700">(اختیاری)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => imgAdd(ci)}
                            className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                          >
                            + افزودن تصویر
                          </button>
                        </div>

                        {(sec.images ?? []).length === 0 ? (
                          <p className="text-xs text-slate-700 text-center py-2.5 border border-dashed border-slate-800 rounded-lg">
                            بدون تصویر
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {sec.images.map((img, ii) => (
                              <div
                                key={ii}
                                className="bg-slate-950 border border-slate-800 rounded-lg p-3 space-y-2"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-slate-600">
                                    تصویر {ii + 1}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => imgDel(ci, ii)}
                                    className="text-slate-600 hover:text-red-400 text-xs transition-colors"
                                  >
                                    ✕
                                  </button>
                                </div>
                                <input
                                  type="url"
                                  value={img.url}
                                  onChange={(e) =>
                                    imgUpd(ci, ii, "url", e.target.value)
                                  }
                                  className={tinyInputCls}
                                  placeholder="https://example.com/image.webp"
                                  dir="ltr"
                                />
                                <input
                                  type="text"
                                  value={img.caption}
                                  onChange={(e) =>
                                    imgUpd(ci, ii, "caption", e.target.value)
                                  }
                                  className={tinyInputCls}
                                  placeholder="توضیح تصویر..."
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={contentAdd}
                  className="w-full text-xs text-violet-400 hover:text-violet-300 border border-dashed border-violet-800 hover:border-violet-600 rounded-xl py-3 transition-colors"
                >
                  + افزودن بخش جدید
                </button>
              </div>
            )}
          </div>

          {/* ══ Footer ══ */}
          <div className="px-5 py-4 border-t border-slate-800/80 flex items-center gap-3 flex-shrink-0">
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors flex-1"
            >
              {modalMode === "add" ? "✨ ایجاد مقاله" : "💾 اعمال تغییرات"}
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

export default BlogFormModal;
