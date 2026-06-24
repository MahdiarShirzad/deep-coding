import { useQueryClient } from "@tanstack/react-query";
// import { updateUser } from "../../../services/apiAuth";
// import { toast } from "react-toastify";

import { removeFromWishlist } from "../../../services/apiWishlist";
import { useState } from "react";
import { toast } from "react-toastify";

export const FavoritesCard = ({ item }) => {
  const queryClient = useQueryClient();

  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveFromWishlist = async () => {
    if (isRemoving) {
      return;
    }

    try {
      await removeFromWishlist(item?._id);

      queryClient.invalidateQueries(["user"]);
    } catch (error) {
      toast.error("خطا در حذف");

      console.log(error);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800/60 hover:border-slate-700/80 transition-all p-4 rounded-xl gap-4 md:gap-6 backdrop-blur-sm">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          className="w-20 h-16 md:w-24 md:h-20 rounded-lg object-cover bg-slate-800 border border-slate-700/40"
          src={item?.img}
          alt={item?.name}
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-white text-base md:text-lg line-clamp-1">
            {item?.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-400 w-full md:w-auto md:justify-end flex-1">
        <span className="bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/30 text-slate-300">
          {item?.category}
        </span>
        <span className="text-slate-300 font-light">{item?.level}</span>

        <span className="flex items-center gap-1 text-slate-400">
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {item?.time}
        </span>

        <span className="flex items-center gap-1 text-amber-400 font-medium">
          <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {item?.ratingsAverage}
        </span>
      </div>

      <div className="w-full md:w-auto flex justify-end md:block border-t border-slate-800/60 pt-3 md:pt-0 md:border-0">
        <button
          disabled={isRemoving}
          onClick={handleRemoveFromWishlist}
          className="p-2 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-all duration-200"
          title="حذف از علاقه‌مندی‌ها"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
