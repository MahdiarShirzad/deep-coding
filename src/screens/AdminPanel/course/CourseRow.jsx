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
              ✏️
            </button>

            <button
              onClick={() => onDelete(course.id)}
              className="text-slate-400 hover:text-rose-400 transition-colors"
            >
              🗑️
            </button>
          </div>
        </td>
      </tr>
    </>
  );
});

export default CourseRow;
