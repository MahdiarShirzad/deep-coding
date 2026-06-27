import React from "react";

const CourseRow = React.memo(({ course, onEdit, onDelete }) => {
  return (
    <>
      {/* MOBILE & TABLET MODE (Card View) */}
      <tr className="md:hidden block mb-4 bg-slate-900/60 border border-slate-800 rounded-xl">
        <td colSpan={5} className="block p-4">
          <div className="flex gap-4 items-center">
            <img
              src={course?.img}
              alt={course?.name}
              className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium truncate">{course.name}</h3>
              <p className="text-cyan-400 text-sm">{course.category}</p>
              <p className="text-slate-300 text-sm mt-1">
                {course.price} تومان
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => onEdit(course)}
                className="text-slate-400 hover:text-violet-400 transition-colors"
                title="ویرایش"
              >
                ✏️
              </button>

              <button
                onClick={() => onDelete(course.id)}
                className="text-slate-400 hover:text-rose-400 transition-colors"
                title="حذف"
              >
                🗑️
              </button>
            </div>
          </div>
        </td>
      </tr>

      {/* DESKTOP MODE (Table Row View) */}
      <tr className="hidden md:table-row border-b border-slate-800/60 hover:bg-slate-800/20 text-slate-300 transition-colors">
        <td className="p-3">
          <img
            className="w-20 h-14 object-cover rounded-lg"
            src={course?.img}
            alt={course?.name}
          />
        </td>

        <td className="p-3 font-medium text-white">{course.name}</td>

        <td className="p-3 text-cyan-400">{course.category}</td>

        <td className="p-3 whitespace-nowrap">{course.price} تومان</td>

        <td className="p-3">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => onEdit(course)}
              className="text-slate-400 hover:text-violet-400 transition-colors"
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>

            <button
              onClick={() => onDelete(course.id)}
              className="text-slate-400 hover:text-rose-400 transition-colors"
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
});

export default CourseRow;
