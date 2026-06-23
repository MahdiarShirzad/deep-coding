import React from "react";

const RevenueChart = () => {
  // دیتای ماک آپ برای ۱۲ ماه سال (از فروردین تا اسفند)
  const monthlyData = [
    { month: "فروردین", amount: "۲۲M", height: "h-28" },
    { month: "اردیبهشت", amount: "۲۶M", height: "h-32" },
    { month: "خرداد", amount: "۳۰M", height: "h-36" },
    { month: "تیر", amount: "۱۸M", height: "h-24" },
    { month: "مرداد", amount: "۲۴M", height: "h-28" },
    { month: "شهریور", amount: "۳۵M", height: "h-44" },
    { month: "مهر", amount: "۲۸M", height: "h-36" },
    { month: "آبان", amount: "۳۲M", height: "h-40" },
    { month: "آذر", amount: "۴۰M", height: "h-52" },
    { month: "دی", amount: "۳۸M", height: "h-48" },
    { month: "بهمن", amount: "۴۶M", height: "h-56" },
    { month: "اسفند", amount: "۵۲M", height: "h-60" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-slate-950/50 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
        <div>
          <h3 className="text-base md:text-lg font-bold text-white tracking-wide">
            گزارش عملکرد مالی سالانه
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            نمودار فروش دوره‌ها به تفکیک ماه
          </p>
        </div>
        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
          📈 رشد چشمگیر در فصول سرد
        </span>
      </div>

      {/* کانتینر اصلی نمودار با قابلیت اسکرول روی موبایل */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
        <div className="flex items-end justify-between gap-2 pt-6 h-64 border-b border-slate-800 pb-2 px-2 min-w-[600px] md:min-w-0">
          {monthlyData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-1 group relative"
            >
              {/* تولتیپ قیمت هنگام هاور با انیمیشن نرم */}
              <span className="absolute -top-7 opacity-0 group-hover:opacity-100 pointer-events-none bg-slate-800 border border-slate-700 text-white text-[10px] px-2 py-0.5 rounded-lg transition-all duration-200 shadow-md">
                {data.amount}
              </span>

              {/* میله نمودار نئونی */}
              <div
                className={`w-full max-w-[28px] ${data.height} bg-gradient-to-t from-violet-600 via-fuchsia-600 to-fuchsia-500 rounded-t-md group-hover:brightness-110 transition-all duration-300 shadow-lg shadow-violet-600/10 group-hover:shadow-fuchsia-500/20`}
              ></div>

              {/* نام ماه */}
              <span className="text-slate-400 group-hover:text-white text-[11px] mt-3 font-medium transition-colors whitespace-nowrap">
                {data.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
