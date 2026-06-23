import React from "react";

const BookStats = React.memo(({ totalBooks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-[#111827] border border-cyan-500/10 p-5 rounded-xl shadow-xl">
        <p className="text-slate-400 text-sm font-medium">
          کل کتاب‌ها / منابع موجود
        </p>
        <h3 className="text-3xl font-bold text-cyan-400 mt-2">
          {totalBooks} جلد
        </h3>
      </div>
    </div>
  );
});

BookStats.displayName = "BookStats";
export default BookStats;
