import React from "react";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import EmptyCart from "./EmptyCart";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, updateUser } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUsersCart } from "../../services/apiCart";
import { motion, AnimatePresence } from "framer-motion";

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
    return <div className="text-center my-36">در حال بارگذاری سبد خرید...</div>;

  return (
    <div className="my-20 max-w-[1320px] container mx-auto font-iransans px-4">
      <div className="flex items-center justify-between gap-4 max-md:flex-col">
        <div>
          <h1 className="text-4xl my-10 font-extrabold tracking-tight text-slate-900 ">
            سبد خرید
          </h1>
          <p className="mt-2 text-slate-500">
            دوره‌های انتخابی شما را اینجا می‌بینید
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg">
            <svg
              width="20"
              height="20"
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
            <span className="text-sm font-medium">
              {userCart.length} دوره در سبد
            </span>
          </div>

          <button
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 bg-slate-100  px-3 py-2 rounded-lg shadow hover:scale-[1.02] transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12h18"
                stroke="#334155"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M12 3v18"
                stroke="#334155"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm">بازگشت به دوره‌ها</span>
          </button>
        </div>
      </div>

      <div className="mt-10">
        <AnimatePresence mode="popLayout">
          {userCart.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45 }}
              className="flex items-start gap-8 max-lg:flex-col"
            >
              <div className="flex-1 flex flex-col gap-6">
                {userCart.map((item) => (
                  <CartItem item={item} key={item._id} />
                ))}
              </div>

              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="w-[380px] max-w-full"
              >
                <CartCheckout
                  totalPrice={totalPrice}
                  onCheckout={handleCheckout}
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
