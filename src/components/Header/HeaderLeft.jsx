import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import { authActions } from "../../store/auth";

const HeaderLeft = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [rotate, setRotate] = useState(0);

  const cartItems = useSelector((state) => state.cart.items) || {};

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setRotate(dropdownVisible ? 0 : 180);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      dispatch(authActions.setSavedUser(parsedUser));
    }
  }, [dispatch]);

  return (
    <div className="flex items-center gap-10 justify-end w-96">
      {isAuth && (
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
                {" "}
                <path
                  d="M4.20853 17.8104L3.46191 17.7393L4.20853 17.8104ZM19.7915 17.8104L20.5381 17.7393L19.7915 17.8104ZM19.0296 9.81038L18.2829 9.88149L19.0296 9.81038ZM4.97043 9.81038L5.71705 9.88149L4.97043 9.81038ZM7.24999 11C7.24999 11.4142 7.58578 11.75 7.99999 11.75C8.41421 11.75 8.74999 11.4142 8.74999 11H7.24999ZM15.25 11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11H15.25ZM6.96142 8.75H17.0386V7.25H6.96142V8.75ZM18.2829 9.88149L19.0448 17.8815L20.5381 17.7393L19.7762 9.73928L18.2829 9.88149ZM17.8005 19.25H6.19952V20.75H17.8005V19.25ZM4.95515 17.8815L5.71705 9.88149L4.22381 9.73928L3.46191 17.7393L4.95515 17.8815ZM6.19952 19.25C5.46234 19.25 4.88526 18.6153 4.95515 17.8815L3.46191 17.7393C3.30815 19.3538 4.57773 20.75 6.19952 20.75V19.25ZM19.0448 17.8815C19.1147 18.6153 18.5376 19.25 17.8005 19.25V20.75C19.4223 20.75 20.6918 19.3538 20.5381 17.7393L19.0448 17.8815ZM17.0386 8.75C17.683 8.75 18.2218 9.23994 18.2829 9.88149L19.7762 9.73928C19.6418 8.32788 18.4563 7.25 17.0386 7.25V8.75ZM6.96142 7.25C5.54364 7.25 4.35823 8.32788 4.22381 9.73928L5.71705 9.88149C5.77815 9.23994 6.31698 8.75 6.96142 8.75V7.25ZM8.74999 7C8.74999 5.20507 10.2051 3.75 12 3.75V2.25C9.37664 2.25 7.24999 4.37665 7.24999 7H8.74999ZM12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16.75C16.75 4.37665 14.6233 2.25 12 2.25V3.75ZM7.24999 7V11H8.74999V7H7.24999ZM15.25 7V11H16.75V7H15.25Z"
                  fill="#000"
                ></path>{" "}
              </g>
            </svg>
            {Object.values(cartItems).reduce(
              (total, userCart) => total + userCart.length,
              0
            ) > 0 && (
              <div className="bg-[#1A064F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 pt-1 -right-0">
                {Object.values(cartItems).reduce(
                  (total, userCart) => total + userCart.length,
                  0
                )}
              </div>
            )}
          </button>
        </NavLink>
      )}
      {!isAuth && (
        <>
          <NavLink to="/login">
            <button>ورود</button>
          </NavLink>
          <NavLink to="sign-up">
            <Button>ثبت نام</Button>
          </NavLink>
        </>
      )}
      {isAuth && (
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className=" bg-zinc-100 px-5 min-w-[200px] py-1 rounded-full flex items-center justify-between cursor-pointer duration-500"
          >
            <div className=" flex items-center gap-2">
              <svg
                className=" w-[40px] p-0"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                    fill="#1C274C"
                  ></path>{" "}
                </g>
              </svg>
              <p>{username}</p>
            </div>
            <svg
              className=" w-[17px] duration-500"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              style={{ transform: `rotate(${rotate}deg)`, width: "17px" }}
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
                <NavLink className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
                  <svg
                    className=" w-[24px]"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
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
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M1 2h16v11H1z"
                      ></path>{" "}
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M4 5.5v5s3-1 5 0v-5s-2-2-5 0zM9 5.5v5s3-1 5 0v-5s-2-2-5 0z"
                      ></path>{" "}
                      <path
                        fill="#000"
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M8.5 14l-3 3h7l-3-3z"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>دوره های من</p>
                </NavLink>
                <NavLink className="flex items-center gap-1 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
                  <svg
                    className=" w-[35px] -mr-1"
                    fill="#000000"
                    viewBox="-3.5 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M10.05 3.828a1.112 1.112 0 0 1 1.11 1.108v10.562a1.112 1.112 0 0 1-1.11 1.108h-8.1a1.112 1.112 0 0 1-1.11-1.108V4.936a1.112 1.112 0 0 1 1.11-1.108h.415v1.108h-.414l-.002.002v10.558l.002.002h8.098l.002-.002V4.938l-.002-.002h-.414V3.828h.416zm-.98 4.076H2.82v1.108h6.25zm0 2.337H2.82v1.108h6.25zm0 2.337H2.82v1.108h6.25zm-.543-8.935v1.25a.476.476 0 0 1-.475.476H3.948a.476.476 0 0 1-.475-.475v-1.25a.476.476 0 0 1 .475-.476h.697V1.87a.476.476 0 0 1 .475-.475h1.76a.476.476 0 0 1 .475.475v1.3h.697a.476.476 0 0 1 .475.474zM6.55 2.67a.554.554 0 1 0-.554.554.554.554 0 0 0 .554-.554z"></path>
                    </g>
                  </svg>
                  <p>آمار</p>
                </NavLink>
                <NavLink
                  to="/user-panel"
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
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
                  <p>داشبورد</p>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className=" w-full flex items-center gap-2 text-right px-4 py-2 text-red-600 hover:bg-gray-200 rounded-md"
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
                  <p>خروج</p>
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
