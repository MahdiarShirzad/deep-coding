import React from "react";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import EmptyCart from "./EmptyCart";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, updateUser } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // ۱. اضافه کردن ?. بعد از user_metadata برای جلوگیری از کرش
  // نکته: اگر از بک‌اند خودت استفاده می‌کنی، این رو به user?.cart || [] تغییر بده
  const userCart = user?.user_metadata?.cart || user?.cart || [];

  const totalPrice = userCart.reduce(
    (total, course) => total + course.price,
    0,
  );

  const handleCheckout = async () => {
    // ۲. اصلاح آپشنال چینینگ در اینجا
    const currentCourses = user?.user_metadata?.courses || user?.courses || [];

    const courseExists = currentCourses.some((course) =>
      userCart.some((cartCourse) => cartCourse.id === course.id),
    );

    if (courseExists) {
      toast.error("شما قبلا در این دوره ثبت نام کرده اید !", {
        position: "top-center",
      });
      return;
    }

    const updatedCourses = [...currentCourses, ...userCart];
    const updates = {
      cart: [],
      courses: updatedCourses,
    };

    if (user) {
      try {
        // ۳. حتماً باید await بذاری تا اول در دیتابیس ذخیره بشه
        await updateUser(updates);

        // ۴. حالا کش رو پینگ کن تا کامپوننت‌ها دیتای جدید رو بگیرن
        queryClient.invalidateQueries(["user"]);

        toast.success("پرداخت با موفقیت انجام شد!", { position: "top-center" });
        navigate("/user-panel/dashboard");
      } catch (err) {
        toast.error("خطا در پردازش پرداخت!");
      }
    }
  };

  // ۵. تا زمانی که وضعیت یوزر مشخص نشده، کامپوننت اصلی رو رندر نکن
  if (isLoading)
    return <div className="text-center my-36">در حال بارگذاری سبد خرید...</div>;

  return (
    <div className="my-36 max-w-[1320px] container mx-auto font-iransans">
      <p className="text-3xl font-bold max-lg:mr-10">سبد خرید</p>
      {userCart.length > 0 ? (
        <div className="flex max-lg:flex-wrap items-start justify-between mt-24">
          <div className="flex flex-col gap-6 max-lg:mx-auto">
            {userCart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="max-lg:mx-auto max-lg:w-full">
            <CartCheckout totalPrice={totalPrice} onCheckout={handleCheckout} />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
