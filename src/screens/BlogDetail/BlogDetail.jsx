import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { getBlog } from "../../services/apiBlogs";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function BlogDetail() {
  const { id } = useParams();

  const {
    data: res,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlog(id),
    enabled: !!id,
  });

  const blog = useMemo(() => {
    if (!res) return null;
    return res?.data?.blog ?? res?.blog ?? res?.data ?? res;
  }, [res]);

  const toc = useMemo(() => {
    if (!blog?.content) return [];
    return blog.content.map((c) => ({ id: c.headingId, title: c.heading }));
  }, [blog]);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("blog-article");
      if (!article) return setProgress(0);
      const rect = article.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = Math.max(article.scrollHeight - winH, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress((scrolled / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [blog]);

  if (isLoading) {
    return (
      <div className="container max-w-[1100px] mx-auto my-24 font-iransans px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-64 bg-gray-200 rounded-xl" />
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 bg-gray-200 rounded" />
            <div className="h-48 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="container max-w-[1100px] mx-auto my-24 font-iransans text-center px-4">
        <p className="text-gray-600">
          خطا در بارگذاری مقاله. دوباره تلاش کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="container max-w-[1100px] mx-auto my-20 font-iransans px-4">
      {/* Reading progress */}
      <div className="fixed left-0 top-0 h-1 w-full z-50 bg-transparent">
        <div
          className="h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero */}
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

      <div className="mt-8 flex gap-8 max-lg:flex-col">
        {/* Main */}
        <main
          id="blog-article"
          className="w-full max-w-[760px] bg-white rounded-2xl shadow-sm p-8"
        >
          {/* Tags */}
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

          {/* Content */}
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
                  <p className="text-base leading-7 text-gray-700">
                    {block.text}
                  </p>
                )}
              </motion.section>
            ))}
          </article>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 border-t pt-6 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${encodeURIComponent(blog.author)}/100/100`}
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

          {/* Comments */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold mb-3">نظرات</h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              {blog.comments && blog.comments.length > 0 ? (
                blog.comments.map((c) => (
                  <div
                    key={c._id ?? c.createdAt}
                    className="mb-4 border-b pb-3"
                  >
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
        </main>

        {/* Sidebar TOC */}
        <aside className="w-80 max-lg:hidden sticky top-28 h-fit">
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                فهرست مطالب
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(t.id);
                        if (el)
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {t.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                اشتراک گذاری
              </h4>
              <div className="flex gap-2">
                <a
                  className="flex-1 text-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm"
                  href="#"
                >
                  توییتر
                </a>
                <a
                  className="flex-1 text-center px-3 py-2 rounded-md bg-blue-800 text-white text-sm"
                  href="#"
                >
                  لینکدین
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
