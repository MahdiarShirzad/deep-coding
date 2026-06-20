import React from "react";
import RenderStars from "../../components/RenderStars/RenderStars";
import lectureSvg from "../../assets/images/coursesCards/icons/1.svg";
import timeSvg from "../../assets/images/coursesCards/icons/2.svg";
import levelSvg from "../../assets/images/coursesCards/icons/3.svg";
import { updateUser } from "../../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteFromCart } from "../../services/apiCart";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.25 } },
};

const CartItem = ({ item }) => {
  const queryClient = useQueryClient();

  const handleRemoveFromCart = async () => {
    try {
      await deleteFromCart(item?._id);
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["user"]);
      toast.success("دوره از سبد خرید حذف شد!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("خطا در حذف دوره!");
    }
  };

  const formattedPrice = item.price
    ? item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    : "0";

  const coursePrice = item?.price === 0 ? "رایگان" : `${formattedPrice} تومان`;

  return (
    <motion.div
      variants={itemVariants}
      layout
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4"
    >
      {/* بخش عکس و اطلاعات اصلی */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <div className="w-full sm:w-[150px] lg:w-[170px] h-[160px] sm:h-[100px] lg:h-[110px] flex-shrink-0">
          <img
            className="w-full h-full rounded-xl object-cover shadow-sm"
            src={item?.img}
            alt={item?.name}
          />
        </div>

        <div className="flex-1 text-right">
          <h2 className="font-bold text-base text-slate-900 line-clamp-1">
            {item?.name}
          </h2>
          <p className="text-xs text-slate-500 mt-1.5">
            {item?.teacher?.fullName}
          </p>

          {/* ریتینگ ستاره */}
          <div className="flex items-center gap-2 mt-2 bg-slate-50 w-fit px-2 py-0.5 rounded-md">
            <span className="text-xs font-bold text-amber-500">
              {item?.star}
            </span>
            <div className="flex scale-90 origin-right">
              <RenderStars rating={item?.star} />
            </div>
          </div>

          {/* ویژگی‌ها (تعداد درس، زمان، سطح) */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-slate-500">
            <div className="flex items-center gap-1.5 text-xs">
              <img src={lectureSvg} alt="" className="w-3.5 h-3.5 opacity-70" />
              <span>{item?.lectures} درس</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <img src={timeSvg} alt="" className="w-3.5 h-3.5 opacity-70" />
              <span>{item?.time}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <img src={levelSvg} alt="" className="w-3.5 h-3.5 opacity-70" />
              <span>{item?.level}</span>
            </div>
          </div>
        </div>
      </div>

      {/* قیمت و دکمه حذف */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-50 gap-4 sm:min-w-[120px]">
        <div className="text-right">
          <span className="font-extrabold text-base lg:text-lg text-slate-900">
            {coursePrice}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleRemoveFromCart}
          className="p-2.5 bg-red-50 hover:text-white text-red-600 rounded-xl transition-colors group"
          title="حذف از سبد خرید"
        >
          <svg
            className="w-5 h-5 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 11V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem;
