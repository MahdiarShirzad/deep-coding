import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";
import { useLogout } from "../../screens/Login/useLogout";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { toast } from "react-toastify";

const HeaderLeft = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const isAuthenticated = !!user;

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const { logout, isPending: isLogoutPending } = useLogout();

  const handleLogout = () => {
    logout(null, {
      onSuccess: () => {},
    });
  };

  const getMenuItems = (role) => {
    switch (role) {
      case "admin":
        return [
          { to: "/admin-panel", label: "داشبورد" },
          { to: "/admin-panel/users", label: "مدیریت کاربران" },
          { to: "/admin-panel/comments", label: "مدیریت کامنت‌ها" },
          { to: "/admin-panel/courses", label: "دوره ها" },
        ];
      case "teacher":
        return [
          { to: "/teacher-panel/dashboard", label: "داشبورد" },
          { to: "/teacher-panel/my-courses", label: "دوره‌های مدرس" },
          { to: "/teacher-panel/edit-profile", label: "ویرایش پروفایل" },
        ];
      case "student":
      default:
        return [
          { to: "/user-panel/dashboard", label: "داشبورد" },
          { to: "/user-panel/favorites", label: "مورد علاقه‌ها" },
          { to: "/user-panel/edit-profile", label: "ویرایش پروفایل" },
        ];
    }
  };

  const menuItems = getMenuItems(user?.role);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-10 justify-end w-96 max-md:gap-3">
      {isAuthenticated ? (
        <>
          {user?.role === "student" && (
            <NavLink to="/cart">
              <button className=" bg-gray-100 p-2 rounded-full relative">
                <svg
                  className="w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.20853 17.8104L3.46191 17.7393L4.20853 17.8104ZM19.7915 17.8104L20.5381 17.7393L19.7915 17.8104ZM19.0296 9.81038L18.2829 9.88149L19.0296 9.81038ZM4.97043 9.81038L5.71705 9.88149L4.97043 9.81038ZM7.24999 11C7.24999 11.4142 7.58578 11.75 7.99999 11.75C8.41421 11.75 8.74999 11.4142 8.74999 11H7.24999ZM15.25 11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11H15.25ZM6.96142 8.75H17.0386V7.25H6.96142V8.75ZM18.2829 9.88149L19.0448 17.8815L20.5381 17.7393L19.7762 9.73928L18.2829 9.88149ZM17.8005 19.25H6.19952V20.75H17.8005V19.25ZM4.95515 17.8815L5.71705 9.88149L4.22381 9.73928L3.46191 17.7393L4.95515 17.8815ZM6.19952 19.25C5.46234 19.25 4.88526 18.6153 4.95515 17.8815L3.46191 17.7393C3.30815 19.3538 4.57773 20.75 6.19952 20.75V19.25ZM19.0448 17.8815C19.1147 18.6153 18.5376 19.25 17.8005 19.25V20.75C19.4223 20.75 20.6918 19.3538 20.5381 17.7393L19.0448 17.8815ZM17.0386 8.75C17.683 8.75 18.2218 9.23994 18.2829 9.88149L19.7762 9.73928C19.6418 8.32788 18.4563 7.25 17.0386 7.25V8.75ZM6.96142 7.25C5.54364 7.25 4.35823 8.32788 4.22381 9.73928L5.71705 9.88149C5.77815 9.23994 6.31698 8.75 6.96142 8.75V7.25ZM8.74999 7C8.74999 5.20507 10.2051 3.75 12 3.75V2.25C9.37664 2.25 7.24999 4.37665 7.24999 7H8.74999ZM12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16.75C16.75 4.37665 14.6233 2.25 12 2.25V3.75ZM7.24999 7V11H8.74999V7H7.24999ZM15.25 7V11H16.75V7H15.25Z"
                    fill="#000"
                  ></path>
                </svg>
                {user?.cart?.length > 0 && (
                  <div className="bg-[#1A064F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 pt-1 -right-0">
                    {user.cart.length}
                  </div>
                )}
              </button>
            </NavLink>
          )}

          <div className="relative z-[10000]" ref={dropdownRef}>
            <div
              onClick={() => setDropdownVisible((prev) => !prev)}
              className="bg-zinc-100 px-5 min-w-[200px] py-1 rounded-full flex items-center justify-between cursor-pointer duration-300"
            >
              <div className="flex items-center gap-2 py-2 capitalize">
                <p>{user.fullName}</p>
                <span className="text-[10px] bg-zinc-300 px-2 py-0.5 rounded-full text-zinc-600">
                  {user.role === "admin"
                    ? "ادمین"
                    : user.role === "teacher"
                      ? "مدرس"
                      : "دانشجو"}
                </span>
              </div>

              <svg
                className={`w-6 transition-transform duration-300 ${
                  dropdownVisible ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {dropdownVisible && (
              <div className="absolute top-full right-0 w-[240px] flex flex-col gap-1 py-3 px-4 bg-white shadow-md rounded-md mt-1 z-50">
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    end={
                      item.to === "/admin-panel" || item.to === "/teacher-panel"
                    }
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 hover:cursor-pointer rounded-md transition-colors"
                    onClick={() => setDropdownVisible(false)}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                ))}

                <hr className="my-1 border-gray-100" />

                <button
                  onClick={() => {
                    handleLogout();
                    setDropdownVisible(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-gray-200 rounded-md text-right w-full"
                >
                  خروج
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <NavLink to="/login">
            <button>ورود</button>
          </NavLink>
          <NavLink to="sign-up">
            <Button>ثبت نام</Button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default HeaderLeft;
