import React from "react";
import notfound from "../../assets/images/404/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex py-40 items-center font-iransans justify-center gap-10">
      <div className="">
        <p className=" text-[55px] text-sky-900 ">صفحه مورد نظر یافت نشد !!!</p>
        <div className="w-full flex items-center justify-center">
          <Link to="/">
            <button className=" bg-blue-950 text-white  w-[160px] mx-auto py-4 rounded-lg mt-5">
              صفحه اصلی
            </button>
          </Link>
        </div>
      </div>
      <img
        className=" w-[900px] h-auto rounded-[30px] shadow-sky-950 shadow-lg"
        src={notfound}
        alt=""
      />
    </div>
  );
};

export default NotFound;
