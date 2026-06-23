import { Outlet } from "react-router-dom";
import SidebarPanel from "../userpanel/SidebarPanel";
import UserPanelAvatar from "../userpanel/UserPanelAvatar";

const AdminPanel = () => {
  return (
    <div className=" my-24 font-iransans">
      <UserPanelAvatar />
      <div className=" container max-w-[1320px] mx-auto flex max-md:flex-col items-start mt-6 justify-between">
        <SidebarPanel role="admin" />
        <div className=" w-3/4 max-md:w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
