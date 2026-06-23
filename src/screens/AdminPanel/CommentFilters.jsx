import React from "react";

const CommentFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
      {/* سرچ درون متن کامنت یا نام نویسنده */}
      <div className="relative w-full sm:max-w-xs">
        <span className="absolute right-3 top-3.5 text-slate-500 text-sm">
          🔍
        </span>
        <input
          type="text"
          placeholder="جستجو در متن نظر یا نام کاربر..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 focus:border-violet-500 rounded-xl pr-9 pl-4 py-2.5 text-xs text-slate-200 focus:outline-none transition-colors"
        />
      </div>

      {/* فیلتر وضعیت نمایش */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <label className="text-xs text-slate-400 whitespace-nowrap">
          وضعیت نظر:
        </label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-slate-950 border border-slate-800 focus:border-violet-500 text-slate-300 text-xs rounded-xl px-4 py-2.5 focus:outline-none transition-colors cursor-pointer"
        >
          <option value="all">همه موارد</option>
          <option value="pending">⏳ در انتظار تایید</option>
          <option value="approved">✅ تایید شده</option>
        </select>
      </div>
    </div>
  );
};

export default CommentFilters;
