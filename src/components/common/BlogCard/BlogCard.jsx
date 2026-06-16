import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import scrollToTop from "../../../utils/scrollToTop";

const BlogCard = ({ blog }) => {
  const cover = blog?.coverImg || "https://picsum.photos/800/450?random=10";
  const title = blog?.title || "عنوان نامشخص";
  const excerpt =
    blog?.content?.[0]?.text?.slice(0, 140) ||
    "خلاصه‌ای از مطلب در اینجا نمایش داده می‌شود...";
  const category = blog?.category || "بدون دسته";
  const author = blog?.author || "نویسنده نامشخص";
  const createdAt = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("fa-IR")
    : null;
  const rating = blog?.ratingsAverage ?? null;
  const tags = blog?.tags ?? [];

  return (
    <motion.article
      layout
      whileHover={{ scale: 1.02 }}
      className="group w-full max-w-[600px] bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden my-4"
      aria-label={`بلاگ: ${title}`}
    >
      {/* Image */}
      <Link
        onClick={scrollToTop}
        to={`/blogs/${blog?._id}`}
        className="block relative"
      >
        <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden">
          <img
            src={cover}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md">
              {category}
            </span>

            {createdAt && <span className="text-gray-400">• {createdAt}</span>}
          </div>

          {rating !== null && (
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.631 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.966z" />
              </svg>
              <span className="text-gray-700 font-medium">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg lg:text-xl font-semibold text-gray-800 line-clamp-2">
          <Link
            onClick={scrollToTop}
            to={`/blogs/${blog?._id}`}
            className="hover:text-indigo-600 transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-3">{excerpt}...</p>

        {/* Tags and CTA */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((t, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
              >
                #{t}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-400 px-2">
                +{tags.length - 3}
              </span>
            )}
          </div>

          <Link
            onClick={scrollToTop}
            to={`/blogs/${blog?._id}`}
            className="text-sm text-center bg-indigo-600 text-white px-3 py-1 rounded-md shadow-sm hover:bg-indigo-700 transition-colors"
            aria-label={`مشاهده کامل ${title}`}
          >
            مشاهده بیشتر
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
