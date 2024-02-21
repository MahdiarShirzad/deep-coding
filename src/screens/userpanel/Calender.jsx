import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = () => {
  const curDate = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 280;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(curDate);

  const handleDateChange = (date) => {
    selectedDate(date);
  };

  return (
    <div
      className={` ${
        !isScrolled ? "" : "fixed top-20 left-[98px]"
      } rounded-lg bg-white text-black w-[350px] shadow-md shadow-gray-100 z-[300] transition-none`}
    >
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        shouldHighlightWeekends
      />
    </div>
  );
};

export default Calender;
