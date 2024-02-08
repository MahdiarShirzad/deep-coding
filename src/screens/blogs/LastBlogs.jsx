import React from "react";
import img from "../../assets/images/blog-list/2.png";

const LastBlogs = () => {
  return (
    <div className=" border-t">
      <p className=" my-3 text-lg">آخرین اخبار</p>
      <div>
        <div className=" flex items-center gap-3 shadow-sm shadow-gray-200 px-3 py-2 border rounded-xl mb-2">
          <img className=" w-16 rounded-xl" src={img} alt="" />
          <div>
            <h6 className=" text-sm my-2">
              8 نکته برتر بهره‌وری برای توسعه‌دهندگان
            </h6>
            <p className=" text-xs">13 مهر، 1399</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBlogs;
