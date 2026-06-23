import React from "react";

const CourseRow = React.memo(({ course, onEdit, onDelete }) => {
  return (
    <tr className="hover:bg-slate-800/20 border-b border-slate-800/60 transition-colors text-slate-300">
      <td className="p-4 font-medium text-white">{course.title}</td>
      <td className="p-4 text-cyan-400">{course.category}</td>
      <td className="p-4">{course.price} تومان</td>
      <td className="p-4 text-center">
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
  );
});

CourseRow.displayName = "CourseRow";
export default CourseRow;
