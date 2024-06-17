import React from "react";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import EmptyCart from "./EmptyCart";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, updateUser } from "../../services/apiAuth";
import { toast } from "react-toastify";

const Cart = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const queryClient = useQueryClient();

  const userCart = user?.user_metadata.cart || [];

  const totalPrice = userCart.reduce(
    (total, course) => total + course.price,
    0
  );

  const handleCheckout = async () => {
    const currentCourses = user?.user_metadata.courses || [];
    const updatedCourses = [...currentCourses, ...userCart];

    const updates = {
      cart: [],
      courses: updatedCourses,
    };

    if (user) {
      await updateUser(updates);
      queryClient.invalidateQueries(["user"]);
      toast.success("پرداخت با موفقیت انجام شد!", {
        position: "top-center",
      });
    } else {
      toast.error("خطا در پردازش پرداخت!");
    }
  };

  return (
    <div className="my-36 max-w-[1320px] container mx-auto font-iransans">
      <p className="text-3xl font-bold max-lg:mr-10">سبد خرید</p>
      {userCart.length > 0 ? (
        <div className="flex max-lg:flex-wrap items-start justify-between mt-24">
          <div className="flex flex-col gap-6 max-lg:mx-auto">
            {userCart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="max-lg:mx-auto max-lg:w-full">
            <CartCheckout totalPrice={totalPrice} onCheckout={handleCheckout} />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
