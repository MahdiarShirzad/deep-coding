import React from "react";
import algorithm from "../../assets/images/blog/algorithm.png";
import BlogText from "./BlogText";
import StarRating from "../../components/StarRating/StarRating";

const BlogDetail = () => {
  return (
    <div className=" container max-w-[1320px] flex items-start justify-between mx-auto my-36 font-iransans">
      <div className=" w-1/3">
        <img className=" rounded-3xl" src={algorithm} alt="" />
        <div className=" mt-10 pl-8">
          <p className="text-lg text-blue-500 font-semibold">
            راهنمای مقاله و فهرست مطالب
          </p>
          <ul className=" mt-3 px-3 flex flex-col gap-2">
            <li className="px-3 py-2 bg-gray-200 rounded-2xl">
              برنامه نویسی چیست؟
            </li>
            <li className="px-3 py-2 bg-gray-200 rounded-2xl">
              بازار کار برنامه نویسی
            </li>
            <li className="px-3 py-2 bg-gray-200 rounded-2xl">
              الگوگیری از بزرگان
            </li>
            <li className="px-3 py-2 bg-gray-200 rounded-2xl">
              نکات مثبت گرفتن مدرک
            </li>
          </ul>
        </div>
        <div className=" flex">
          <div className=" w-1/2"></div>
          <div className=" w-1/5">
            <StarRating size={30} />
          </div>
        </div>
      </div>
      <div className=" w-2/3">
        <h3 className=" text-3xl font-black pr-20">الگوریتم چیست</h3>

        <BlogText />
      </div>
    </div>
  );
};

export default BlogDetail;
