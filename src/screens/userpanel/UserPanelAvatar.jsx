import React from "react";
import avatar from "../../assets/images//userpanel/avatar.jpg";

import { useSelector } from "react-redux";

const UserPanelAvatar = () => {
  const username = useSelector((state) => state.auth.username);
  return (
    <div className=" bg-[url('assets/images/pattern/04.png')] bg-cover bg-slate-700	flex bg h-[230px] py-6">
      <div className=" container max-w-[1320px] mx-auto flex items-center gap-6 ">
        <div>
          <img className=" w-[110px] rounded-full" src={avatar} alt="" />
        </div>
        <div>
          <div className="flex text-4xl gap-2 font-bold text-white">
            <p>{username}</p>
            <p>عزیز</p>
          </div>
          <p className="text-white mt-3">خوش آمدید ...!</p>
        </div>
      </div>
    </div>
  );
};

export default UserPanelAvatar;
