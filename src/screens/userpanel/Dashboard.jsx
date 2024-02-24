import React from "react";
import UserStats from "./UserStats";
import LatestCourses from "./LatestCourses";

const Dashboard = () => {
  return (
    <div className=" w-full">
      <UserStats />
      <LatestCourses />
    </div>
  );
};

export default Dashboard;
