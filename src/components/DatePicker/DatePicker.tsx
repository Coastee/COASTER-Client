import { datePickerFormatDate } from "@/utils/dateTime";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as s from "./DatePicker.styles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DatePickerProps {
  setIsVisible: (isVisible: boolean) => void;
  setSelectedDate: (date: string) => void;
  triangle: "top" | "right";
}

const DatePicker = ({ setIsVisible, setSelectedDate, triangle = "right" }: DatePickerProps) => {
  const [value, setValue] = useState<Value>(new Date());

  const isPastDay = (date: Date) => date < new Date(new Date().setHours(0, 0, 0, 0));

  const handleDateChange = (date: Value) => {
    if (date instanceof Date) {
      setValue(date);
      setSelectedDate(datePickerFormatDate(date, true));
      setIsVisible(false);
    }
  };

  return (
    <div css={s.layoutStyle}>
      <div css={s.containerStyle}>
        {triangle === "top" && <div css={s.triangleTopStyle} />}
        <Calendar
          css={s.calendarStyle}
          onChange={handleDateChange}
          value={value}
          locale="ko-KR"
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => date.getDate().toString()}
          showNeighboringMonth={false}
          tileClassName={({ date, view }) => (view === "month" && isPastDay(date) ? "past-day" : "")}
        />
      </div>
      {triangle === "right" && <div css={s.triangleRightStyle} />}
    </div>
  );
};

export default DatePicker;
