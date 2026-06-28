import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../services/apiBlogs";
import { useReviewsForItem } from "../../hooks/useReviews";

import ProgressBar from "./ProgressBar";
import BlogHeader from "./BlogHeader";
import BlogSidebar from "./BlogSidebar";
import BlogContent from "./BlogContent";
import BlogReviewsSection from "./BlogReviewsSection";
import BlogComments from "./BlogComments";

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

  const { data: reviews = [], isLoading: reviewsLoading } = useReviewsForItem(
    "blog",
    id,
  );

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
      <ProgressBar progress={progress} />
      <BlogHeader blog={blog} />

      <div className="mt-8 flex gap-8 max-lg:flex-col">
        <main
          id="blog-article"
          className="w-full max-w-[760px] bg-white rounded-2xl shadow-sm p-8"
        >
          <BlogContent blog={blog} />

          <BlogReviewsSection
            blogId={id}
            reviews={reviews}
            reviewsLoading={reviewsLoading}
          />

          <BlogComments comments={blog.comments} />
        </main>

        <BlogSidebar toc={toc} />
      </div>
    </div>
  );
}
