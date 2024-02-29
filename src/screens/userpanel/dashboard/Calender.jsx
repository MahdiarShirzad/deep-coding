import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="App">
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        locale="fa"
        calendarClassName="custom-calendar"
        colorPrimary="blue" // added this
      />
    </div>
  );
};

export default Calender;
