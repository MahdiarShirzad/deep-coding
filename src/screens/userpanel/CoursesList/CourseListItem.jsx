import React, { useState, useRef } from "react";

// Helper: safely extract string ID from mongoose _id (handles both { $oid: "..." } and plain string)
const getId = (id) => (id?.$oid ?? id ?? "").toString();

const CourseListItem = ({ course }) => {
  const [openSections, setOpenSections] = useState({});
  const [currentLesson, setCurrentLesson] = useState(null);
  const playerRef = useRef(null);

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleLessonPlay = (lesson) => {
    setCurrentLesson(lesson);
    // Scroll the player into view after state update
    setTimeout(
      () =>
        playerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      50,
    );
  };

  const handleClosePlayer = () => {
    setCurrentLesson(null);
  };

  return (
    <div className="bg-[#131a2a] border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl transition-all hover:border-slate-700">
      {/* ─── Course header ─── */}
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

      {/* ─── Inline video player ─── */}
      {currentLesson && (
        <div ref={playerRef} className="bg-black border-b border-slate-800/60">
          {/* Player title bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-2 h-2 rounded-full bg-violet-400 shrink-0 animate-pulse" />
              <span className="text-sm font-medium text-slate-200 truncate">
                {currentLesson.title}
              </span>
            </div>
            <button
              onClick={handleClosePlayer}
              className="text-slate-500 hover:text-slate-200 transition-colors shrink-0 ml-3"
              aria-label="بستن پخش‌کننده"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* The actual video element — key forces remount on lesson change */}
          <div className="aspect-video w-full flex items-center justify-center">
            {currentLesson.videoUrl ? (
              <video
                key={getId(currentLesson._id)}
                src={currentLesson.videoUrl}
                controls
                autoPlay
                className="w-full h-full bg-black"
                controlsList="nodownload"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-slate-500">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
                <p className="text-sm">
                  ویدیوی این جلسه هنوز بارگذاری نشده است
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Sections / lesson list ─── */}
      <div className="p-4 md:p-5 space-y-3 bg-slate-950/40">
        {course.sections?.map((section) => {
          // FIX: extract a plain string key, not the raw _id object
          const sectionId = getId(section._id);
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
                  <div className="w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
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
                className={`transition-all duration-300 ease-in-out border-slate-800/40 ${
                  isSectionOpen
                    ? "max-h-[1000px] opacity-100 border-t"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="p-2 space-y-1 bg-slate-950/20">
                  {section.lessons?.map((lesson) => {
                    const lessonId = getId(lesson._id);
                    const isPlaying =
                      currentLesson && getId(currentLesson._id) === lessonId;

                    return (
                      <div
                        key={lessonId}
                        onClick={() => handleLessonPlay(lesson)}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer group transition-colors ${
                          isPlaying
                            ? "bg-violet-500/10 border border-violet-500/20"
                            : "hover:bg-slate-800/60"
                        }`}
                      >
                        <div className="flex items-center gap-3 w-3/4">
                          {/* Play / pause icon */}
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                              isPlaying
                                ? "bg-violet-500 text-white"
                                : "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950"
                            }`}
                          >
                            {isPlaying ? (
                              /* Pause icon when this lesson is active */
                              <svg
                                className="w-3.5 h-3.5 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                              </svg>
                            ) : (
                              /* Play icon */
                              <svg
                                className="w-4 h-4 fill-current ml-0.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </div>

                          <p
                            className={`text-xs md:text-sm truncate transition-colors ${
                              isPlaying
                                ? "text-violet-300"
                                : "text-slate-300 group-hover:text-white"
                            }`}
                          >
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
                    );
                  })}
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
