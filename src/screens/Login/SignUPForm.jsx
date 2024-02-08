import React from "react";
import { Link } from "react-router-dom";

const SignUPForm = () => {
  return (
    <div className=" bg-white w-[610px] font-iransans px-16 py-10 rounded-xl">
      <p className=" text-3xl font-bold">ورود</p>
      <div className=" flex gap-2 mt-3">
        <span className=" text-gray-500">قبلا ثبت نام کرده اید ؟</span>
        <Link to="/login" className=" text-indigo-500">
          ورود
        </Link>
      </div>
      <form action="">
        <div className=" flex flex-wrap items-center justify-between">
          <div className=" flex flex-col mt-7">
            <label htmlFor="">ایمیل</label>
            <input
              className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
              type="text"
              name=""
              id=""
              placeholder="ایمیل"
            />
          </div>
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
              type="password"
              name=""
              id=""
              placeholder="*******"
            />
          </div>
          <div className=" flex flex-col mt-7">
            <label htmlFor=""> تایید رمز عبور</label>
            <input
              className=" border-2 px-3 text-sm py-4 mt-2 rounded-lg focus:outline-none text-gray-700"
              type="password"
              name=""
              id=""
              placeholder="*******"
            />
          </div>
        </div>
        <button className=" mt-5 text-center w-full bg-lime-400 py-4 rounded-lg">
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default SignUPForm;
