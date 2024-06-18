import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-white bg-[#140342] max-md:text-xs max-md:px-2 min-w-24 rounded-2xl flex items-center justify-center  px-9 py-3 border-2 border-[#140342] hover:bg-transparent hover:text-[#140342]">
      {children}
    </button>
  );
};

export default Button;
