import React from "react";

const QuickActions = () => {
  const actions = [
    {
      title: "ایجاد مقاله جدید",
      icon: "✍️",
      bg: "bg-violet-600 hover:bg-violet-500",
    },
    { title: "افزودن کاربر", icon: "👤", bg: "bg-cyan-600 hover:bg-cyan-500" },
    {
      title: "کد تخفیف جدید",
      icon: "🎟️",
      bg: "bg-fuchsia-600 hover:bg-fuchsia-500",
    },
    {
      title: "بررسی تیکت‌ها",
      icon: "🎧",
      bg: "bg-slate-700 hover:bg-slate-600",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl mb-8">
      <h3 className="text-sm font-bold text-white mb-4">⚡ عملیات سریع</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.bg} text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg`}
          >
            <span className="text-base">{action.icon}</span>
            {action.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
