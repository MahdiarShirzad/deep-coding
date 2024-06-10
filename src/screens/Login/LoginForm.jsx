import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const { login, isPending } = useLogin();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const validation = yup.object().shape({
    username: yup.string().required("لطفاً نام کاربری یا ایمیل را وارد کنید."),
    password: yup.string().required("لطفاً رمز عبور را وارد کنید."),
  });

  const onSubmit = (values) => {
    const { email, password } = values;

    if (!email || !password) {
      return;
    }

    login({ email, password });
  };

  return (
    <div className="bg-white w-[480px] font-iransans px-16 py-10 rounded-xl">
      <p className="text-3xl font-bold">ورود</p>
      <div className="flex gap-2 mt-3">
        <span className="text-gray-500">آیا هنوز ثبت نام نکرده اید؟</span>
        <Link to="/sign-up" className="text-indigo-500">
          ثبت نام رایگان
        </Link>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        <Form>
          <div className="flex flex-col mt-7">
            <label htmlFor="username">نام کاربری یا ایمیل</label>
            <Field
              type="text"
              name="username"
              id="username"
              placeholder="نام کاربری یا ایمیل"
              className="border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex flex-col mt-7">
            <label htmlFor="password">رمز عبور</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="رمز عبور"
              className="border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm  mt-1"
            />
          </div>
          <button
            type="submit"
            className="mt-5 text-center w-full bg-lime-400 py-4 rounded-lg"
          >
            ورود
          </button>
          {isPending && <p>صبر کنید</p>}
        </Form>
      </Formik>

      <Link className=" inline-block mt-6 text-sm text-end text-gray-700">
        رمز عبور خود را فراموش کرده اید؟
      </Link>
    </div>
  );
};

export default LoginForm;
