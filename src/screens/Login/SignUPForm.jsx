import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSignUp } from "./useSignUp";
import { useQueryClient } from "@tanstack/react-query";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const SignUpForm = () => {
  const queryClient = useQueryClient();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordConfirmIsVisible, setPasswordConfirmIsVisible] =
    useState(false);

  const { signUp, isPending } = useSignUp();

  const initialValues = {
    email: "",
    fullName: "",
    password: "",
    passwordConfirm: "",
  };

  const validation = yup.object().shape({
    email: yup
      .string()
      .required("لطفاً ایمیل را وارد کنید.")
      .email("فرمت ایمیل صحیح نیست."),
    fullName: yup.string().required("لطفاً نام کاربری را وارد کنید."),
    password: yup
      .string()
      .required("لطفاً رمز عبور را وارد کنید.")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "رمز عبور باید شامل حروف و اعداد باشد.",
      ),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "رمز عبور و تکرار آن باید یکسان باشند.",
      )
      .required("لطفاً تکرار رمز عبور را وارد کنید."),
  });

  const handleSubmit = (values) => {
    const { email, password, fullName, passwordConfirm } = values;
    if (!email || !password || !fullName) return;
    signUp({ email, password, fullName, confirmPassword: passwordConfirm });
    queryClient.invalidateQueries(["user"]);
  };

  return (
    <section dir="rtl" className="w-full font-iransans">
      <h1 className="text-3xl font-black text-gray-900 mb-2">ثبت نام</h1>

      <div className="mb-8 flex flex-wrap gap-2 text-sm">
        <span className="text-gray-500">آیا قبلا ثبت نام کرده‌اید؟</span>
        <Link
          onClick={scrollToTop}
          to="/login"
          className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          ورود به حساب
        </Link>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5" aria-live="polite">
            {/* Top Row: Username & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  نام کاربری
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="نام کاربری"
                    className="w-full bg-gray-50/50 rounded-xl border border-gray-200 pr-11 pl-4 py-3 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  />
                </div>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-xs mt-1.5"
                />
              </div>

              {/* Email */}
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
                    dir="ltr"
                    placeholder="name@example.com"
                    className="w-full bg-gray-50/50 rounded-xl border border-gray-200 pr-11 pl-4 py-3 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1.5"
                />
              </div>
            </div>

            {/* Bottom Row: Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  رمز عبور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288"
                      />
                    </svg>
                  </div>
                  <Field
                    id="password"
                    name="password"
                    dir="ltr"
                    type={passwordIsVisible ? "text" : "password"}
                    placeholder="••••••••"
                    disabled={isPending}
                    className="w-full bg-gray-50/50 rounded-xl border border-gray-200 pr-11 pl-12 py-3 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                    className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {passwordIsVisible ? (
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3l18 18"
                        />
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.58 10.58A3 3 0 0113.42 13.42"
                        />
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1.5"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="passwordConfirm"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  تکرار رمز عبور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288"
                      />
                    </svg>
                  </div>
                  <Field
                    id="passwordConfirm"
                    name="passwordConfirm"
                    dir="ltr"
                    type={passwordConfirmIsVisible ? "text" : "password"}
                    placeholder="••••••••"
                    disabled={isPending}
                    className="w-full bg-gray-50/50 rounded-xl border border-gray-200 pr-11 pl-12 py-3 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setPasswordConfirmIsVisible(!passwordConfirmIsVisible)
                    }
                    className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {passwordConfirmIsVisible ? (
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3l18 18"
                        />
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.58 10.58A3 3 0 0113.42 13.42"
                        />
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="passwordConfirm"
                  component="div"
                  className="text-red-500 text-xs mt-1.5"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending || isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 mt-6"
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
                  <span>لطفا صبر کنید ...</span>
                </>
              ) : (
                "ایجاد حساب کاربری"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUpForm;
