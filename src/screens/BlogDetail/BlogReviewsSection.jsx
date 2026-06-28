import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCreateReview } from "../../hooks/useReviews";

export default function BlogReviewsSection({
  blogId,
  reviews,
  reviewsLoading,
}) {
  const [showForm, setShowForm] = useState(false);
  const createReviewMutation = useCreateReview();
  const [text, setText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("لطفا متن نظر را وارد کنید");
      return;
    }

    try {
      await createReviewMutation.mutateAsync({
        refType: "blog",
        refId: blogId,
        text,
      });

      setText("");
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert("خطا در ثبت نظر");
    }
  };

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
        ).toFixed(1)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">نظرات خوانندگان</h3>
        <span className="text-sm text-gray-500">{reviews.length} نظر</span>
      </div>

      {reviews.length > 0 && (
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">{avgRating}</p>
              <p className="text-sm text-gray-600">از 5</p>
            </div>
            <div className="flex-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.round(avgRating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-2">
                بر اساس {reviews.length} نظر
              </p>
            </div>
          </div>
        </div>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full mb-6 px-4 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
        >
          + اضافه کردن نظر
        </button>
      )}

      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmitReview}
          className="mb-6 p-4 bg-gray-50 rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نظر شما
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="نظر خود را بنویسید..."
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={createReviewMutation.isPending}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors font-medium"
            >
              {createReviewMutation.isPending ? "در حال ثبت..." : "ثبت نظر"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setText("");
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              لغو
            </button>
          </div>

          {createReviewMutation.error && (
            <p className="mt-2 text-sm text-red-600">
              خطا: {createReviewMutation.error.message}
            </p>
          )}
        </motion.form>
      )}

      <div className="space-y-4">
        {reviewsLoading ? (
          <p className="text-gray-500">در حال بارگذاری نظرات...</p>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">
                    {review.userId?.fullName || "کاربر ناشناس"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString("fa-IR")}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-6">{review.text}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">
            هنوز نظری برای این مقاله ثبت نشده است.
          </p>
        )}
      </div>
    </motion.div>
  );
}
