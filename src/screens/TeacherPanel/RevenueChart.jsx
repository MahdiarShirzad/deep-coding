import React, { useMemo } from "react";

const RevenueChart = ({ monthlyIncome = [] }) => {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const fullYearData = useMemo(() => {
    const dataMap = persianMonths.map((month) => ({
      month,
      totalIncome: 0,
    }));

    const getPersianMonthName = (year, month) => {
      const date = new Date(year, month - 1, 15);
      return new Intl.DateTimeFormat("fa-IR", { month: "long" }).format(date);
    };

    monthlyIncome.forEach((item) => {
      const pMonth = getPersianMonthName(item.year, item.month);
      const index = dataMap.findIndex((d) => d.month === pMonth);
      if (index !== -1) {
        dataMap[index].totalIncome += item.totalIncome;
      }
    });

    return dataMap;
  }, [monthlyIncome]);

  const maxIncome = Math.max(
    ...fullYearData.map((item) => item.totalIncome),
    1,
  );

  const totalRevenue = monthlyIncome.reduce(
    (acc, curr) => acc + curr.totalIncome,
    0,
  );

  return (
    <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-slate-950/50 backdrop-blur-sm h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
        <div>
          <h3 className="text-base md:text-lg font-bold text-white tracking-wide">
            گزارش عملکرد مالی ماهانه
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            نمودار درآمد دوره‌ها به تفکیک ماه
          </p>
        </div>
        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
          درآمد کل: {new Intl.NumberFormat("fa-IR").format(totalRevenue)} تومان
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
        <div className="flex items-end justify-around gap-2 pt-6 h-72 border-b border-slate-800 pb-2 px-2 min-w-[600px] md:min-w-0">
          {fullYearData.map((data, index) => {
            const heightPercent =
              data.totalIncome > 0
                ? Math.max((data.totalIncome / maxIncome) * 100, 10)
                : 2;

            return (
              <div
                key={index}
                className="flex flex-col items-center flex-1 group relative h-full justify-end"
              >
                {/* Tooltip */}
                <span className="absolute -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-slate-800 border border-slate-700 text-white text-xs px-2 py-1 rounded-lg transition-all duration-200 shadow-md z-10 whitespace-nowrap">
                  {new Intl.NumberFormat("fa-IR").format(data.totalIncome)}{" "}
                  تومان
                </span>

                {/* Bar */}
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full max-w-[32px] rounded-t-md transition-all duration-300 ${
                    data.totalIncome > 0
                      ? "bg-gradient-to-t from-violet-600 via-fuchsia-600 to-fuchsia-500 shadow-lg shadow-violet-600/10 group-hover:shadow-fuchsia-500/20 group-hover:brightness-110"
                      : "bg-slate-800/50 border-t border-slate-700"
                  }`}
                ></div>

                {/* Label */}
                <span
                  className={`text-[11px] mt-3 font-medium transition-colors whitespace-nowrap ${
                    data.totalIncome > 0
                      ? "text-slate-300 group-hover:text-white"
                      : "text-slate-600 group-hover:text-slate-400"
                  }`}
                >
                  {data.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
