import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useLogin } from "./useLogin";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const LoginForm = () => {
  const { login, isPending } = useLogin();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const validation = yup.object().shape({
    email: yup
      .string()
      .required("لطفاً ایمیل را وارد کنید.")
      .email("فرمت ایمیل صحیح نیست."),
    password: yup.string().required("لطفاً رمز عبور را وارد کنید."),
  });

  const onSubmit = (values) => {
    const { email, password } = values;
    if (!email || !password) return;
    login({ email, password });
  };

  return (
    <section dir="rtl" className="w-full font-iransans">
      <h1 className="text-3xl font-black text-gray-900 mb-2">ورود به حساب</h1>

      <div className="mb-8 flex flex-wrap gap-2 text-sm">
        <span className="text-gray-500">آیا هنوز ثبت نام نکرده‌اید؟</span>
        <Link
          onClick={scrollToTop}
          to="/sign-up"
          className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          ثبت نام رایگان
        </Link>
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6" aria-live="polite">
            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                ایمیل
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  aria-required="true"
                  className="w-full bg-gray-50/50 rounded-xl border border-gray-200 pr-11 pl-4 py-3.5 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1.5"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                رمز عبور
              </label>
              <div className="relative">
                {/* Lock Icon (Right Side in RTL) */}
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <Field
                  id="password"
                  name="password"
                  type={passwordIsVisible ? "text" : "password"}
                  placeholder="••••••••"
                  dir="ltr"
                  aria-required="true"
                  disabled={isPending || isSubmitting}
                  className="w-full bg-gray-50/50 rounded-xl border border-gray-200 pr-11 pl-12 py-3.5 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                />

                {/* Eye Icon (Left Side in RTL) */}
                <button
                  type="button"
                  onClick={() => setPasswordIsVisible((s) => !s)}
                  aria-pressed={passwordIsVisible}
                  aria-label={
                    passwordIsVisible ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"
                  }
                  className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 hover:text-gray-700 transition-colors"
                >
                  {passwordIsVisible ? (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 3l18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.58 10.58A3 3 0 0113.42 13.42"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1.5"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-sm text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-gray-500 hover:text-indigo-600 font-medium transition-colors"
              >
                رمز عبور خود را فراموش کرده‌اید؟
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending || isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-700 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 mt-4"
            >
              {isPending || isSubmitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeOpacity="0.25"
                    />
                    <path
                      d="M22 12a10 10 0 00-10-10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>در حال ورود ...</span>
                </>
              ) : (
                "ورود به حساب"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default LoginForm;
