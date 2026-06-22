import React, { useState } from "react";

const CourseListItem = ({ course }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleLessonPlay = (lesson) => {
    console.log("پخش ویدیو:", lesson.videoUrl, "عنوان:", lesson.title);
  };

  return (
    <div className="bg-[#131a2a] border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl transition-all hover:border-slate-700">
      <div className="p-4 md:p-6 flex flex-col sm:flex-row items-center gap-5 bg-gradient-to-br from-slate-900 to-slate-850 border-b border-slate-800/50">
        <img
          className="w-full sm:w-[160px] h-[100px] object-cover rounded-xl shadow-md border border-slate-800"
          src={course.img}
          alt={course.name}
        />
        <div className="w-full text-center sm:text-right space-y-2">
          <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-medium">
            {course.category}
          </span>
          <h2 className="text-xl font-bold text-white mt-1">{course.name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-slate-400 mt-2">
            <span className="flex items-center gap-1">
              سطح: <strong className="text-slate-200">{course.level}</strong>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-1">
              کل آموزش:{" "}
              <strong className="text-slate-200">{course.time} ساعت</strong>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-1">
              تعداد بخش‌ها:{" "}
              <strong className="text-slate-200">
                {course.sections?.length || 0}
              </strong>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-5 space-y-3 bg-slate-950/40">
        {course.sections?.map((section) => {
          const sectionId = section._id.$oid;
          const isSectionOpen = !!openSections[sectionId];

          return (
            <div
              key={sectionId}
              className="border border-slate-800/60 rounded-xl bg-slate-900/60 overflow-hidden"
            >
              <div
                onClick={() => toggleSection(sectionId)}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-800/40 select-none transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"></div>
                  <h3 className="text-sm md:text-base font-semibold text-slate-200">
                    {section.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 bg-slate-950 px-2 py-0.5 rounded">
                    {section.lessons?.length || 0} جلسه
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      isSectionOpen ? "rotate-180 text-violet-400" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out border-slate-800/40
                  ${isSectionOpen ? "max-h-[1000px] opacity-100 border-t" : "max-h-0 opacity-0 pointer-events-none"}`}
              >
                <div className="p-2 space-y-1 bg-slate-950/20">
                  {section.lessons?.map((lesson) => (
                    <div
                      key={lesson._id.$oid}
                      onClick={() => handleLessonPlay(lesson)}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/60 cursor-pointer group transition-colors"
                    >
                      {/* بخش راست: وضعیت پلی و عنوان درس */}
                      <div className="flex items-center gap-3 w-3/4">
                        <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                          <svg
                            className="w-4 h-4 fill-current ml-0.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-xs md:text-sm text-slate-300 group-hover:text-white truncate transition-colors">
                          {lesson.title}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        {lesson.isFree && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">
                            رایگان
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-500 group-hover:text-slate-400 flex items-center gap-1">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {lesson.duration} دقیقه
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseListItem;
