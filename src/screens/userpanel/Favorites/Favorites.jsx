import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";
import { FavoritesCard } from "./FavoritesCard";

const Favorites = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const wishlist = user?.user_metadata.wishlist;

  return (
    <div>
      <p className=" text-2xl font-semibold">مورد علاقه ها</p>
      {wishlist && wishlist?.length > 0 ? (
        <div className=" h-[1000px] mt-14">
          {wishlist?.map((item) => (
            <FavoritesCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className=" text-center text-2xl mt-20">
          لیست مورد علاقه های شما خالی است !
        </div>
      )}
    </div>
  );
};

export default Favorites;
