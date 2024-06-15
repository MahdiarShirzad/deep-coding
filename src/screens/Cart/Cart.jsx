import React, { useState } from "react";
// import CartItem from "./CartItem";
import { Form, Formik } from "formik";
import CartCheckout from "./CartCheckout";

import EmptyCart from "./EmptyCart";

const Cart = ({ courses }) => {
  const [showEmptyCart, setShowEmptyCart] = useState(false);

  return (
    <div className="my-36 max-w-[1320px] container mx-auto font-iransans">
      <p className="text-3xl font-bold max-lg:mr-10">سبد خرید</p>
      {!showEmptyCart ? (
        <div className="flex max-lg:flex-wrap items-start justify-between mt-24">
          <div className="flex flex-col gap-6 max-lg:mx-auto"></div>
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
