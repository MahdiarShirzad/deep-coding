import React from "react";
import CartItem from "./CartItem";
import { Form, Formik } from "formik";
import CartCheckout from "./CartCheckout";

import EmptyCart from "./EmptyCart";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

const Cart = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  // console.log(user?.user_metadata.cart);

  const userCart = user?.user_metadata.cart;

  console.log(userCart);

  return (
    <div className="my-36 max-w-[1320px] container mx-auto font-iransans">
      <p className="text-3xl font-bold max-lg:mr-10">سبد خرید</p>
      {userCart && userCart?.length > 0 ? (
        <div className="flex max-lg:flex-wrap items-start justify-between mt-24">
          <div className="flex flex-col gap-6 max-lg:mx-auto">
            {userCart?.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className=" max-lg:mx-auto max-lg:w-full ">
            <div>
              <CartCheckout />
            </div>
            <Formik>
              <Form></Form>
            </Formik>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
