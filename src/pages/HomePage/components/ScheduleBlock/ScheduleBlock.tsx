import { ArrowRightIcon, FlagSquareIcon, RotateLogoIcon } from "@/assets/svg";
import type { ScheduleTypes } from "@/pages/HomePage/types/ScheduleTypes";
import { parseDateArray } from "@/utils/dateTime";
import * as s from "./ScheduleBlock.styles";

const ScheduleBlock = (schedule: ScheduleTypes) => {
  const {
    year,
    month,
    day,
    hour: formattedHour,
    minute,
    dayOfWeek,
    meridiem,
  } = parseDateArray(schedule.period.startDate);

  const { hour: formattedEndHour, minute: endMinute, meridiem: endMeridiem } = parseDateArray(schedule.period.endDate);

  return (
    <div css={s.layoutStyle}>
      <header css={s.headerStyle}>
        <h1>
          {month}. {day}
        </h1>
        <p>{dayOfWeek}</p>
        <div css={s.statusStyle} aria-hidden="true">
          진행예정
        </div>
      </header>
      <div css={s.bodyStyle}>
        <div css={s.verticalBoxStyle} aria-hidden="true">
          <RotateLogoIcon width={16} height={18} />
          <div css={s.verticalLineStyle} />
        </div>

        <div css={s.contentStyle}>
          <div css={{ display: "flex", justifyContent: "start" }}>
            <div css={s.titleStyle}>
              <h2>{schedule.title}</h2>
              <ArrowRightIcon width={6} height={12} />
            </div>
          </div>

          <div css={[s.infoStyle, { paddingBottom: "0.8rem" }]}>
            <FlagSquareIcon width={26} height={26} aria-hidden="true" />
            <div css={s.textStyle}>
              <p>{schedule.address.location}</p>
              <div css={s.circleStyle} />
              <p>{schedule.address.details}</p>
            </div>
          </div>

          <div css={[s.infoStyle, { paddingBottom: "2.5rem" }]}>
            <FlagSquareIcon width={26} height={26} aria-hidden="true" />
            <div css={s.textStyle}>
              <p>
                {year}. {month}. {day} ({dayOfWeek})
              </p>
              <div css={s.circleStyle} />
              <p>
                {meridiem} {formattedHour} : {minute.toString().padStart(2, "0")} ~{" "}
                {endMeridiem !== meridiem && `${endMeridiem} `}
                {formattedEndHour} : {endMinute.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBlock;
