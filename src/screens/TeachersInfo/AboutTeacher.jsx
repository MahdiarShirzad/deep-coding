import React from "react";

const AboutTeacher = ({ teacher }) => {
  return (
    <div className="mt-8">
      <p className="mb-4 text-2xl font-black">درباره مدرس</p>
      <div className="leading-8 text-gray-500 text-justify">
        {teacher.about}
      </div>
    </div>
  );
};

export default AboutTeacher;
