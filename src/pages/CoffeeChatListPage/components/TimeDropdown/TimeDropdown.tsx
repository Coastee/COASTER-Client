import Dropdown from "@/components/Dropdown/Dropdown";
import {
  AMPM_OPTIONS,
  type DropdownOptionTypes,
  HOUR_OPTIONS,
  MINUTE_OPTIONS,
} from "@/constants/dropdown";
import { useState } from "react";
import * as s from "./TimeDropdown.styles";

interface TimeDropdownProps {
  type: "start" | "end";
  setTime: (value: string) => void;
}

const TimeDropdown = ({ type, setTime }: TimeDropdownProps) => {
  const [timeOptions, setTimeOptions] = useState({
    ampm: AMPM_OPTIONS[1],
    hour: HOUR_OPTIONS[type === "start" ? 0 : 1],
    minute: MINUTE_OPTIONS[0],
  });

  const [dropdownOpen, setDropdownOpen] = useState([false, false, false]);

  const handleDropdownChange = (index: number, value: DropdownOptionTypes) => {
    const updatedOptions = { ...timeOptions };
    if (index === 0) updatedOptions.ampm = value;
    else if (index === 1) updatedOptions.hour = value;
    else if (index === 2) updatedOptions.minute = value;

    setTimeOptions(updatedOptions);
    const newTime = `${updatedOptions.ampm.name}/${updatedOptions.hour.name}/${updatedOptions.minute.name}`;
    setTime(newTime);
    setDropdownOpen((prev) =>
      prev.map((item, i) => (i === index ? false : item))
    );
  };

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) =>
      prev.map((item, i) => (i === index ? !item : false))
    );
  };

  return (
    <div css={s.timeContainerStyle}>
      <div css={s.timeTextLayoutStyle}>
        <button
          type="button"
          css={[s.textStyle, { marginRight: "0.3rem" }]}
          onClick={() => toggleDropdown(0)}
        >
          {timeOptions.ampm.name}{" "}
          <Dropdown
            options={AMPM_OPTIONS}
            setItem={(value) => handleDropdownChange(0, value)}
            dropDownOpen={dropdownOpen[0]}
            setDropdownOpen={() => toggleDropdown(0)}
            css={{
              position: "absolute",
              top: "1.4rem",
              left: "0",
              "& > li": { width: "100%" },
            }}
          />
        </button>
        <button
          type="button"
          css={s.textStyle}
          onClick={() => toggleDropdown(1)}
        >
          {timeOptions.hour.name}{" "}
          <Dropdown
            options={HOUR_OPTIONS}
            setItem={(value) => handleDropdownChange(1, value)}
            dropDownOpen={dropdownOpen[1]}
            setDropdownOpen={() => toggleDropdown(1)}
            css={{
              position: "absolute",
              top: "1.4rem",
              left: "3.8rem",
              "& > li": { width: "100%" },
            }}
          />
        </button>
        <p css={[s.textStyle, { padding: "0" }]}>:</p>
        <button
          type="button"
          css={s.textStyle}
          onClick={() => toggleDropdown(2)}
        >
          {timeOptions.minute.name}
          <Dropdown
            options={MINUTE_OPTIONS}
            setItem={(value) => handleDropdownChange(2, value)}
            dropDownOpen={dropdownOpen[2]}
            setDropdownOpen={() => toggleDropdown(2)}
            css={{
              position: "absolute",
              top: "1.4rem",
              left: "6.4rem",
              "& > li": { width: "100%" },
            }}
          />
        </button>
      </div>
      <p css={s.fromToStyle}>{type === "start" ? "부터" : "까지"}</p>
    </div>
  );
};

export default TimeDropdown;
