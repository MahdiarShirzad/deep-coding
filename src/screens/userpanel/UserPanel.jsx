import React from "react";
import UserPanelAvatar from "./UserPanelAvatar";
import SidebarPanel from "./SidebarPanel";
import { Outlet } from "react-router-dom";

const UserPanel = () => {
  return (
    <div className=" my-24 font-iransans">
      <UserPanelAvatar />
      <div className=" container max-w-[1320px] mx-auto flex items-start mt-6 justify-between">
        <SidebarPanel />
        <div className=" w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
