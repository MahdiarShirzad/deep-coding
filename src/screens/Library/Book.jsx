import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/apiBooks";
import { toast } from "react-toastify";
import { Spinner } from "../../components/Spinner/Spinner";
import { motion } from "framer-motion";
import BookReviews from "../../components/BookReviews";

export default function Book() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["books", id],
    queryFn: () => getBook(id),
  });

  const selectedBook = data?.data?.book;

  console.log(selectedBook);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("لینک کپی شد!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <Spinner />
      </div>
    );
  }

  if (!selectedBook) {
    return (
      <div className="flex h-screen w-full items-center justify-center font-iransans dir-rtl">
        <p className="text-xl text-gray-500">کتاب مورد نظر یافت نشد.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50/50 py-10 md:py-20 px-4 sm:px-6 lg:px-8 font-iransans dir-rtl text-right"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#0548E8] rounded-lg text-xs font-medium mb-3">
                {selectedBook?.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight font-yekanBold">
                {selectedBook?.title}
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                نویسنده:{" "}
                <span className="font-semibold text-gray-700">
                  {selectedBook?.authorName}
                </span>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm w-fit"
            >
              <div className="flex items-center gap-1 text-amber-500">
                <span className="font-bold text-sm text-gray-800">
                  {selectedBook?.ratingsAverage}
                </span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-xs text-gray-400">
                ({selectedBook?.ratingsQuantity} نظر ثبت شده)
              </span>
            </motion.div>

            {selectedBook?.tags && (
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2"
              >
                {selectedBook.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-xl border border-gray-200/60 hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-r-4 border-[#0548E8] pr-2">
                خلاصه کتاب
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-7 text-justify">
                {selectedBook?.description}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-r-4 border-[#0548E8] pr-2">
                معرفی و نقشه راه
              </h2>
              <div
                className="prose prose-blue max-w-none text-gray-700 text-sm md:text-base leading-loose text-justify custom-content "
                dangerouslySetInnerHTML={{ __html: selectedBook?.introduction }}
              />
            </motion.div>

            {/* Book Reviews Section */}
            <BookReviews bookId={id} />
          </div>

          <div className="lg:sticky lg:top-8 space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-white p-4 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col items-center"
            >
              <div className="w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                <motion.img
                  className="w-full h-full object-cover"
                  src={selectedBook?.image}
                  alt={selectedBook?.title}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="w-full pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  این کتاب رو دوست داشتی؟
                </span>
                <motion.button
                  onClick={handleShare}
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 py-2 px-4 rounded-2xl text-xs md:text-sm font-semibold transition-all shadow-sm"
                  title="کپی لینک صفحه"
                >
                  <span>اشتراک‌گذاری</span>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
