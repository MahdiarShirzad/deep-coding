import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUsersWishlist,
  removeFromWishlist,
} from "../../../services/apiWishlist";
import { FavoritesCard } from "./FavoritesCard";

const Favorites = () => {
  const queryClient = useQueryClient();

  const {
    data: wishlist,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getUsersWishlist,
  });

  console.log(wishlist);

  const { mutate: removeItem, isPending } = useMutation({
    mutationFn: removeFromWishlist,

    onMutate: async (idOrSlug) => {
      await queryClient.cancelQueries({ queryKey: ["wishlist"] });

      const previousWishlist = queryClient.getQueryData(["wishlist"]);

      queryClient.setQueryData(["wishlist"], (old = []) =>
        old.filter((item) => item._id !== idOrSlug && item.slug !== idOrSlug),
      );

      return { previousWishlist };
    },

    onError: (err, variables, context) => {
      queryClient.setQueryData(["wishlist"], context.previousWishlist);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  if (isLoading) return <p>در حال بارگذاری...</p>;

  if (isError) return <p>خطا: {error.message}</p>;

  return (
    <div>
      <h1 className="text-2xl my-5">علاقه‌مندی‌ها</h1>

      {wishlist.length > 0 ? (
        wishlist.map((course) => (
          <FavoritesCard
            key={course._id}
            item={course}
            onRemove={removeItem}
            isRemoving={isPending}
          />
        ))
      ) : (
        <p>لیست علاقه‌مندی‌ها خالی است 😢</p>
      )}
    </div>
  );
};

export default Favorites;
