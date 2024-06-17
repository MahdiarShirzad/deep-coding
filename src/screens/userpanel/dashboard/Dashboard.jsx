import React from "react";
import UserStats from "./UserStats";
import { useQueryClient } from "@tanstack/react-query";

const Dashboard = () => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["user"]);

  // console.log(user);
  return (
    <div className=" w-full">
      <UserStats user={user} />
      <div className=" flex"></div>
    </div>
  );
};

export default Dashboard;
