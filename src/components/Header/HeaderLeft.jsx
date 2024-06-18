import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import { useLogout } from "../../screens/Login/useLogout";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { toast } from "react-toastify";

const HeaderLeft = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const { isAuthenticated } = useSelector((state) => state.user);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const { logout, isError } = useLogout();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    if (!isError) {
      toast.success("با موفقیت خارج شدید!", {
        position: "top-center",
      });
    } else {
      toast.error("خطا در خروج !", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex items-center gap-10 justify-end w-96 max-md:gap-3">
      {isAuthenticated && (
        <NavLink to="/cart">
          <button className=" bg-gray-100 p-2 rounded-full relative">
            <svg
              className="w-8"
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
                <path
                  d="M4.20853 17.8104L3.46191 17.7393L4.20853 17.8104ZM19.7915 17.8104L20.5381 17.7393L19.7915 17.8104ZM19.0296 9.81038L18.2829 9.88149L19.0296 9.81038ZM4.97043 9.81038L5.71705 9.88149L4.97043 9.81038ZM7.24999 11C7.24999 11.4142 7.58578 11.75 7.99999 11.75C8.41421 11.75 8.74999 11.4142 8.74999 11H7.24999ZM15.25 11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11H15.25ZM6.96142 8.75H17.0386V7.25H6.96142V8.75ZM18.2829 9.88149L19.0448 17.8815L20.5381 17.7393L19.7762 9.73928L18.2829 9.88149ZM17.8005 19.25H6.19952V20.75H17.8005V19.25ZM4.95515 17.8815L5.71705 9.88149L4.22381 9.73928L3.46191 17.7393L4.95515 17.8815ZM6.19952 19.25C5.46234 19.25 4.88526 18.6153 4.95515 17.8815L3.46191 17.7393C3.30815 19.3538 4.57773 20.75 6.19952 20.75V19.25ZM19.0448 17.8815C19.1147 18.6153 18.5376 19.25 17.8005 19.25V20.75C19.4223 20.75 20.6918 19.3538 20.5381 17.7393L19.0448 17.8815ZM17.0386 8.75C17.683 8.75 18.2218 9.23994 18.2829 9.88149L19.7762 9.73928C19.6418 8.32788 18.4563 7.25 17.0386 7.25V8.75ZM6.96142 7.25C5.54364 7.25 4.35823 8.32788 4.22381 9.73928L5.71705 9.88149C5.77815 9.23994 6.31698 8.75 6.96142 8.75V7.25ZM8.74999 7C8.74999 5.20507 10.2051 3.75 12 3.75V2.25C9.37664 2.25 7.24999 4.37665 7.24999 7H8.74999ZM12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16.75C16.75 4.37665 14.6233 2.25 12 2.25V3.75ZM7.24999 7V11H8.74999V7H7.24999ZM15.25 7V11H16.75V7H15.25Z"
                  fill="#000"
                ></path>
              </g>
            </svg>
            {user && user?.user_metadata.cart.length > 0 && (
              <div className="bg-[#1A064F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 pt-1 -right-0">
                {user?.user_metadata.cart.length}
              </div>
            )}
          </button>
        </NavLink>
      )}
      {!isAuthenticated && (
        <>
          <NavLink to="/login">
            <button>ورود</button>
          </NavLink>
          <NavLink to="sign-up">
            <Button>ثبت نام</Button>
          </NavLink>
        </>
      )}
      {isAuthenticated && (
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            className=" bg-zinc-100 px-5 min-w-[200px] py-1 rounded-full flex items-center justify-between cursor-pointer duration-500"
          >
            <div className=" flex items-center gap-2 py-2 capitalize">
              <p>{user?.user_metadata.fullName}</p>
            </div>
            <svg
              className=" w-[17px] duration-500"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              style={{ width: "17px" }}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <>
            {dropdownVisible && (
              <div className="absolute top-full right-0 w-[240px] flex flex-col gap-1 py-3 px-4 bg-white shadow-md rounded-md mt-1">
                <NavLink
                  to="/user-panel/dashboard"
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  onClick={closeDropdown}
                >
                  <svg
                    className=" w-[23px]"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
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
                          transform="translate(-380.000000, -2199.000000)"
                          fill="#000000"
                        >
                          {" "}
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            {" "}
                            <path
                              d="M342,2055.615 C342,2055.722 341.97,2055.821 341.939,2055.918 C341.723,2052.974 339.918,2050.482 337.375,2049.283 C338.368,2048.369 339,2047.071 339,2045.615 C339,2043.534 337.728,2041.753 335.92,2041 L341,2041 C341.552,2041 342,2041.063 342,2041.615 L342,2055.615 Z M339.963,2057 L327.975,2057 C327.974,2057 327.969,2056.741 327.969,2056.701 C327.969,2053.605 330.326,2050.96 333.339,2050.645 C334,2050.733 334.255,2050.622 334.623,2050.576 C337.625,2050.902 339.969,2053.623 339.969,2056.71 C339.969,2056.75 339.964,2057 339.963,2057 L339.963,2057 Z M326,2055.615 L326,2041.615 C326,2041.063 326.448,2041 327,2041 L332.08,2041 C330.272,2041.753 329,2043.534 329,2045.615 C329,2047.06 329.622,2048.351 330.602,2049.264 C328.107,2050.422 326.307,2052.82 326.012,2055.675 C326.011,2055.654 326,2055.636 326,2055.615 L326,2055.615 Z M337,2045.615 C337,2047.055 335.979,2048.26 334.623,2048.548 C334.033,2048.5 333.868,2048.508 333.368,2048.545 C332.017,2048.254 331,2047.052 331,2045.615 C331,2043.961 332.346,2042.615 334,2042.615 C335.654,2042.615 337,2043.961 337,2045.615 L337,2045.615 Z M342,2039 L326,2039 C324.895,2039 324,2039.895 324,2041 L324,2057 C324,2058.104 324.895,2059 326,2059 L342,2059 C343.105,2059 344,2058.104 344,2057 L344,2041 C344,2039.895 343.105,2039 342,2039 L342,2039 Z"
                              id="profile_image_round-[#1326]"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <span>داشبورد</span>
                </NavLink>
                <NavLink
                  to="/user-panel/favorites"
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  onClick={closeDropdown}
                >
                  <svg
                    class="w-[23px]"
                    fill="#000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 294.843 294.843"
                    xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M199.628,175.487c-0.632-1.977,0.067-4.131,1.741-5.358l37.422-27.455c5.958-4.371,8.333-11.736,6.049-18.763 c-2.283-7.028-8.533-11.591-15.922-11.625l-46.413-0.215c-2.076-0.01-3.908-1.34-4.558-3.311l-14.547-44.076 c-2.316-7.017-8.586-11.55-15.975-11.551h0c-7.389,0-13.66,4.534-15.976,11.55l-6.557,19.859c-1.039,3.146,0.669,6.54,3.816,7.578 c3.147,1.041,6.539-0.669,7.579-3.816l6.557-19.859c1.014-3.073,3.762-3.312,4.581-3.312c0.818,0,3.566,0.239,4.58,3.312 l14.547,44.077c2.27,6.875,8.658,11.516,15.897,11.55l46.413,0.215c3.236,0.015,4.313,2.555,4.565,3.333 c0.253,0.778,0.875,3.465-1.734,5.379l-37.423,27.455c-5.837,4.283-8.277,11.793-6.072,18.689l14.143,44.222 c0.986,3.083-1.097,4.892-1.759,5.372c-0.662,0.481-3.025,1.904-5.652,0.013l-37.677-27.114c-5.878-4.229-13.776-4.229-19.654,0 l-37.684,27.119c-2.627,1.89-4.991,0.468-5.652-0.012c-0.662-0.481-2.745-2.289-1.76-5.371l14.139-44.229 c2.205-6.895-0.236-14.405-6.072-18.688l-37.421-27.455c-2.609-1.914-1.987-4.602-1.734-5.379c0.253-0.778,1.33-3.318,4.565-3.333 l46.416-0.215c3.313-0.016,5.987-2.714,5.972-6.028c-0.016-3.304-2.699-5.972-6-5.972c-0.009,0-0.019,0-0.028,0l-46.416,0.215 c-7.389,0.034-13.639,4.597-15.922,11.625c-2.283,7.028,0.091,14.393,6.048,18.764l37.421,27.455 c1.673,1.228,2.373,3.381,1.741,5.358l-14.138,44.229c-2.25,7.038,0.159,14.392,6.137,18.734c3,2.179,6.442,3.269,9.886,3.269 c3.419,0,6.84-1.075,9.829-3.225l37.683-27.119c1.685-1.213,3.95-1.213,5.635,0l37.677,27.114c5.998,4.316,13.736,4.3,19.715-0.044 c5.979-4.343,8.387-11.697,6.136-18.736L199.628,175.487z"></path>{" "}
                        <path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c3.313,0,6-2.687,6-6s-2.687-6-6-6 C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,46.48-23.42,89.182-62.65,114.228 c-2.793,1.783-3.612,5.493-1.829,8.286c1.783,2.793,5.492,3.612,8.286,1.829c42.7-27.262,68.193-73.745,68.193-124.342 C294.843,66.133,228.71,0,147.421,0z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p>مورد علاقه ها</p>
                </NavLink>
                <NavLink
                  to="/user-panel/edit-profile"
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  onClick={closeDropdown}
                >
                  <svg
                    class="w-[30px]"
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
                        d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14"
                        stroke="#000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>ویرایش پروفایل</p>
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    closeDropdown();
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                >
                  <svg
                    className=" w-[25px]"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
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
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g id="Session-Leave">
                          {" "}
                          <rect
                            id="Rectangle"
                            fill-rule="nonzero"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            {" "}
                          </rect>{" "}
                          <line
                            x1="9"
                            y1="12"
                            x2="19"
                            y2="12"
                            id="Path"
                            stroke="#de1b1b"
                            stroke-width="2"
                            stroke-linecap="round"
                          >
                            {" "}
                          </line>{" "}
                          <path
                            d="M16,8 L18.5858,10.5858 C19.3668,11.3668 19.3668,12.6332 18.5858,13.4142 L16,16"
                            id="Path"
                            stroke="#de1b1b"
                            stroke-width="2"
                            stroke-linecap="round"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M16,4 L6,4 C4.89543,4 4,4.89543 4,6 L4,18 C4,19.1046 4.89543,20 6,20 L16,20"
                            id="Path"
                            stroke="#de1b1b"
                            stroke-width="2"
                            stroke-linecap="round"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <span className=" text-red-400">خروج</span>
                </button>
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default HeaderLeft;
