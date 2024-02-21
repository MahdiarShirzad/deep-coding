import React from "react";
import UserPanelSidebar from "./UserPanelSidebar";

const UserPanel = () => {
  return (
    <div className=" flex w-[100%] h-[100vh]">
      <UserPanelSidebar />
      <div></div>
    </div>
  );
};

export default UserPanel;
