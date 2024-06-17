import React from "react";
import UserStats from "./UserStats";
import { useQueryClient } from "@tanstack/react-query";
import { UserCoursesCard } from "./UserCoursesCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["user"]);

  const userCourses = user?.user_metadata.courses;

  // console.log(user);
  return (
    <div className=" w-full">
      <UserStats user={user} />
      <div className="">
        <p className=" text-2xl mt-7 font-bold">دوره های شما</p>
        {userCourses?.length > 0 ? (
          <div className=" mt-10">
            {userCourses.map((course) => (
              <UserCoursesCard key={course} course={course} />
            ))}
          </div>
        ) : (
          <div>
            <p className=" text-center mt-16 text-3xl">
              دوره ای ثبت نام نکرده اید
            </p>
            <Link
              className=" bg-violet-700 mx-auto w-32 block mt-10 text-white px-3 py-2 rounded-xl"
              to="/courses"
            >
              مشاهده دوره ها
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
