import React from "react";
import UserStats from "./UserStats";
import LatestCourses from "./LatestCourses";
import LatestAnnouncements from "./LatestAnnouncements";

const Dashboard = () => {
  return (
    <div className=" w-full">
      <UserStats />
      <div className=" flex">
        <LatestAnnouncements />
        <LatestCourses />
      </div>
    </div>
  );
};

export default Dashboard;
