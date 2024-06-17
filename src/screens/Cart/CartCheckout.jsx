import React from "react";

const CartCheckout = ({ totalPrice, onCheckout }) => {
  return (
    <div className="w-[350px] rounded-lg shadow-md px-6 py-10 max-lg:mx-auto max-lg:mt-14">
      <div className="flex items-center mt-3 justify-between">
        <p>قیمت:</p>
        <div className="flex gap-1">
          <span>{totalPrice.toLocaleString()}</span>
          <span>تومان</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 border-t pt-5">
        <p>قابل پرداخت:</p>
        <div className="flex gap-1">
          <span>{totalPrice.toLocaleString()}</span>
          <span>تومان</span>
        </div>
      </div>
      <button
        className="text-center w-[220px] block py-3 rounded-xl text-white mx-auto mt-12 bg-violet-700"
        onClick={onCheckout}
      >
        پرداخت و تکمیل ثبت نام
      </button>
    </div>
  );
};

export default CartCheckout;
