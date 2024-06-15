import React from "react";
import spinner from "../../assets/images/spinner.gif";

export const Spinner = () => {
  return (
    <div className=" flex justify-center items-center my-10">
      <img className=" w-[150px]" src={spinner} alt="" />
    </div>
  );
};
