import React from "react";
import { motion } from "framer-motion";

export default function BlogComments({ comments }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8"
    >
      <h3 className="text-lg font-semibold mb-3">نظرات</h3>
      <div className="p-4 bg-gray-50 rounded-lg">
        {comments && comments.length > 0 ? (
          comments.map((c) => (
            <div key={c._id ?? c.createdAt} className="mb-4 border-b pb-3">
              <p className="text-sm text-gray-700">{c.text}</p>
              <div className="text-xs text-gray-400 mt-2">
                {new Date(c.createdAt).toLocaleString("fa-IR")}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">هنوز نظری ثبت نشده است.</p>
        )}
      </div>
    </motion.div>
  );
}
