import React from "react";
import UserStats from "./UserStats";
import LatestAnnouncements from "./LatestAnnouncements";

const Dashboard = () => {
  return (
    <div className=" w-full">
      <UserStats />
      <div className=" flex">
        <LatestAnnouncements />
      </div>
    </div>
  );
};

export default Dashboard;
