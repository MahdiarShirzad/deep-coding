import React from "react";
import styles from "./TeachersPage.module.css";

const TeachersAvatar = ({ teacher }) => {
  return (
    <div
      className={` ${styles.avatar} border-2 border-[#140342] mx-auto w-[230px] h-[230px] rounded-xl `}
    >
      <img src={teacher.avatar} className=" p-3 w-full h-full" alt="" />
    </div>
  );
};

export default TeachersAvatar;
