import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function BlogHeader({ blog }) {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <div className="relative w-full aspect-[16/6] bg-gray-100">
        <img
          src={blog?.coverImg}
          alt={blog?.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-6 bottom-6 text-white max-w-[900px]">
          <span className="inline-block bg-indigo-600/90 px-3 py-1 rounded-md text-sm">
            {blog?.category}
          </span>
          <h1 className="mt-3 text-2xl lg:text-3xl font-extrabold leading-tight">
            {blog?.title}
          </h1>
          <div className="mt-2 text-sm text-white/90 flex items-center gap-4">
            <span>
              توسط <strong className="text-white">{blog?.author}</strong>
            </span>
            {blog?.createdAt && (
              <span>
                • {new Date(blog?.createdAt).toLocaleDateString("fa-IR")}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
