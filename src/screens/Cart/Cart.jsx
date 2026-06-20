import React from "react";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import EmptyCart from "./EmptyCart";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getUsersCart } from "../../services/apiCart";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Cart = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: cart, isLoading } = useQuery({
    queryFn: () => getUsersCart(),
    queryKey: ["cart"],
  });
  const userCart = cart || [];

  const totalPrice = userCart.reduce(
    (total, course) => total + course.price,
    0,
  );

  const handleCheckout = async () => {};

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[400px] text-lg font-medium text-slate-600 font-iransans">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full ml-3"
        />
        در حال بارگذاری سبد خرید...
      </div>
    );

  return (
    <div className="my-10 lg:my-20 max-w-[1320px] container mx-auto font-iransans px-4 sm:px-6 dir-rtl text-right">
      {/* هدر سبد خرید */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950">
            سبد خرید
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            دوره‌های انتخابی شما را اینجا می‌بینید
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-4 py-2.5 rounded-xl shadow-md shadow-indigo-100">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-90"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="20" r="1.6" fill="white" />
              <circle cx="18" cy="20" r="1.6" fill="white" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">
              {userCart.length} دوره در سبد
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-xl shadow-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12h18M12 3v18"
                stroke="#334155"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium">
              بازگشت به دوره‌ها
            </span>
          </motion.button>
        </div>
      </div>

      <div className="mt-8 lg:mt-12">
        <AnimatePresence mode="popLayout">
          {userCart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="lg:col-span-2 flex flex-col gap-4 w-full"
              >
                <AnimatePresence mode="popLayout">
                  {userCart.map((item) => (
                    <CartItem item={item} key={item._id} />
                  ))}
                </AnimatePresence>
              </motion.div>

              <div className="lg:col-span-1 lg:sticky lg:top-6 w-full">
                <CartCheckout
                  totalPrice={totalPrice}
                  onCheckout={handleCheckout}
                />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <EmptyCart />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;
