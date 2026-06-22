import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditProfile = () => {
  // دیتای یوزر که از سمت بک‌اند یا Context لود شده است
  const userData = {
    fullName: "Leo Messi",
    email: "leomessi@example.com",
    role: "student",
    avatar: "",
    phone: "",
    address: "",
  };

  // استیت برای نمایش آنی پیش‌نمایش آواتار آپلود شده
  const [avatarPreview, setAvatarPreview] = useState(userData.avatar || null);

  // اسکیمای ولیدیشن با Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی است"),
    phone: Yup.string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره موبایل وارد شده معتبر نیست")
      .nullable(),
    address: Yup.string().nullable(),
    // ولیدیشن شرطی برای تغییر رمز عبور
    oldPassword: Yup.string().when("newPassword", {
      is: (val) => val && val.length > 0,
      then: () =>
        Yup.string().required(
          "برای تغییر رمز عبور، وارد کردن رمز عبور قدیمی الزامی است",
        ),
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
      fullName: userData.fullName || "",
      email: userData.email || "", // غیرقابل تغییر در UI
      phone: userData.phone || "",
      address: userData.address || "",
      avatar: null, // فایل اصلی آپلود شده اینجا قرار می‌گیرد
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // ساخت FormData برای ارسال دیتای ترکیبی (متن + فایل) به بک‌اند
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      if (values.avatar) formData.append("avatar", values.avatar);
      if (values.newPassword) {
        formData.append("oldPassword", values.oldPassword);
        formData.append("newPassword", values.newPassword);
      }

      console.log("Form Data to send:", values);
      // اینجا تابع apiUpdateProfile(formData) شما صدا زده می‌شود.
    },
  });

  // هندل کردن تغییر فایل آواتار
  const handleAvatarChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("avatar", file);
      setAvatarPreview(URL.createObjectURL(file)); // ایجاد لینک موقت برای پیش‌نمایش
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#161e2e] text-slate-100 p-4 md:p-8 rounded-xl font-iransans border border-slate-900 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-[#1f293d] rounded-2xl p-6 md:p-8 shadow-xl border border-slate-800/50">
        {/* هدر صفحه */}
        <div className="mb-8 border-b border-slate-800 pb-5">
          <h1 className="text-2xl font-black text-white">ویرایش پروفایل</h1>
          <p className="text-xs text-slate-400 mt-1">
            اطلاعات حساب کاربری خود را به‌روزرسانی کنید
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* ستون اول: بخش آواتار */}
          <div className="flex flex-col items-center space-y-4 border-b md:border-b-0 md:border-l border-slate-800 pb-6 md:pb-0 md:pl-6">
            <span className="text-sm font-semibold text-slate-300 self-start md:self-center">
              تصویر پروفایل
            </span>
            <div className="relative group w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 bg-slate-800 flex items-center justify-center shadow-lg">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-cyan-400">
                  {formik.values.fullName
                    ? formik.values.fullName.charAt(0)
                    : "U"}
                </span>
              )}
              {/* لایه هاور برای آپلود عکس جدید */}
              <label
                htmlFor="avatar-upload"
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300"
              >
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
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
            <p className="text-[11px] text-slate-400 text-center px-4">
              فرمت‌های مجاز: JPG، PNG. حداکثر ۲ مگابایت
            </p>
          </div>

          {/* ستون دوم و سوم: فرم اطلاعات متنی */}
          <div className="md:col-span-2 space-y-6">
            {/* بخش مشخصات فردی */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="fullName"
                  className={`w-full bg-[#161e2e] border ${formik.touched.fullName && formik.errors.fullName ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-500"} rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors`}
                  {...formik.getFieldProps("fullName")}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-red-400 text-xs mt-1 mr-1">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">
                  آدرس ایمیل (غیر قابل تغییر)
                </label>
                <input
                  type="email"
                  disabled
                  className="w-full bg-[#111723] border border-slate-900 rounded-lg px-4 py-2.5 text-sm text-slate-500 cursor-not-allowed select-none"
                  value={formik.values.email}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  شماره موبایل
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="مثال: 09123456789"
                  className={`w-full bg-[#161e2e] border ${formik.touched.phone && formik.errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-500"} rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors text-left dir-ltr`}
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-400 text-xs mt-1 mr-1">
                    {formik.errors.phone}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  آدرس سکونت
                </label>
                <textarea
                  name="address"
                  rows="2"
                  className="w-full bg-[#161e2e] border border-slate-800 focus:border-cyan-500 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors resize-none"
                  {...formik.getFieldProps("address")}
                />
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-5 mt-6">
              <h3 className="text-sm font-bold text-violet-400 mb-4">
                تغییر رمز عبور
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
                    className={`w-full bg-[#161e2e] border ${formik.touched.oldPassword && formik.errors.oldPassword ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-500"} rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors`}
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
                      className={`w-full bg-[#161e2e] border ${formik.touched.newPassword && formik.errors.newPassword ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-500"} rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors`}
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
                      تکرار رمز عبور جدید
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      className={`w-full bg-[#161e2e] border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-cyan-500"} rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors`}
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
                className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-cyan-900/20 active:scale-[0.98]"
              >
                {formik.isSubmitting ? "در حال ذخیره‌سازی..." : "ذخیره تغییرات"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
