import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RenderStars from "../../components/RenderStars/RenderStars";
import { addToWishlist, getUsersWishlist } from "../../services/apiWishlist";
import { getStudentsCountOfCourse } from "../../services/apiCourses";

const CourseHero = ({ selectedCourse }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!selectedCourse?._id) return;
      try {
        const wishlist = await getUsersWishlist();
        const isAdded = wishlist.some(
          (course) =>
            course._id === selectedCourse._id || course === selectedCourse._id,
        );
        setIsInWishlist(isAdded);
      } catch (error) {
        console.error("Failed to fetch wishlist status");
      }
    };
    fetchWishlist();
  }, [selectedCourse?._id]);

  useEffect(() => {
    const fetchStudentsCounts = async () => {
      try {
        const count = await getStudentsCountOfCourse(selectedCourse?.id);
        setStudentsCount(count);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudentsCounts();
  }, [selectedCourse?._id]);

  console.log(studentsCount);

  const handleAddToWishlist = async () => {
    if (!selectedCourse?._id || isInWishlist) return;
    try {
      setIsLoading(true);
      await addToWishlist(selectedCourse._id);
      setIsInWishlist(true);
    } catch (error) {
      console.error("Failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="max-w-[1320px] mx-auto px-4 sm:px-8 py-7 lg:py-7"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="lg:w-2/3 w-full space-y-6">
        <motion.h1
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold leading-relaxed text-white"
        >
          {selectedCourse?.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-slate-300 text-lg leading-loose text-justify"
        >
          {selectedCourse?.desc}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 items-center pt-4"
        >
          <div className="flex gap-1 items-center bg-slate-800 px-3 py-1.5 rounded-full">
            <RenderStars rating={selectedCourse?.ratingsAverage} />
            <span className="text-[#fcc419] font-bold mr-2">
              {selectedCourse?.ratingsAverage}
            </span>
          </div>
          <p className="text-sm text-slate-300">
            ({selectedCourse?.ratingsQuantity} رای)
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:block"></span>
          <p className="text-sm text-slate-300">
            {studentsCount?.data?.studentsCount} دانشجو
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-slate-300 pt-2"
        >
          <span>مدرس:</span>
          <Link
            to={`/teacher-info/${selectedCourse?.teacher?._id}`}
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium"
          >
            {selectedCourse?.teacher?.fullName}
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-6">
          <button
            onClick={handleAddToWishlist}
            disabled={isLoading || isInWishlist}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium
               ${
                 isInWishlist
                   ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-not-allowed"
                   : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
               }`}
          >
            {isInWishlist ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
                />
              </svg>
            )}
            <span>
              {isInWishlist
                ? "موجود در علاقه‌مندی‌ها"
                : isLoading
                  ? "در حال افزودن..."
                  : "افزودن به علاقه‌مندی‌ها"}
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseHero;
