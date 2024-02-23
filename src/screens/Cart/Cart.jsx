import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Form, Formik } from "formik";
import CartCheckout from "./CartCheckout";

import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../store/data";
import EmptyCart from "./EmptyCart";

const Cart = ({ courses }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || {};

  const [showEmptyCart, setShowEmptyCart] = useState(false);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    const isEmpty = Object.values(cartItems).every(
      (userCart) => userCart.length === 0
    );
    setShowEmptyCart(isEmpty);
  }, [cartItems]);

  return (
    <div className="my-36 max-w-[1320px] container mx-auto font-iransans">
      <p className="text-3xl font-bold max-lg:mr-10">سبد خرید</p>
      {!showEmptyCart ? (
        <div className="flex max-lg:flex-wrap items-start justify-between mt-24">
          <div className="flex flex-col gap-6 max-lg:mx-auto">
            {Object.entries(cartItems).map(([userId, userCart]) =>
              userCart.map((item) => (
                <CartItem key={item.itemId} item={item} courses={courses} />
              ))
            )}
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
