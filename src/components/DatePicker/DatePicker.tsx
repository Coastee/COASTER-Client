import { datePickerFormatDate } from "@/utils/dateTime";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as s from "./DatePicker.styles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DatePickerProps {
  setSelectedDate: (date: string) => void;
}

const DatePicker = ({ setSelectedDate }: DatePickerProps) => {
  const [value, onChange] = useState<Value>(new Date());

  const isPastDay = (date: Date) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  useEffect(() => {
    setSelectedDate(datePickerFormatDate(value as Date));
  }, [value, setSelectedDate]);

  return (
    <div css={s.layoutStyle}>
      <div css={s.containerStyle}>
        <Calendar
          css={s.calendarStyle}
          onChange={onChange}
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
      <div css={s.triangleStyle} />
    </div>
  );
};

export default DatePicker;
