import React from "react";

import TeacherAvatar from "./TeachersAvatar";
import AboutTeacher from "./AboutTeacher";
import TeachersCourse from "./TeachersCourse";

const TeachersInfo = () => {
  return (
    <div className="container max-w-[1320px] mx-auto mt-36  font-iransans flex items-start mb-10 justify-between px-20">
      <div className="w-[60%]">
        <div>
          <p className="text-gray-500 text-lg font-black">مدرس</p>
          <p className="text-4xl font-black mt-3">علی منصوریان</p>
        </div>
        <div className="mt-6 text-lg font-extralight">توسعه دهنده بک اند</div>
        <div className="flex mt-14  items-center justify-between max-w-[70%]">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-gray-500 text-lg">تعداد دانشجویان</p>
            <p className="text-xl font-extrabold">234566</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-gray-500 text-lg">تعداد دوره ها</p>
            <p className="text-xl font-extrabold">7</p>
          </div>
        </div>
        <AboutTeacher />
        {/* <TeachersCourse /> */}
      </div>
      <div className="w-[30%]">
        <TeacherAvatar />
        <div className="flex flex-col gap-6 mt-14">
          <div className="flex items-center justify-center px-20 py-4 p-2 shadow-sm  shadow-slate-300 rounded-2xl gap-3">
            <svg
              className="w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="#0F0F0F"
                ></path>{" "}
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="#0F0F0F"
                ></path>{" "}
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="#0F0F0F"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#0F0F0F"
                ></path>{" "}
              </g>
            </svg>
            <p>LinedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersInfo;
