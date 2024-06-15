import React from "react";
import avatar from "../../../assets/images/userpanel/avatar.jpg";
import Button from "../../../components/common/Button/Button";

const EditProfile = () => {
  return (
    <div>
      <p className="text-2xl font-semibold">ویرایش پروفایل</p>
      <div>
        <div className=" mt-7">
          <p className="text-gray-600">تصویر</p>
          <div className=" flex items-center gap-4 mt-3">
            <img className=" w-[90px] rounded-full" src={avatar} alt="" />
            <button className=" bg-blue-200 text-blue-600 h-[40px] px-4 rounded-md">
              تغییر
            </button>
            <button className=" bg-red-300 text-red-600 h-[40px] px-4 rounded-md">
              حذف
            </button>
          </div>
        </div>
        <div className=" flex flex-wrap justify-between mt-8">
          <div className=" flex flex-col gap-2 my-3">
            <label htmlFor="">نام کاربری</label>
            <input
              className=" border w-[450px] py-3 rounded-lg px-3"
              type="text"
              value="mahdiar"
            />
          </div>
          <div className=" flex flex-col gap-2 my-3">
            <label htmlFor="">ایمیل</label>
            <input
              className=" border w-[450px] py-3 rounded-lg px-3"
              type="text"
              value="mahdiar55582"
            />
          </div>
          <div className=" flex flex-col gap-2 my-3">
            <label htmlFor="">شماره تماس</label>
            <input
              className=" border w-[450px] py-3 rounded-lg px-3"
              type="text"
              value="09384494884"
            />
          </div>
          <div className=" flex flex-col gap-2 my-3">
            <label htmlFor="">آدرس</label>
            <input
              className=" border w-[450px] py-3 rounded-lg px-3"
              type="text"
              value="sari"
            />
          </div>
        </div>
        <div className=" flex flex-col  mt-6 gap-7">
          <label className=" text-lg " htmlFor="">
            درباره ی من
          </label>
          <textarea
            className=" border rounded-lg w-[1000px] px-5 py-4 h-[200px]"
            name=""
            id=""
            cols="10"
            rows="10"
            value="من راهی برای دریافت پول برای سرگرمی مورد علاقه‌ام پیدا کرده‌ام و این کار را در حالی انجام می‌دهم که رویای سفر به دور دنیا را دنبال می‌کنم."
          ></textarea>
        </div>
        <div className=" flex justify-end mt-4">
          <Button>ذخیره</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
