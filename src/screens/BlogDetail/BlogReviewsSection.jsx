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
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

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
        rating,
      });

      setText("");
      setRating(5);
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
      className="mt-12"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">نقد و بررسی‌ها</h3>
        <span className="text-sm font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {reviews.length} بررسی
        </span>
      </div>

      {reviews.length > 0 && (
        <div className="mb-6 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100/50">
          <div className="flex items-center gap-5">
            <div className="text-center bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-indigo-600">{avgRating}</p>
              <p className="text-xs text-gray-500 font-medium mt-1">از ۵</p>
            </div>
            <div className="flex-1">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Math.round(avgRating)
                        ? "text-yellow-400 drop-shadow-sm"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                بر اساس رای {reviews.length} نفر از خوانندگان
              </p>
            </div>
          </div>
        </div>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full mb-6 px-4 py-3.5 rounded-xl border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all active:scale-[0.98]"
        >
          + ثبت بررسی جدید
        </button>
      )}

      {showForm && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          onSubmit={handleSubmitReview}
          className="mb-8 p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
        >
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              امتیاز شما به این مقاله
            </label>
            <div className="flex gap-2 direction-ltr justify-end">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-4xl transition-colors focus:outline-none"
                >
                  <span
                    className={`${
                      star <= (hoverRating || rating)
                        ? "text-yellow-400 drop-shadow-md"
                        : "text-gray-200"
                    }`}
                  >
                    ★
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              متن بررسی شما
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="نظرتان را درباره این مقاله بنویسید..."
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none bg-gray-50 focus:bg-white"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={createReviewMutation.isPending}
              className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-70 transition-colors font-medium shadow-sm"
            >
              {createReviewMutation.isPending ? "در حال ثبت..." : "ثبت بررسی"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setText("");
                setRating(5);
              }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              لغو
            </button>
          </div>

          {createReviewMutation.error && (
            <p className="mt-4 text-sm text-red-500 font-medium bg-red-50 p-3 rounded-lg">
              خطا: {createReviewMutation.error.message}
            </p>
          )}
        </motion.form>
      )}

      <div className="space-y-4">
        {reviewsLoading ? (
          <div className="animate-pulse space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-24 bg-gray-100 rounded-xl" />
            ))}
          </div>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-bold">
                    {review.userId?.fullName?.charAt(0) || "ک"}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {review.userId?.fullName || "کاربر ناشناس"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(review.createdAt).toLocaleDateString("fa-IR")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 bg-gray-50 px-2 py-1 rounded-full">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-loose mt-2">
                {review.text}
              </p>
            </motion.div>
          ))
        ) : null}
      </div>
    </motion.div>
  );
}
