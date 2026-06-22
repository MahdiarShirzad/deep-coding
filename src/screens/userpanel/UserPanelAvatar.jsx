import { useQueryClient } from "@tanstack/react-query";
import avatar from "../../assets/images//userpanel/avatar.jpg";

const UserPanelAvatar = () => {
  const queryClient = useQueryClient();

  const queryData = queryClient.getQueryData(["user"]);
  const user = queryData?.json ? queryData.json : queryData;

  return (
    <div className="bg-[url('assets/images/pattern/04.png')] bg-cover bg-slate-700 flex h-[230px] py-6 relative">
      <div className="container max-w-[1320px] mx-auto flex items-center gap-6 px-4 z-10">
        <div>
          <img
            className="w-[110px] rounded-full border-2 border-slate-500 shadow-lg"
            src={avatar}
            alt="User Avatar"
          />
        </div>
        <div>
          <div className="flex text-4xl gap-2 font-bold max-md:text-xl text-white capitalize">
            <p>{user?.fullName || "کاربر"}</p>
            <p>عزیز</p>
          </div>
          <p className="text-slate-300 mt-3 text-sm">خوش آمدید ...!</p>
        </div>
      </div>
    </div>
  );
};

export default UserPanelAvatar;
