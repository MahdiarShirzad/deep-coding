import { useState } from "react";
import { motion } from "framer-motion";
import { useCreateReview, useReviewsForItem } from "../hooks/useReviews";

export default function BookReviews({ bookId }) {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const createReviewMutation = useCreateReview();

  const { data: reviews = [], isLoading: reviewsLoading } = useReviewsForItem(
    "book",
    bookId,
  );

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("لطفا متن نظر را وارد کنید");
      return;
    }

    try {
      await createReviewMutation.mutateAsync({
        refType: "book",
        refId: bookId,
        text,
        rating,
      });

      setText("");
      setRating(5);
      setShowForm(false);
    } catch (err) {
      console.error("Failed to create review:", err);
      alert("خطا در ثبت نظر");
    }
  };

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
        ).toFixed(1)
      : 0;

  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 border-r-4 border-[#0548E8] pr-2">
          نظرات خوانندگان
        </h3>
        <span className="text-sm text-gray-500">{reviews.length} نظر</span>
      </div>

      {/* Review Stats */}
      {reviews.length > 0 && (
        <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Average Rating */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#0548E8]">{avgRating}</p>
                <p className="text-xs text-gray-600 mt-1">از 5</p>
              </div>
              <div className="flex flex-col gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.round(avgRating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="md:col-span-2 space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-xs text-gray-600 min-w-8">
                    {stars} ستاره
                  </span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          reviews.length > 0
                            ? (ratingDistribution[stars] / reviews.length) * 100
                            : 0
                        }%`,
                      }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="h-full bg-yellow-400 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-gray-500 min-w-6">
                    {ratingDistribution[stars]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Review Form Button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full mb-6 px-4 py-3 rounded-2xl border-2 border-[#0548E8] text-[#0548E8] font-medium hover:bg-blue-50 transition-colors"
        >
          + اضافه کردن نظر
        </button>
      )}

      {/* Review Form */}
      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmitReview}
          className="mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-200"
        >
          {/* Rating Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              امتیاز شما
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-3xl transition-colors"
                >
                  <span
                    className={`${
                      star <= (hoverRating || rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نظر شما
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="نظر خود را بنویسید..."
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0548E8] focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={createReviewMutation.isPending}
              className="flex-1 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-500 disabled:opacity-50 transition-colors font-medium"
            >
              {createReviewMutation.isPending ? "در حال ثبت..." : "ثبت نظر"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setText("");
                setRating(5);
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

      {/* Reviews List */}
      <div className="space-y-4">
        {reviewsLoading ? (
          <p className="text-gray-500 text-center py-6">
            در حال بارگذاری نظرات...
          </p>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-medium text-gray-900">
                    {review.userId?.fullName || "کاربر ناشناس"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(review.createdAt).toLocaleDateString("fa-IR")}
                  </p>
                </div>
                <div className="flex gap-0.5">
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

              <p className="text-sm text-gray-700 leading-6">{review.text}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">
            هنوز نظری برای این کتاب ثبت نشده است.
          </p>
        )}
      </div>
    </motion.div>
  );
}
