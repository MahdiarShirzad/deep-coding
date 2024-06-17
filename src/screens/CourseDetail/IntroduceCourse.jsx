import React from "react";

const IntroduceCourse = ({ selectedCourse }) => {
  return (
    <div className=" container max-w-[1320px] mx-auto font-iransans mt-16 max-xl:px-8">
      <p className=" text-2xl font-semibold">معرفی دوره</p>
      <article className=" mt-4 leading-8 ml-20 text-gray-800 w-3/5 text-justify">
        {selectedCourse?.introduction}
      </article>
    </div>
  );
};

export default IntroduceCourse;
