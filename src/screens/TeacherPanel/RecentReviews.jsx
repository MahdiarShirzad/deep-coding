import React from "react";

const RecentReviews = () => {
  // دیتای فیک برای نظرات اخیر دوره‌ها
  const reviews = [
    {
      id: 1,
      user: "امیرمحمد",
      course: "Next.js پیشرفته",
      comment: "استاد واقعا بخش بهینه‌سازی عالی بود مچکرم.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      user: "سارا احمدی",
      course: "دوره Deep Coding",
      comment: "پشتیبانی دوره کمی با تاخیر جواب میده ولی ویدیوها عالیه.",
      rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <h3 className="text-base font-bold text-white mb-4">
        آخرین نظرات دانشجویان
      </h3>
      <div className="space-y-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-slate-800/30 border border-slate-800 p-3 rounded-lg space-y-1"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="text-white font-medium">{review.user}</span>
              <span className="text-[10px] text-amber-400">
                {review.rating}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate-2-lines">
              {review.comment}
            </p>
            <p className="text-[10px] text-violet-400 pt-1">
              دوره: {review.course}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReviews;
