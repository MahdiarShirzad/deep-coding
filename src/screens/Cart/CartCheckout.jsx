import React from "react";
import { motion } from "framer-motion";

const CartCheckout = ({ totalPrice, onCheckout }) => {
  const formatted = totalPrice.toLocaleString();

  return (
    <motion.aside
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl shadow-slate-100/70"
    >
      <div className="flex items-center justify-between pb-4 border-b border-slate-50">
        <div>
          <h3 className="text-lg font-bold text-slate-800">خلاصه سفارش</h3>
          <p className="text-xs text-slate-400 mt-1">بررسی و پرداخت امن شتاب</p>
        </div>
        <div className="p-2.5 bg-indigo-50/70 rounded-xl">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              stroke="#4f46e5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.6" fill="#4f46e5" />
            <circle cx="18" cy="20" r="1.6" fill="#4f46e5" />
          </svg>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>قیمت دوره‌ها</span>
          <span className="font-semibold text-slate-800">
            {formatted} تومان
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>تخفیف</span>
          <span className="font-medium text-emerald-600">۰ تومان</span>
        </div>

        <div className="border-t border-dashed border-slate-100 pt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">مبلغ قابل پرداخت</p>
            <p className="text-xl font-black text-slate-900 mt-1">
              {formatted}{" "}
              <span className="text-xs font-normal text-slate-500">تومان</span>
            </p>
          </div>
          <div className="text-left text-[11px] text-slate-400 leading-relaxed">
            <p className="font-medium text-slate-500">
              پرداخت امن با درگاه بانکی
            </p>
            <p className="mt-0.5">پشتیبانی ۲۴ ساعته دیپ‌کدینگ</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.01, filter: "brightness(1.05)" }}
          whileTap={{ scale: 0.99 }}
          onClick={onCheckout}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-indigo-100 transition-all"
        >
          پرداخت و تکمیل ثبت نام
        </motion.button>

        <motion.button
          whileHover={{ bg: "#f8fafc" }}
          onClick={() => alert("کد تخفیف در آینده اضافه می‌شود")}
          className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 transition-colors"
        >
          وارد کردن کد تخفیف
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default CartCheckout;
