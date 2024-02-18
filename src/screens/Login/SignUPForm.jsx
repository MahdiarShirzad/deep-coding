import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const SignUPForm = () => {
  const dispatch = useDispatch();
  const isEmailExists = useSelector((state) => state.auth.isEmailExists);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const onSubmit = async (values) => {
    try {
      // اگر ایمیل قبلاً ثبت شده باشد، اعلان مرتبط با این موضوع را نمایش بدهید
      if (isEmailExists) {
        dispatch(authActions.setErrorMessage("این ایمیل قبلاً ثبت شده است."));
      } else {
        // در غیر این صورت، اطلاعات کاربر را ثبت کنید
        await dispatch(authActions.registerUser(values));
      }
    } catch (error) {
      // اگر خطایی رخ دهد، می‌توانید در اینجا مدیریت کنید
      console.error("خطا در ثبت نام:", error);
    }
  };

  const validation = yup.object().shape({
    email: yup
      .string()
      .required("لطفاً ایمیل را وارد کنید.")
      .email("فرمت ایمیل صحیح نیست."),
    userName: yup.string().required("لطفاً نام کاربری را وارد کنید."),
    password: yup
      .string()
      .required("لطفاً رمز عبور را وارد کنید.")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "رمز عبور باید شامل حروف و اعداد باشد."
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "رمز عبور و تکرار آن باید یکسان باشند."
      )
      .required("لطفاً تکرار رمز عبور را وارد کنید."),
  });

  return (
    <div className=" bg-white w-[610px] font-iransans px-16 py-10 rounded-xl">
      <p className=" text-3xl font-bold">ورود</p>
      <div className=" flex gap-2 mt-3">
        <span className=" text-gray-500">قبلا ثبت نام کرده اید ؟</span>
        <Link to="/login" className=" text-indigo-500">
          ورود
        </Link>
      </div>
      <Formik
        initialValues={{
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        <Form>
          <div className=" flex flex-wrap items-center justify-between">
            <div className=" flex flex-col mt-7">
              <label htmlFor="email">ایمیل</label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="ایمیل"
                className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className=" flex flex-col mt-7">
              <label htmlFor="userName">نام کاربری</label>
              <Field
                type="text"
                name="userName"
                id="userName"
                placeholder="نام کاربری"
                className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className=" flex flex-col mt-7">
              <label htmlFor="password">رمز عبور</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className=" flex flex-col mt-7">
              <label htmlFor="confirmPassword">تایید رمز عبور</label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="*******"
                className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" mt-5 text-center w-full bg-lime-400 py-4 rounded-lg"
          >
            ثبت نام
          </button>
          {isEmailExists && (
            <div className="text-red-500 text-sm text-center mt-4">
              {errorMessage}
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default SignUPForm;
