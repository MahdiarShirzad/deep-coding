import { useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../../services/apiAuth";
import { toast } from "react-toastify";

export const FavoritesCard = ({ item }) => {
  const queryClient = useQueryClient();

  const handleRemoveFromWishlist = async () => {
    const user = queryClient.getQueryData(["user"]);
    const currentWishlist = user?.user_metadata.wishlist || [];
    const updatedWishlist = currentWishlist.filter(
      (course) => course.id !== item.id
    );

    const updates = {
      wishlist: updatedWishlist,
    };

    updateUser(updates);
    queryClient.invalidateQueries(["user"]);
    toast.success("دوره از مورد علاقه ها حذف شد!", {
      position: "top-center",
    });
  };

  return (
    <div className=" flex justify-between items-center shadow-lg px-4 py-4 rounded-lg max-md:flex-col max-md:w-56 bg-gray-50 max-md:gap-2">
      <img
        className=" w-24 h-20 rounded-lg max-md:w-32 max-md:h-24"
        src={item?.img}
        alt=""
      />
      <p>{item?.name}</p>
      <p>{item?.teacher}</p>
      <p>{item?.category}</p>
      <p>{item?.level}</p>
      <p>{item?.time}</p>
      <p>{item?.star}</p>
      <button onClick={handleRemoveFromWishlist}>
        <svg
          className="w-8"
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
            {" "}
            <path
              d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#B8001C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};
