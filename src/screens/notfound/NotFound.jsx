import React from "react";
import notfound from "../../assets/images/404/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex bg-blue-100 py-4 items-center font-iransans justify-center gap-10">
      <div className="">
        <p className=" text-[45px] text-sky-700 ">صفحه مورد نظر یافت نشد !!!</p>
        <Link to="/">
          <button className=" bg-blue-950 text-white  w-[160px] py-4 rounded-lg mt-5">
            صفحه اصلی
          </button>
        </Link>
      </div>
      <img className=" w-[800px]" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
