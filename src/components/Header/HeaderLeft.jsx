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
  const { logout, isPending: isLogoutPending } = useLogout(); // بهتره از isPending استفاده کنی

  const handleLogout = () => {
    logout(null, {
      onSuccess: () => {},
    });
  };

  if (isLoading) return <div>در حال بررسی...</div>;

  return (
    <div className="flex items-center gap-10 justify-end w-96 max-md:gap-3">
      {isAuthenticated ? (
        <>
          <NavLink to="/cart">
            <button className=" bg-gray-100 p-2 rounded-full relative">
              {/* SVG سبد خرید */}
              {user?.cart?.length > 0 && (
                <div className="bg-[#1A064F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 pt-1 -right-0">
                  {user.cart.length}
                </div>
              )}
            </button>
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setDropdownVisible(!dropdownVisible)}
              className=" bg-zinc-100 px-5 min-w-[200px] py-1 rounded-full flex items-center justify-between cursor-pointer duration-500"
            >
              <div className=" flex items-center gap-2 py-2 capitalize">
                <p>{user.fullName || user.name || "کاربر مهمان"}</p>
              </div>
            </div>

            {dropdownVisible && {}}
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
