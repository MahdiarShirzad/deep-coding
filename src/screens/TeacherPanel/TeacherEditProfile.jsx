import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TeacherEditProfile = () => {
  // ۱. دیتای مدرس منطبق بر ساختار دیتابیس مونگو شما
  const teacherData = {
    _id: "6a27c3e535f29f88f0abd792",
    fullName: "Mahdiar Shirzad",
    email: "mahdiar@example.com",
    role: "teacher",
    avatar:
      "https://deepcoding-assets.s3.ir-thr-at1.arvanstorage.ir/users/avatars/avatar-6a27c3e535f29f88f0abd792-890919ce-0f29-4b1a-9fa8-0f9de9e9af87.webp",
    phone: "",
    address: "",
    teacherInfo: {
      socialLinks: {
        github: "",
        linkedin: "",
        website: "",
      },
      verificationStatus: true,
      specialty: "توسعه دهنده فرانت‌اند و Node.js",
    },
  };

  const [avatarPreview, setAvatarPreview] = useState(
    teacherData.avatar || null,
  );

  const validationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی است"),
    specialty: Yup.string().required("حوزه تخصص و فعالیت الزامی است"),
    phone: Yup.string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره موبایل وارد شده معتبر نیست")
      .nullable(),
    address: Yup.string().nullable(),
    github: Yup.string().url("لینک گیت‌هاب معتبر نیست").nullable(),
    linkedin: Yup.string().url("لینک لینکدین معتبر نیست").nullable(),
    website: Yup.string().url("آدرس وب‌سایت معتبر نیست").nullable(),

    oldPassword: Yup.string().when("newPassword", {
      is: (val) => val && val.length > 0,
      then: () => Yup.string().required("وارد کردن رمز عبور قدیمی الزامی است"),
      otherwise: () => Yup.string().notRequired(),
    }),
    newPassword: Yup.string().min(6, "رمز عبور جدید باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: Yup.string().when("newPassword", {
      is: (val) => val && val.length > 0,
      then: () =>
        Yup.string()
          .oneOf(
            [Yup.ref("newPassword")],
            "رمز عبور جدید و تکرار آن مطابقت ندارند",
          )
          .required("تکرار رمز عبور جدید الزامی است"),
      otherwise: () => Yup.string().notRequired(),
    }),
  });

  const formik = useFormik({
    initialValues: {
      fullName: teacherData.fullName || "",
      email: teacherData.email || "",
      phone: teacherData.phone || "",
      address: teacherData.address || "",
      specialty: teacherData.teacherInfo?.specialty || "",
      github: teacherData.teacherInfo?.socialLinks?.github || "",
      linkedin: teacherData.teacherInfo?.socialLinks?.linkedin || "",
      website: teacherData.teacherInfo?.socialLinks?.website || "",
      avatar: null,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      if (values.avatar) formData.append("avatar", values.avatar);

      formData.append("teacherInfo[specialty]", values.specialty);
      formData.append("teacherInfo[socialLinks][github]", values.github);
      formData.append("teacherInfo[socialLinks][linkedin]", values.linkedin);
      formData.append("teacherInfo[socialLinks][website]", values.website);

      if (values.newPassword) {
        formData.append("oldPassword", values.oldPassword);
        formData.append("newPassword", values.newPassword);
      }

      console.log("Teacher Profile Updated Data Form:", values);
    },
  });

  const handleAvatarChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("avatar", file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 rounded-2xl font-iransans flex justify-center items-start">
      <div className="w-full max-w-5xl bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800/60">
        <div className="mb-8 border-b border-slate-800 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-white">
              تنظیمات پروفایل مدرس
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              رزومه عمومی، اطلاعات کاربری و سطح دسترسی‌های خود را مدیریت کنید
            </p>
          </div>
          {teacherData.teacherInfo.verificationStatus && (
            <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              🛡️ مدرس احراز هویت شده
            </span>
          )}
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="flex flex-col items-center space-y-6 border-b lg:border-b-0 lg:border-l border-slate-800 pb-6 lg:pb-0 lg:pl-6">
            <div className="relative group w-36 h-36 rounded-full overflow-hidden border-2 border-violet-500/30 hover:border-fuchsia-500 transition-all duration-300 bg-slate-950 flex items-center justify-center shadow-xl">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-violet-400 to-fuchsia-400">
                  {formik.values.fullName
                    ? formik.values.fullName.charAt(0)
                    : "T"}
                </span>
              )}
              <label
                htmlFor="avatar-upload"
                className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300"
              >
                <span>📸</span>
                <span className="text-[10px] text-slate-300 mt-1">
                  تغییر تصویر
                </span>
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>

            <div className="w-full">
              <label className="block text-xs font-semibold text-slate-400 mb-2 text-center lg:text-right">
                عنوان تخصص شما
              </label>
              <input
                type="text"
                name="specialty"
                placeholder="مثلا: مدرس ارشد کامپیوتر یا توسعه دهنده وب"
                className={`w-full bg-slate-950 border ${formik.touched.specialty && formik.errors.specialty ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-violet-500"} rounded-xl px-4 py-2.5 text-sm text-center font-medium focus:outline-none transition-colors`}
                {...formik.getFieldProps("specialty")}
              />
              {formik.touched.specialty && formik.errors.specialty && (
                <div className="text-red-400 text-xs mt-1 text-center">
                  {formik.errors.specialty}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="fullName"
                  className={`w-full bg-slate-950 border ${formik.touched.fullName && formik.errors.fullName ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors`}
                  {...formik.getFieldProps("fullName")}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-red-400 text-xs mt-1 mr-1">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">
                  آدرس ایمیل (قفل شده)
                </label>
                <input
                  type="email"
                  disabled
                  className="w-full bg-slate-950/40 border border-slate-900 rounded-xl px-4 py-2.5 text-sm text-slate-500 cursor-not-allowed"
                  value={formik.values.email}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  شماره تماس ادمین
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="09123456789"
                  className={`w-full bg-slate-950 border ${formik.touched.phone && formik.errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm text-left dir-ltr focus:outline-none transition-colors`}
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-400 text-xs mt-1 mr-1">
                    {formik.errors.phone}
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-5">
              <h3 className="text-sm font-bold text-cyan-400 mb-4">
                🔗 شبکه‌های تخصصی و رزومه
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    آدرس گیت‌هاب (GitHub)
                  </label>
                  <input
                    type="text"
                    name="github"
                    placeholder="https://github.com/username"
                    className={`w-full bg-slate-950 border ${formik.touched.github && formik.errors.github ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm text-left dir-ltr focus:outline-none transition-colors`}
                    {...formik.getFieldProps("github")}
                  />
                  {formik.touched.github && formik.errors.github && (
                    <div className="text-red-400 text-xs mt-1 mr-1">
                      {formik.errors.github}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    آدرس لینکدین (LinkedIn)
                  </label>
                  <input
                    type="text"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    className={`w-full bg-slate-950 border ${formik.touched.linkedin && formik.errors.linkedin ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm text-left dir-ltr focus:outline-none transition-colors`}
                    {...formik.getFieldProps("linkedin")}
                  />
                  {formik.touched.linkedin && formik.errors.linkedin && (
                    <div className="text-red-400 text-xs mt-1 mr-1">
                      {formik.errors.linkedin}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    وب‌سایت شخصی / پورتفولیو
                  </label>
                  <input
                    type="text"
                    name="website"
                    placeholder="https://mywebsite.com"
                    className={`w-full bg-slate-950 border ${formik.touched.website && formik.errors.website ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm text-left dir-ltr focus:outline-none transition-colors`}
                    {...formik.getFieldProps("website")}
                  />
                  {formik.touched.website && formik.errors.website && (
                    <div className="text-red-400 text-xs mt-1 mr-1">
                      {formik.errors.website}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                آدرس سکونت / شرکت
              </label>
              <textarea
                name="address"
                rows="2"
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors resize-none"
                {...formik.getFieldProps("address")}
              />
            </div>

            <div className="border-t border-slate-800/80 pt-5">
              <h3 className="text-sm font-bold text-violet-400 mb-4">
                🔐 تغییر کلمه عبور مدیریت
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    رمز عبور فعلی
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    placeholder="••••••••"
                    className={`w-full bg-slate-950 border ${formik.touched.oldPassword && formik.errors.oldPassword ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors`}
                    {...formik.getFieldProps("oldPassword")}
                  />
                  {formik.touched.oldPassword && formik.errors.oldPassword && (
                    <div className="text-red-400 text-xs mt-1 mr-1">
                      {formik.errors.oldPassword}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      رمز عبور جدید
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="••••••••"
                      className={`w-full bg-slate-950 border ${formik.touched.newPassword && formik.errors.newPassword ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors`}
                      {...formik.getFieldProps("newPassword")}
                    />
                    {formik.touched.newPassword &&
                      formik.errors.newPassword && (
                        <div className="text-red-400 text-xs mt-1 mr-1">
                          {formik.errors.newPassword}
                        </div>
                      )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      تکرار کلمه عبور جدید
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      className={`w-full bg-slate-950 border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"} rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors`}
                      {...formik.getFieldProps("confirmPassword")}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <div className="text-red-400 text-xs mt-1 mr-1">
                          {formik.errors.confirmPassword}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg shadow-violet-950/50 active:scale-[0.98]"
              >
                {formik.isSubmitting
                  ? "در حال ثبت اطلاعات..."
                  : "بروزرسانی نهایی پروفایل مدرس"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherEditProfile;
