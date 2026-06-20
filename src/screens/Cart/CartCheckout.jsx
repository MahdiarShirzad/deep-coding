import React from "react";
import { motion } from "framer-motion";

const CartCheckout = ({ totalPrice, onCheckout }) => {
  const formatted = totalPrice.toLocaleString();

  return (
    <motion.aside
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-gradient-to-br from-white/60 to-slate-50/60 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">خلاصه سفارش</h3>
          <p className="text-sm text-slate-500 mt-1">بررسی و پرداخت امن</p>
        </div>
        <div className="p-2 bg-indigo-50 rounded-lg">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              stroke="#6366F1"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.6" fill="#6366F1" />
            <circle cx="18" cy="20" r="1.6" fill="#6366F1" />
          </svg>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>قیمت دوره‌ها</span>
          <span className="font-medium text-slate-800">{formatted} تومان</span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>تخفیف</span>
          <span className="font-medium text-emerald-600">—</span>
        </div>

        <div className="border-t pt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">قابل پرداخت</p>
            <p className="text-xl font-bold text-slate-900">
              {formatted} تومان
            </p>
          </div>
          <div className="text-right text-xs text-slate-500">
            <p>پرداخت امن با درگاه</p>
            <p className="mt-1">پشتیبانی ۲۴/۷</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          onClick={onCheckout}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg"
        >
          پرداخت و تکمیل ثبت نام
        </motion.button>

        <button
          onClick={() => alert("کد تخفیف در آینده اضافه می‌شود")}
          className="w-full py-2 rounded-lg border border-slate-200 text-sm text-slate-700"
        >
          وارد کردن کد تخفیف
        </button>
      </div>
    </motion.aside>
  );
};

export default CartCheckout;
