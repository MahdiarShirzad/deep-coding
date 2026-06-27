import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getTeacher,
  getTeachersStudentsCounts,
} from "../../services/apiTeachers";

import TeacherAvatar from "./TeachersAvatar";
import AboutTeacher from "./AboutTeacher";
import TeachersCourse from "./TeachersCourse";

const TeachersInfo = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const { id } = useParams();

  const { data, isPending, isError } = useQuery({
    queryKey: ["teacher", id],
    queryFn: () => getTeacher(id),
  });

  useEffect(() => {
    const fetchStudentsCount = async () => {
      const studentsCount = await getTeachersStudentsCounts(id);

      setStudentsCount(studentsCount);
    };

    fetchStudentsCount();
  }, [id]);

  console.log(studentsCount);

  const selectedTeacher = data?.data?.teacher;
  const socialLinks = selectedTeacher?.teacherInfo?.socialLinks;

  if (isPending)
    return (
      <div className="h-screen flex items-center justify-center font-iransans">
        در حال بارگذاری...
      </div>
    );
  if (isError || !selectedTeacher)
    return (
      <div className="h-screen flex items-center justify-center font-iransans text-red-500">
        مدرس یافت نشد.
      </div>
    );

  return (
    <div
      className="max-w-[1320px] mx-auto px-4 sm:px-8 mt-32 mb-20 font-iransans"
      dir="rtl"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-12">
        <div className="flex-1 space-y-10">
          <div>
            <p className="text-violet-600 text-lg font-black mb-2">مدرس</p>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-800">
              {selectedTeacher?.fullName}
            </h1>
            <p className="mt-4 text-lg text-slate-500 font-light">
              {selectedTeacher?.teacherInfo?.specialty}
            </p>
          </div>

          <div className="flex items-center gap-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-fit">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-slate-500 text-sm sm:text-base">
                تعداد دانشجویان
              </p>
              <p className="text-xl font-extrabold text-slate-800">
                {studentsCount}
              </p>
            </div>
            <div className="w-[1px] h-10 bg-slate-200"></div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-slate-500 text-sm sm:text-base">
                تعداد دوره‌ها
              </p>
              <p className="text-xl font-extrabold text-slate-800">
                {selectedTeacher?.courses?.length ?? 0}
              </p>
            </div>
          </div>

          <AboutTeacher teacher={selectedTeacher} />

          <div className="mt-10">
            <TeachersCourse selectedCourses={selectedTeacher?.courses} />
          </div>
        </div>

        <div className="w-full lg:w-[350px] shrink-0 space-y-6">
          <TeacherAvatar teacher={selectedTeacher} />

          {(socialLinks?.linkedin ||
            socialLinks?.github ||
            socialLinks?.website) && (
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="font-semibold text-slate-800 mb-4">
                راه‌های ارتباطی
              </h3>

              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="font-medium">لینکدین</span>
                </a>
              )}

              {socialLinks?.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-800 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="font-medium">گیت‌هاب</span>
                </a>
              )}

              {socialLinks?.website && (
                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-700 hover:text-violet-600 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="font-medium">وب‌سایت شخصی</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeachersInfo;
