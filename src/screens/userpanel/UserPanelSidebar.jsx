import React from "react";

import logo from "../../assets/images/general/logo-pure-white.svg";

const UserPanelSidebar = () => {
  return (
    <div className=" w-[170px]  bg-[#140342] h-full transition-none font-iransans">
      <img className=" w-[] mr-5 mt-6" src={logo} alt="" />
      <ul className=" px-8 h-2/3 flex flex-col mt-12 gap-12 py-8 text-xl font-semibold text-white">
        <li>داشبورد</li>
        <li>آمار</li>
        <li>دوره ها</li>
      </ul>

      <button className=" bg-red-700 text-white px-10 py-3 rounded-2xl mr-6 mt-14">
        خروج
      </button>
    </div>
  );
};

export default UserPanelSidebar;
