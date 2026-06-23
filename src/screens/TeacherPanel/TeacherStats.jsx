const TeacherStats = ({ coursesCount }) => {
  const stats = [
    {
      id: 1,
      title: "کل دانشجویان شما",
      value: "۱,۲۴۰ نفر",
      icon: "👥",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      id: 2,
      title: "دوره‌های فعال",
      value: `${coursesCount || 0} دوره`,
      icon: "📚",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
    },
    {
      id: 3,
      title: "میانگین امتیاز دوره‌ها",
      value: "۴.۹ از ۵",
      icon: "⭐",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      id: 4,
      title: "درآمد ماه جاری",
      value: "۳۴,۵۰۰,۰۰۰ تومان",
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
