import React from "react";

const AdminStats = ({ overallStats }) => {
  const formatNumber = (num) => {
    if (num === undefined || num === null) return "۰";
    return num.toLocaleString("fa-IR");
  };

  // console.log(overallStats);

  const stats = [
    {
      id: 1,
      title: "مجموع دانشجویان",
      value: formatNumber(overallStats?.uniqueStudents),
      icon: "👥",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      id: 2,
      title: "درآمد کل ادمین (تومان)",
      value: formatNumber(overallStats?.platformTotalEarnings),
      icon: "💳",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      id: 3,
      title: "کل سفارشات موفق",
      value: formatNumber(overallStats?.totalOrders),
      icon: "📚",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
    {
      id: 4,
      title: "تعداد مدرسین",
      value: formatNumber(overallStats?.uniqueTeachers),
      icon: "👨‍🏫",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl hover:border-slate-700 transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${stat.bg} ${stat.color} border ${stat.border}`}
            >
              {stat.icon}
            </div>
          </div>
          <h4 className="text-xs text-slate-400 mb-1">{stat.title}</h4>
          <p className="text-xl font-black text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminStats;
