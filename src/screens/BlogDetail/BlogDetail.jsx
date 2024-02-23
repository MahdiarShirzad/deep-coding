import React from "react";
import algorithm from "../../assets/images/blog/algorithm.png";
import BlogText from "./BlogText";
import StarRating from "../../components/StarRating/StarRating";

const BlogDetail = () => {
  return (
    <div className=" container max-w-[1320px] flex items-start justify-between mx-auto my-36 font-iransans">
      <div className=" w-1/3 max-lg:hidden">
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
        <div className="flex justify-between mt-8 ">
          <div className="flex text-gray-400 gap-1">
            <svg
              className="w-[20px]"
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
                <g clip-path="url(#ccclip0_429_11106)">
                  {" "}
                  <path
                    d="M12 21C16.9706 21 21 16.9705 21 12C21 7.02941 16.9706 2.99997 12 2.99997C7.02944 2.99997 3 7.02941 3 12C3 13.4876 3.36093 14.8909 4 16.1272L3 21L7.8728 20C9.10904 20.639 10.5124 21 12 21Z"
                    stroke="#ccc"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <rect
                    x="7.5"
                    y="12"
                    width="0.01"
                    height="0.01"
                    stroke="#ccc"
                    stroke-width="3.75"
                    stroke-linejoin="round"
                  ></rect>{" "}
                  <rect
                    x="12"
                    y="12"
                    width="0.01"
                    height="0.01"
                    stroke="#ccc"
                    stroke-width="3.75"
                    stroke-linejoin="round"
                  ></rect>{" "}
                  <rect
                    x="16.5"
                    y="12"
                    width="0.01"
                    height="0.01"
                    stroke="#ccc"
                    stroke-width="3.75"
                    stroke-linejoin="round"
                  ></rect>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_429_11106">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
            <p>به مقاله امتیاز بدهید</p>
          </div>
          <StarRating size={22} />
        </div>
        <div className=" flex justify-between mt-4">
          <div className=" flex gap-1 text-gray-400">
            <svg
              className="w-[20px]"
              viewBox="-1 0 26 26"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>share</title> <desc>Created with Sketch Beta.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  sketch:type="MSPage"
                >
                  {" "}
                  <g
                    id="Icon-Set-Filled"
                    sketch:type="MSLayerGroup"
                    transform="translate(-314.000000, -728.000000)"
                    fill="#ccc"
                  >
                    {" "}
                    <path
                      d="M333,744 C331.23,744 329.685,744.925 328.796,746.312 L323.441,743.252 C323.787,742.572 324,741.814 324,741 C324,740.497 323.903,740.021 323.765,739.563 L329.336,736.38 C330.249,737.37 331.547,738 333,738 C335.762,738 338,735.762 338,733 C338,730.238 335.762,728 333,728 C330.238,728 328,730.238 328,733 C328,733.503 328.097,733.979 328.235,734.438 L322.664,737.62 C321.751,736.631 320.453,736 319,736 C316.238,736 314,738.238 314,741 C314,743.762 316.238,746 319,746 C320.14,746 321.179,745.604 322.02,744.962 L328.055,748.46 C328.035,748.64 328,748.814 328,749 C328,751.762 330.238,754 333,754 C335.762,754 338,751.762 338,749 C338,746.238 335.762,744 333,744"
                      id="share"
                      sketch:type="MSShapeGroup"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <p>اشتراک گذاری</p>
          </div>
          <div className=" flex gap-3">
            <svg
              class="w-[25px]"
              viewBox="0 -2 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ccc"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-60.000000, -7521.000000)"
                    fill="#ccc"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                        id="twitter-[#154]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <svg
              class="w-[25px]"
              fill="#ccc"
              viewBox="0 0 32 32"
              version="1.1"
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
                <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path>{" "}
              </g>
            </svg>
            <svg
              class="w-[25px]"
              fill="#ccc"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6.975,20.667H3.117V9.059H6.975ZM5.072,3.462a2.011,2.011,0,1,0-.051,4.012h.026a2.012,2.012,0,1,0,.025-4.012ZM9.111,20.667h3.858V14.185a2.639,2.639,0,0,1,.127-.941,2.111,2.111,0,0,1,1.98-1.411c1.4,0,1.955,1.064,1.955,2.625v6.209h3.858V14.011c0-3.565-1.9-5.225-4.442-5.225A3.828,3.828,0,0,0,12.97,10.7V9.059H9.111c.051,1.089,0,11.609,0,11.609Z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className=" w-2/3 max-lg:w-full">
        <h3 className=" text-3xl font-black pr-20">الگوریتم چیست</h3>
        <div className=" w-[500px] mx-auto mt-10 lg:hidden">
          <img className=" w-full rounded-2xl" src={algorithm} alt="" />
        </div>
        <BlogText />
      </div>
    </div>
  );
};

export default BlogDetail;
