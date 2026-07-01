import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import scrollToTop from "../../../utils/scrollToTop.js";

const BlogCard = ({ blog }) => {
  const cover = blog?.coverImg || "https://picsum.photos/800/450?random=10";
  const title = blog?.title || "عنوان نامشخص";
  const excerpt =
    blog?.content?.[0]?.text?.slice(0, 140) ||
    "خلاصه‌ای از مطلب در اینجا نمایش داده می‌شود...";
  const category = blog?.category || "بدون دسته";
  // const author = blog?.author || "نویسنده نامشخص";
  const createdAt = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("fa-IR")
    : null;
  const rating = blog?.ratingsAverage ?? null;
  const tags = blog?.tags ?? [];

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group flex h-full w-full max-w-[600px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl font-iransans dir-rtl text-right"
      aria-label={`بلاگ: ${title}`}
    >
      {/* Image Container */}
      <Link
        onClick={scrollToTop}
        to={`/blogs/${blog?._id}`}
        className="relative block overflow-hidden"
      >
        <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
          <img
            src={cover}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle overlay matching modern design standards */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      {/* Main Body - flex-grow pushes the footer down to ensure identical height */}
      <div className="flex flex-grow flex-col justify-between p-5 md:p-6">
        {/* Top Segment: Meta, Title, Excerpt */}
        <div className="space-y-3.5">
          {/* Meta & Rating */}
          <div className="flex items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-indigo-50/70 px-2.5 py-1 text-indigo-600">
                {category}
              </span>
              {createdAt && <span className="text-gray-400">{createdAt}</span>}
            </div>

            {rating !== null && (
              <div className="flex items-center gap-1 text-amber-500 bg-amber-50/50 px-2 py-0.5 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.631 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
                <span className="font-bold text-gray-700">
                  {rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
            <Link
              onClick={scrollToTop}
              to={`/blogs/${blog?._id}`}
              className="hover:text-indigo-600 transition-colors duration-200 line-clamp-2"
            >
              {title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Bottom Segment: Fixed Tag box and CTA button */}
        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between gap-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 max-h-[28px] overflow-hidden">
            {tags.slice(0, 2).map((t, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md border border-gray-100"
              >
                #{t}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="text-[11px] text-gray-400 self-center">
                +{tags.length - 2}
              </span>
            )}
          </div>

          {/* Action Button */}
          <Link
            onClick={scrollToTop}
            to={`/blogs/${blog?._id}`}
            className="text-xs font-semibold whitespace-nowrap bg-indigo-600 text-white px-3.5 py-2 rounded-xl shadow-sm hover:bg-indigo-700 transition-colors duration-200"
            aria-label={`مشاهده کامل ${title}`}
          >
            مشاهده مطلب
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
