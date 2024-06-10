import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useLogin } from "./useLogin";

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
          email: "",
          password: "",
        }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        <Form>
          <div className="flex flex-col mt-7">
            <label htmlFor="username">ایمیل</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="ایمیل"
              className="border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex flex-col mt-7">
            <label htmlFor="password">رمز عبور</label>
            <div className=" flex items-center relative gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1 ">
              <svg
                className=" w-[24px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                    stroke="#aaa"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <Field
                className={`block w-full  px-1 focus:outline-none font-inter  bg-transparent`}
                type={passwordIsVisible ? "text" : "password"}
                title="password"
                id="password"
                name="password"
                placeholder="رمز عبور"
                disabled={isPending}
              />
              <div
                onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                className="absolute left-3 cursor-pointer"
              >
                {passwordIsVisible ? (
                  <svg
                    className=" w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                        stroke="#aaa"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                        stroke="#aaa"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    className=" w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                        stroke="#aaa"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                )}
              </div>
            </div>
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
            {isPending ? "لطفا صبر کنید ...!" : "ورود"}
          </button>
        </Form>
      </Formik>

      <Link className=" inline-block mt-6 text-sm text-end text-gray-700">
        رمز عبور خود را فراموش کرده اید؟
      </Link>
    </div>
  );
};

export default LoginForm;
