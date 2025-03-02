import { datePickerFormatDate } from "@/utils/dateTime";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as s from "./DatePicker.styles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DatePickerProps {
  setIsVisible: (isVisible: boolean) => void;
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  handleDateChange: (date: string) => void;
  triangle: "top" | "right";
}

const DatePicker = ({
  setIsVisible,
  selectedDate,
  setSelectedDate,
  handleDateChange,
  triangle = "right",
}: DatePickerProps) => {
  const [value, onChange] = useState<Value>(null);

  const getTileClassName = (date: Date, selectedDate: Date | null, view: string) => {
    if (view !== "month") return "";

    const isPastDay = (date: Date) => date < new Date(new Date().setHours(0, 0, 0, 0));
    const isSameDay = (date1: Date, date2: Date) => date1.toDateString() === date2.toDateString();

    if (selectedDate && isSameDay(date, selectedDate)) return "active";
    if (isPastDay(date)) return "past-day";

    return "";
  };

  useEffect(() => {
    if (value instanceof Date) {
      setIsVisible(false);
      setSelectedDate(value);
      handleDateChange(datePickerFormatDate(value, true));
    }
  }, [value]);

  return (
    <div css={s.layoutStyle}>
      <div css={s.containerStyle}>
        {triangle === "top" && <div css={s.triangleTopStyle} />}
        <Calendar
          css={s.calendarStyle}
          onChange={onChange}
          activeStartDate={selectedDate || new Date()}
          value={value}
          locale="ko-KR"
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => date.getDate().toString()}
          showNeighboringMonth={false}
          tileClassName={({ date, view }) => {
            return getTileClassName(date, selectedDate, view);
          }}
          onActiveStartDateChange={({ activeStartDate }) => {
            activeStartDate && setSelectedDate(activeStartDate);
          }}
        />
      </div>
      {triangle === "right" && <div css={s.triangleRightStyle} />}
    </div>
  );
};

export default DatePicker;
