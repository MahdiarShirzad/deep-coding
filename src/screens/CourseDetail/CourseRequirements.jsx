import React from "react";

const CourseRequirements = () => {
  return (
    <div className=" container max-w-[1320px] mx-auto font-iransans mt-16 max-xl:px-8">
      <p className=" text-2xl font-semibold">پیشنیاز های دوره</p>
      <ul className=" mt-4 flex flex-col gap-2 mr-3 text-sm text-gray-800">
        <li>
          بدون نیاز به تجربه برنامه نویسی - من هر آنچه را که باید بدانید به شما
          آموزش خواهم داد
        </li>
        <li>یک کامپیوتر با دسترسی به اینترنت</li>
        <li>بدون نیاز به نرم افزار پولی</li>
      </ul>
    </div>
  );
};

export default CourseRequirements;
