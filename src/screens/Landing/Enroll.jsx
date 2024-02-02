import React from "react";
import img from "../../assets/images/home-6/learn/1.png";

const Enroll = () => {
  return (
    <div className="container max-w-[1320px] mx-auto flex items-center justify-between font-iransans mt-20 gap-16">
      <div className=" w-1/2">
        <p className="text-3xl w-3/4 leading-[50px] font-semibold text-[#140342]">
          <span className="text-[#6440FB]">یادگیری</span> مهارت های جدید در زمان
          و مکانی که دوست دارید.
        </p>
        <p className="text-slate-500 w-3/4 mt-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        <button class="bg-[#140342] border-[#140342] hover:bg-transparent hover:text-black border-2 text-white px-8 py-4 rounded-3xl mt-16">
          ثبت نام رایگان
        </button>
      </div>
      <div className=" w-1/2">
        <div className=" relative">
          <img className="" src={img} alt="" />
          <div className=" absolute bg-[#140342] text-white top-40 -right-20 rounded-xl px-8 py-6 flex flex-col gap-4">
            <p>نویسندگان دستچین شده</p>
            <p>آسان برای پیگیری برنامه درسی</p>
            <p>دوره های رایگان</p>
            <p>تضمین بازگشت پول</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
