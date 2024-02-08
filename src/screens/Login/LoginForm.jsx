import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className=" bg-white w-[480px] font-iransans px-16 py-10 rounded-xl">
      <p className=" text-3xl font-bold">ورود</p>
      <div className=" flex gap-2 mt-3">
        <span className=" text-gray-500">آیا هنوز ثبت نام نکرده اید؟</span>
        <Link to="/sign-up" className=" text-indigo-500">
          ثبت نام رایگان
        </Link>
      </div>
      <form action="">
        <div className=" flex flex-col mt-7">
          <label htmlFor="">نام کاربری</label>
          <input
            className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
            type="text"
            name=""
            id=""
            placeholder="نام کاربری"
          />
        </div>
        <div className=" flex flex-col mt-7">
          <label htmlFor="">رمز عبور</label>
          <input
            className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
            type="text"
            name=""
            id=""
            placeholder="رمز عبور"
          />
        </div>
        <button className=" mt-5 text-center w-full bg-lime-400 py-4 rounded-lg">
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
