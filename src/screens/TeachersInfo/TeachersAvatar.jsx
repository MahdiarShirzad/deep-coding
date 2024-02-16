import React from "react";
import styles from "./TeachersPage.module.css";

import jobs from "../../assets/images/teachers/jobs.jpg";

const TeachersAvatar = () => {
  return (
    <div
      className={` ${styles.avatar} border-2 border-[#140342] mx-auto w-[230px] rounded-xl `}
    >
      <img src={jobs} className="  p-3 rounded-xl" alt="" />
    </div>
  );
};

export default TeachersAvatar;
