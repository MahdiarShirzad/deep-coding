import React from "react";
import RenderStars from "../../components/RenderStars/RenderStars";
import lectureSvg from "../../assets/images/coursesCards/icons/1.svg";
import timeSvg from "../../assets/images/coursesCards/icons/2.svg";
import levelSvg from "../../assets/images/coursesCards/icons/3.svg";
import { updateUser } from "../../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const queryClient = useQueryClient();

  const handleRemoveFromCart = async () => {
    const user = queryClient.getQueryData(["user"]);
    const currentCart = user?.user_metadata.cart || [];
    const updatedCart = currentCart.filter((course) => course.id !== item.id);

    const updates = {
      cart: updatedCart,
    };

    updateUser(updates);
    queryClient.invalidateQueries(["user"]);
    toast.success("دوره از سبد خرید حذف شد!", {
      position: "top-center",
    });
  };

  const coursePrice = item?.price === 0 ? <p>رایگان</p> : item?.price;

  return (
    <div className="flex items-center justify-between w-[700px] px-3 py-2 rounded-lg shadow-md">
      <div>
        <img
          className="w-[170px] h-[120px] rounded-md"
          src={item?.img}
          alt=""
        />
      </div>
      <div>
        <h1 className="font-semibold text-right">{item?.name}</h1>
        <p className="text-gray-700 mt-3">{item?.teacher}</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-amber-400">{item?.star}</span>
          <div className="flex">
            <RenderStars rating={item?.star} />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2 text-sm">
            <img src={lectureSvg} alt="" />
            <span>{item?.lectures} درس</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <img src={timeSvg} alt="" />
            <span>{item?.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <img src={levelSvg} alt="" />
            <span>{item?.level}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-sm">
        <span className="font-semibold text-base">{coursePrice}</span>
        {item?.price !== 0 ? <span>تومان</span> : <span></span>}
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="p-3 ml-6 my-auto bg-red-700 rounded-full"
      >
        <svg
          className="w-[30px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10 11V17"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14 11V17"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4 7H20"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
