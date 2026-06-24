import React, { useEffect, useRef, useState } from "react";

const CourseSectionCollapse = ({ sections }) => {
  return sections?.map((item, index) => (
    <Unit item={item} key={item._id || index} />
  ));
};

const Unit = ({ item }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = open
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [open]);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      {/* هدر آکاردئون */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-slate-100 transition-colors duration-200 focus:outline-none"
      >
        <h4 className="text-base sm:text-lg font-semibold text-slate-800 text-right">
          {item?.title}
        </h4>
        <div
          className={`transform transition-transform duration-300 text-slate-500 shrink-0 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* محتوای آکاردئون */}
      <div
        ref={contentRef}
        className="h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white"
      >
        <ul className="px-5 py-2 divide-y divide-slate-100">
          {item?.lessons?.map((lesson, index) => (
            <li
              key={lesson._id || index}
              className="py-3 flex items-center justify-between text-slate-600 hover:text-violet-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  {index + 1}. {lesson.title}
                </span>
              </div>
              <span className="text-sm text-slate-400 font-medium shrink-0">
                {lesson.duration} دقیقه
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseSectionCollapse;
