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
  const [activeStartDate, setActiveStartDate] = useState<Date>(selectedDate || new Date());

  const getTileClassName = (date: Date, selectedDate: Date | null) => {
    const isPastDay = (date: Date) => date < new Date(new Date().setHours(0, 0, 0, 0));
    const isSameDay = (date1: Date, date2: Date) => date1.toDateString() === date2.toDateString();

    if (selectedDate && isSameDay(date, selectedDate)) return "active"; // 선택된 날짜에만 "active" 클래스 추가
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

  useEffect(() => {
    if (selectedDate) {
      setActiveStartDate(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div css={s.layoutStyle}>
      <div css={s.containerStyle}>
        {triangle === "top" && <div css={s.triangleTopStyle} />}
        <Calendar
          css={s.calendarStyle}
          onChange={onChange}
          activeStartDate={activeStartDate}
          value={value}
          locale="ko-KR"
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => date.getDate().toString()}
          showNeighboringMonth={false}
          tileClassName={({ date, view }) => {
            if (view !== "month") return "";
            return getTileClassName(date, selectedDate);
          }}
          onActiveStartDateChange={({ activeStartDate }) => {
            activeStartDate && setActiveStartDate(activeStartDate);
          }}
        />
      </div>
      {triangle === "right" && <div css={s.triangleRightStyle} />}
    </div>
  );
};

export default DatePicker;
