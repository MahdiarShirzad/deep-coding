import React from "react";
import { useSelector } from "react-redux";

const CartCheckout = () => {
  const cartItems = useSelector((state) => state.cart.items) || {};

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    Object.values(cartItems).forEach((userCart) => {
      userCart.forEach((item) => {
        totalPrice += item.price;
      });
    });

    console.log(totalPrice);
    return +totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="w-[350px] rounded-lg shadow-md px-6 py-10 max-lg:mx-auto max-lg:mt-14">
      <div className="flex items-center mt-3 justify-between">
        <p>قیمت:</p>
        <div className="flex gap-1">
          <span>{totalPrice}</span>
          <span>تومان</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 border-t pt-5">
        <p>قابل پرداخت:</p>
        <div className="flex gap-1">
          <span>{totalPrice}</span>
          <span>تومان</span>
        </div>
      </div>
      <button className="text-center w-[220px] block py-3 rounded-xl text-white mx-auto mt-12 bg-violet-700">
        پرداخت و تکمیل ثبت نام
      </button>
    </div>
  );
};

export default CartCheckout;
