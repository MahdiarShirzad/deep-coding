import React from "react";
import "./accardion.scss";

const CourseStar = () => {
  return (
    <div className="tab border-t-2 mb-4">
      <input type="checkbox" id="chck2" />

      <label className="tab-label" for="chck2">
        امتیاز
      </label>
      <div className="tab-content text-sm">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-3 h-3"
              type="radio"
              name=""
              id=""
            />
            <div>
              <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-4"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#FFAC33"
                    d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
                  ></path>
                </g>
              </svg>
            </div>
            <label htmlFor="">4 به بالا</label>
          </div>
          <p>(32)</p>
        </div>
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-3 h-3"
              type="radio"
              name=""
              id=""
            />
            <div>
              <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-4"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#FFAC33"
                    d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
                  ></path>
                </g>
              </svg>
            </div>
            <label htmlFor="">3 به بالا</label>
          </div>
          <p>(32)</p>
        </div>{" "}
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-3 h-3"
              type="radio"
              name=""
              id=""
            />
            <div>
              <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-4"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#FFAC33"
                    d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
                  ></path>
                </g>
              </svg>
            </div>
            <label htmlFor="">2 به بالا</label>
          </div>
          <p>(32)</p>
        </div>{" "}
        <div className=" flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <input
              className=" checked:accent-zinc-500 w-3 h-3"
              type="radio"
              name=""
              id=""
            />
            <div>
              <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-4"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#FFAC33"
                    d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
                  ></path>
                </g>
              </svg>
            </div>
            <label htmlFor="">1 به بالا</label>
          </div>
          <p>(32)</p>
        </div>
      </div>
    </div>
  );
};

export default CourseStar;
