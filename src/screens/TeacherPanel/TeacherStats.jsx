import React from "react";

const TeacherStats = ({ courses, summary }) => {
  let totalAverage = 0;
  let ratedCoursesCount = 0;

  courses.forEach((course) => {
    if (course?.ratingsAverage > 0) {
      ratedCoursesCount++;
      totalAverage += +course.ratingsAverage;
    }
  });

  const ratingsAverage =
    ratedCoursesCount > 0 ? totalAverage / ratedCoursesCount : 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("fa-IR").format(value || 0) + " تومان";
  };

  const stats = [
    {
      id: 1,
      title: "کل دانشجویان شما",
      value: summary?.totalStudentsEnrolled || 0,
      icon: "👥",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      id: 2,
      title: "دوره‌های فعال",
      value: `${courses?.length} دوره`,
      icon: "📚",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
    },
    {
      id: 3,
      title: "میانگین امتیاز دوره‌ها",
      value: `${ratingsAverage.toFixed(1)} از 5`,
      icon: "⭐",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      id: 4,
      title: "موجودی قابل برداشت",
      value: formatCurrency(summary?.walletBalance),
      icon: "💰",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between"
        >
          <div>
            <p className="text-slate-400 text-xs md:text-sm">{stat.title}</p>
            <p className="text-xl font-bold text-white mt-1">{stat.value}</p>
          </div>
          <div className={`text-2xl ${stat.bg} ${stat.color} p-3 rounded-xl`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherStats;
