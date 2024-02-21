import React from "react";
import UserStats from "./UserStats";
import LatestBlogs from "./LatestBlogs";
import LatestCourses from "./LatestCourses";

const Dashboard = () => {
  return (
    <div className=" w-full">
      <UserStats />
      <LatestBlogs />
      <LatestCourses />
    </div>
  );
};

export default Dashboard;
