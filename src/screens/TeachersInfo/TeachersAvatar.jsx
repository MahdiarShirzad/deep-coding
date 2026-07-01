import React from "react";
import styles from "./TeachersPage.module.css";

const TeachersAvatar = ({ teacher }) => {
  return (
    <div className="bg-white p-2 sm:p-3 rounded-3xl shadow-sm border border-slate-100 w-full max-w-[280px] lg:max-w-full mx-auto aspect-square overflow-hidden">
      <img
        src={teacher?.avatar}
        className={`${styles.avatar} w-full h-full object-cover rounded-2xl`}
        alt={teacher?.fullName || "تصویر مدرس"}
      />
    </div>
  );
};

export default TeachersAvatar;
