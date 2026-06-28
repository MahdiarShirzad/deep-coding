import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function BlogContent({ blog }) {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-wrap gap-2 mb-4"
      >
        {(blog?.tags || []).map((t, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
          >
            #{t}
          </span>
        ))}
      </motion.div>

      <article className="prose prose-rtl max-w-none text-gray-800">
        {blog?.content?.map((block) => (
          <motion.section
            key={block.headingId}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            id={block.headingId}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-3">{block.heading}</h2>

            {block.images?.length > 0 && (
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {block.images.map((img, idx) => (
                  <figure
                    key={img._id ?? idx}
                    className="rounded-lg overflow-hidden bg-gray-50"
                  >
                    <img
                      src={
                        img.url ||
                        `https://picsum.photos/800/450?random=${idx + 10}`
                      }
                      alt={img.caption || block.heading}
                      className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    {img.caption && (
                      <figcaption className="text-xs text-gray-500 p-2">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}

            {typeof block.text === "string" &&
            /<\/?[a-z][\s\S]*>/i.test(block.text) ? (
              <div
                className="text-base leading-7"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            ) : (
              <p className="text-base leading-7 text-gray-700">{block.text}</p>
            )}
          </motion.section>
        ))}
      </article>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 border-t pt-6 flex items-center gap-4"
      >
        <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden">
          <img
            src={`https://picsum.photos/seed/${encodeURIComponent(
              blog.author,
            )}/100/100`}
            alt={blog.author}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600">نویسنده</p>
          <p className="font-medium text-gray-900">{blog.author}</p>
          <p className="text-sm text-gray-500 mt-1">
            اگر سوالی دارید در بخش نظرات مطرح کنید.
          </p>
        </div>
      </motion.div>
    </>
  );
}
