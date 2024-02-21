import React from "react";
import UserPanelAvatar from "./UserPanelAvatar";
import SidebarPanel from "./SidebarPanel";
import Dashboard from "./Dashboard";

const UserPanel = () => {
  return (
    <div className=" my-24 font-iransans">
      <UserPanelAvatar />
      <div className=" container max-w-[1320px] mx-auto flex items-start mt-6 justify-between">
        <SidebarPanel />
        <div className=" w-3/4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
