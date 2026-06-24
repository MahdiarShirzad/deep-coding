import React, { useState } from "react";

const CATEGORIES = [
  "برنامه نویسی وب",
  "برنامه نویسی موبایل",
  "هوش مصنوعی و یادگیری ماشین",
  "دیتا ساینس",
  "بک‌اند و پایگاه داده",
  "DevOps و Cloud",
  "امنیت و شبکه",
];

const LEVELS = ["مقدماتی", "متوسط", "پیشرفته", "همه سطوح"];

const TABS = [
  { id: "basic", label: "📋 اطلاعات پایه" },
  { id: "media", label: "🖼️ رسانه" },
  { id: "description", label: "📝 توضیحات" },
  { id: "content", label: "📚 محتوا" },
  { id: "sections", label: "🗂️ بخش‌ها" },
];

// Default empty formData shape — use this when initialising state in the parent
export const EMPTY_COURSE_FORM = {
  name: "",
  category: "",
  level: "همه سطوح",
  status: "published",
  price: "",
  discountPrice: "",
  time: "",
  img: null, // File object
  introductionVideo: null, // File object
  desc: "",
  introduction: "",
  willLearn: [""],
  requirements: [""],
  tags: [],
  sections: [],
};

const CourseFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  modalMode,
  formData,
  setFormData,
}) => {
  const [activeTab, setActiveTab] = useState("basic");

  // All hooks must be before any conditional return
  if (!isOpen) return null;

  /* ─── helpers ─────────────────────────────────────────────────── */
  const set = (field, value) => setFormData({ ...formData, [field]: value });

  const arrSet = (field, i, value) => {
    const a = [...(formData[field] || [])];
    a[i] = value;
    set(field, a);
  };
  const arrAdd = (field) => set(field, [...(formData[field] || []), ""]);
  const arrDel = (field, i) => {
    const a = [...(formData[field] || [])];
    a.splice(i, 1);
    set(field, a);
  };

  // Sections
  const secAdd = () =>
    set("sections", [...(formData.sections || []), { title: "", lessons: [] }]);

  const secUpd = (si, field, value) => {
    const s = (formData.sections || []).map((x, i) =>
      i === si ? { ...x, [field]: value } : x,
    );
    set("sections", s);
  };

  const secDel = (si) => {
    const s = [...(formData.sections || [])];
    s.splice(si, 1);
    set("sections", s);
  };

  // Lessons
  const lesAdd = (si) => {
    const s = (formData.sections || []).map((x, i) =>
      i !== si
        ? x
        : {
            ...x,
            lessons: [
              ...x.lessons,
              {
                title: "",
                videoUrl: null, // File object
                duration: "",
                isFree: false,
                order: x.lessons.length + 1,
              },
            ],
          },
    );
    set("sections", s);
  };

  const lesUpd = (si, li, field, value) => {
    const s = (formData.sections || []).map((x, i) =>
      i !== si
        ? x
        : {
            ...x,
            lessons: x.lessons.map((l, j) =>
              j !== li ? l : { ...l, [field]: value },
            ),
          },
    );
    set("sections", s);
  };

  const lesDel = (si, li) => {
    const s = (formData.sections || []).map((x, i) => {
      if (i !== si) return x;
      const ls = [...x.lessons];
      ls.splice(li, 1);
      return { ...x, lessons: ls };
    });
    set("sections", s);
  };

  // Returns display name for a file field (works for both File objects and plain strings)
  const fname = (value) => {
    if (!value) return null;
    return typeof value === "string" ? value : value.name;
  };

  /* ─── shared class strings ─────────────────────────────────────── */
  const inputCls =
    "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm " +
    "focus:outline-none focus:border-violet-500 text-white transition-colors placeholder:text-slate-700";

  /* ─── sub-components (no hooks → safe as render helpers) ───────── */
  const ArrayField = ({ field, label, required, placeholder }) => (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400">
          {label}
          {required && " *"}
        </span>
        <button
          type="button"
          onClick={() => arrAdd(field)}
          className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
        >
          + افزودن
        </button>
      </div>
      <div className="space-y-2">
        {(formData[field]?.length ? formData[field] : [""]).map((item, i) => (
          <div key={i} className="flex gap-2 items-center">
            <span className="text-xs text-slate-600 w-4 flex-shrink-0 text-left">
              {i + 1}.
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => arrSet(field, i, e.target.value)}
              className={`${inputCls} flex-1`}
              placeholder={`${placeholder} ${i + 1}`}
            />
            {formData[field]?.length > 1 && (
              <button
                type="button"
                onClick={() => arrDel(field, i)}
                className="text-slate-600 hover:text-red-400 text-sm flex-shrink-0 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const FilePickerBtn = ({ id, field, accept, icon, placeholder }) => (
    <label
      htmlFor={id}
      className="flex items-center gap-3 w-full bg-slate-950 border border-slate-800
                 hover:border-violet-500 rounded-xl px-4 py-3 cursor-pointer transition-colors"
    >
      <span className="text-base">{icon}</span>
      <span
        className={`text-sm truncate flex-1 ${formData[field] ? "text-white" : "text-slate-500"}`}
      >
        {fname(formData[field]) || placeholder}
      </span>
      {formData[field] && (
        <span className="text-xs text-violet-400 flex-shrink-0 border border-violet-800 rounded px-2 py-0.5">
          تغییر
        </span>
      )}
      <input
        id={id}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => e.target.files[0] && set(field, e.target.files[0])}
      />
    </label>
  );

  /* ─── render ───────────────────────────────────────────────────── */
  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col"
        style={{ maxHeight: "90vh" }}
        dir="rtl"
      >
        {/* ── Header + Tabs ── */}
        <div className="px-5 pt-5 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {modalMode === "add" ? "✨ ایجاد دوره جدید" : "🛠️ ویرایش دوره"}
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

        {/* ── Scrollable body ── */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
            {/* ════ TAB: Basic ════ */}
            {activeTab === "basic" && (
              <>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    نام دوره آموزشی *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name || ""}
                    onChange={(e) => set("name", e.target.value)}
                    className={inputCls}
                    placeholder="مثلا: آموزش گام به گام TypeScript"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    دسته‌بندی *
                  </label>
                  <select
                    required
                    value={formData.category || ""}
                    onChange={(e) => set("category", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">انتخاب دسته‌بندی...</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      سطح دوره *
                    </label>
                    <select
                      required
                      value={formData.level || "همه سطوح"}
                      onChange={(e) => set("level", e.target.value)}
                      className={inputCls}
                    >
                      {LEVELS.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      وضعیت انتشار
                    </label>
                    <select
                      value={formData.status || "published"}
                      onChange={(e) => set("status", e.target.value)}
                      className={inputCls}
                    >
                      <option value="published">انتشار عمومی</option>
                      <option value="draft">پیش‌نویس (مخفی)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      قیمت (تومان) *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.price || ""}
                      onChange={(e) => set("price", e.target.value)}
                      className={inputCls}
                      placeholder="4500000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      قیمت تخفیفی (تومان)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.discountPrice || ""}
                      onChange={(e) => set("discountPrice", e.target.value)}
                      className={inputCls}
                      placeholder="اختیاری"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    مدت زمان دوره (ساعت) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.time || ""}
                    onChange={(e) => set("time", e.target.value)}
                    className={inputCls}
                    placeholder="مثلا: 20"
                  />
                </div>
              </>
            )}

            {/* ════ TAB: Media ════ */}
            {activeTab === "media" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    تصویر کاور دوره *
                  </label>
                  <FilePickerBtn
                    id="img-input"
                    field="img"
                    accept="image/*"
                    icon="🖼️"
                    placeholder="انتخاب تصویر (PNG، JPG، WebP)"
                  />
                  {/* Live preview */}
                  {formData.img && typeof formData.img !== "string" && (
                    <div className="mt-2 rounded-xl overflow-hidden border border-slate-700 aspect-video bg-slate-950">
                      <img
                        src={URL.createObjectURL(formData.img)}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    ویدیو معرفی دوره *
                  </label>
                  <FilePickerBtn
                    id="intro-video-input"
                    field="introductionVideo"
                    accept="video/*"
                    icon="🎬"
                    placeholder="انتخاب ویدیو معرفی (MP4، WebM)"
                  />
                  {formData.introductionVideo && (
                    <div className="mt-2 flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                      <span className="text-green-400 text-sm">✓</span>
                      <span className="text-xs text-slate-300 truncate flex-1">
                        {fname(formData.introductionVideo)}
                      </span>
                      {formData.introductionVideo?.size && (
                        <span className="text-xs text-slate-500 flex-shrink-0">
                          {(
                            formData.introductionVideo.size /
                            1024 /
                            1024
                          ).toFixed(1)}{" "}
                          MB
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ════ TAB: Description ════ */}
            {activeTab === "description" && (
              <>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    توضیح کوتاه *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.desc || ""}
                    onChange={(e) => set("desc", e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="یک پاراگراف خلاصه درباره دوره..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    معرفی کامل دوره *
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={formData.introduction || ""}
                    onChange={(e) => set("introduction", e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="توضیحات جامع دوره را اینجا بنویسید..."
                  />
                </div>
              </>
            )}

            {/* ════ TAB: Content ════ */}
            {activeTab === "content" && (
              <>
                <ArrayField
                  field="willLearn"
                  label="چه چیزی یاد می‌گیرید"
                  required
                  placeholder="مورد"
                />

                <div className="border-t border-slate-800/70 pt-4">
                  <ArrayField
                    field="requirements"
                    label="پیش‌نیازها"
                    required
                    placeholder="پیش‌نیاز"
                  />
                </div>

                <div className="border-t border-slate-800/70 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400">
                      تگ‌ها <span className="text-slate-600">(اختیاری)</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => arrAdd("tags")}
                      className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      + افزودن
                    </button>
                  </div>
                  {!formData.tags || formData.tags.length === 0 ? (
                    <p className="text-xs text-slate-700 text-center py-4 border border-dashed border-slate-800 rounded-xl">
                      هنوز تگی اضافه نشده
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {formData.tags.map((tag, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <input
                            type="text"
                            value={tag}
                            onChange={(e) => arrSet("tags", i, e.target.value)}
                            className={`${inputCls} flex-1`}
                            placeholder={`تگ ${i + 1}`}
                          />
                          <button
                            type="button"
                            onClick={() => arrDel("tags", i)}
                            className="text-slate-600 hover:text-red-400 text-sm flex-shrink-0 transition-colors"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* ════ TAB: Sections ════ */}
            {activeTab === "sections" && (
              <div className="space-y-3">
                {(!formData.sections || formData.sections.length === 0) && (
                  <div className="text-center py-10 text-slate-600 text-sm border border-dashed border-slate-800 rounded-xl">
                    <div className="text-2xl mb-2">🗂️</div>
                    هنوز بخشی اضافه نشده
                  </div>
                )}

                {(formData.sections || []).map((sec, si) => (
                  <div
                    key={si}
                    className="border border-slate-700 rounded-xl overflow-hidden"
                  >
                    {/* Section header */}
                    <div className="flex items-center gap-2 bg-slate-800/60 px-3 py-2.5">
                      <span className="text-xs font-bold text-violet-400 flex-shrink-0 bg-violet-950 border border-violet-800 rounded px-1.5 py-0.5">
                        بخش {si + 1}
                      </span>
                      <input
                        type="text"
                        value={sec.title}
                        onChange={(e) => secUpd(si, "title", e.target.value)}
                        className="flex-1 bg-transparent text-sm text-white focus:outline-none placeholder:text-slate-600"
                        placeholder="عنوان بخش..."
                      />
                      <button
                        type="button"
                        onClick={() => secDel(si)}
                        className="text-slate-500 hover:text-red-400 transition-colors text-sm flex-shrink-0"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Lessons */}
                    <div className="p-3 space-y-2">
                      {(sec.lessons || []).map((les, li) => (
                        <div
                          key={li}
                          className="bg-slate-950 border border-slate-800 rounded-lg p-3 space-y-2.5"
                        >
                          {/* Lesson title */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-600 flex-shrink-0 w-12">
                              درس {li + 1}
                            </span>
                            <input
                              type="text"
                              value={les.title}
                              onChange={(e) =>
                                lesUpd(si, li, "title", e.target.value)
                              }
                              className="flex-1 bg-transparent text-sm text-white focus:outline-none border-b border-slate-800 focus:border-violet-500 pb-0.5 transition-colors placeholder:text-slate-700"
                              placeholder="عنوان درس..."
                            />
                            <button
                              type="button"
                              onClick={() => lesDel(si, li)}
                              className="text-slate-600 hover:text-red-400 transition-colors text-sm flex-shrink-0"
                            >
                              ✕
                            </button>
                          </div>

                          {/* Video file picker */}
                          <label
                            htmlFor={`v-${si}-${li}`}
                            className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-violet-600 rounded-lg px-3 py-2 cursor-pointer transition-colors"
                          >
                            <span className="text-violet-400 text-xs">🎬</span>
                            <span
                              className={`text-xs truncate flex-1 ${les.videoUrl ? "text-white" : "text-slate-600"}`}
                            >
                              {fname(les.videoUrl) || "انتخاب فایل ویدیو..."}
                            </span>
                            {les.videoUrl?.size && (
                              <span className="text-xs text-slate-500 flex-shrink-0">
                                {(les.videoUrl.size / 1024 / 1024).toFixed(1)}{" "}
                                MB
                              </span>
                            )}
                            <input
                              id={`v-${si}-${li}`}
                              type="file"
                              accept="video/*"
                              className="hidden"
                              onChange={(e) =>
                                e.target.files[0] &&
                                lesUpd(si, li, "videoUrl", e.target.files[0])
                              }
                            />
                          </label>

                          {/* Duration + isFree */}
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min="0"
                              value={les.duration || ""}
                              onChange={(e) =>
                                lesUpd(si, li, "duration", e.target.value)
                              }
                              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-violet-500 transition-colors placeholder:text-slate-700"
                              placeholder="مدت (ثانیه)"
                            />
                            <label className="flex items-center gap-1.5 cursor-pointer flex-shrink-0 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5">
                              <input
                                type="checkbox"
                                checked={les.isFree || false}
                                onChange={(e) =>
                                  lesUpd(si, li, "isFree", e.target.checked)
                                }
                                className="w-3.5 h-3.5"
                                style={{ accentColor: "#7c3aed" }}
                              />
                              <span className="text-xs text-slate-400">
                                رایگان
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => lesAdd(si)}
                        className="w-full text-xs text-slate-500 hover:text-violet-400 border border-dashed border-slate-700 hover:border-violet-700 rounded-lg py-2.5 transition-colors"
                      >
                        + افزودن درس
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={secAdd}
                  className="w-full text-xs text-violet-400 hover:text-violet-300 border border-dashed border-violet-800 hover:border-violet-600 rounded-xl py-3 transition-colors"
                >
                  + افزودن بخش جدید
                </button>
              </div>
            )}
          </div>

          {/* ── Footer ── */}
          <div className="px-5 py-4 border-t border-slate-800/80 flex items-center gap-3 flex-shrink-0">
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors flex-1"
            >
              {modalMode === "add" ? "✨ ایجاد دوره" : "💾 اعمال تغییرات"}
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

export default CourseFormModal;
