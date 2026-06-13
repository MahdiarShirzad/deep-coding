import React from "react";
import scrollToTop from "../../utils/scrollToTop";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
      <button
        type="button"
        className="px-3 py-1 rounded-xl border-lime-950 border-[2px] disabled:opacity-60 text-xl"
        disabled={currentPage <= 1}
        onClick={() => {
          onPageChange(currentPage - 1);
          scrollToTop();
        }}
      >
        قبلی
      </button>

      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={`px-3 py-1 rounded-xl border-lime-950 border-[2px] ${
            page === currentPage ? "bg-gray-800 text-white" : ""
          }`}
          onClick={() => {
            onPageChange(page);
            scrollToTop();
          }}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="px-3 py-1 rounded-xl border-lime-950 border-[2px] disabled:opacity-40 text-xl"
        disabled={currentPage >= totalPages}
        onClick={() => {
          onPageChange(currentPage + 1);
          scrollToTop();
        }}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
