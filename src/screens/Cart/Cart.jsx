import React from "react";
import CartItem from "./CartItem";
import { Form, Formik } from "formik";
import CartCheckout from "./CartCheckout";

const Cart = () => {
  return (
    <div className=" my-36 max-w-[1320px] container mx-auto font-iransans">
      <p className=" text-3xl font-bold">سبد خرید</p>
      <div className=" flex items-start justify-between mt-24">
        <div className=" flex flex-col gap-6">
          <CartItem />
          <CartItem />
        </div>
        <div>
          <div>
            <CartCheckout />
          </div>
          <Formik>
            <Form></Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Cart;
