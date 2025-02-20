import { ArrowRightIcon, FlagSquareIcon, RotateLogoIcon } from "@/assets/svg";
import type { ScheduleBlockProps } from "@/pages/HomePage/types/ScheduleTypes";
import { simpleFormatDate } from "@/utils/dateTime";
import * as s from "./ScheduleBlock.styles";

const ScheduleBlock = ({
  id,
  title,
  location,
  locationDetail,
  date,
  startTime,
  endTime,
}: ScheduleBlockProps) => {
  const { simpleDate, dayOfWeek } = simpleFormatDate(new Date(date));

  return (
    <div css={s.layoutStyle}>
      <header css={s.headerStyle}>
        <h1>{simpleDate}</h1>
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
              <h2>{title}</h2>
              <ArrowRightIcon width={6} height={12} />
            </div>
          </div>

          <div css={[s.infoStyle, { paddingBottom: "0.8rem" }]}>
            <FlagSquareIcon width={26} height={26} aria-hidden="true" />
            <div css={s.textStyle}>
              <p>{location}</p>
              <div css={s.circleStyle} />
              <p>{locationDetail}</p>
            </div>
          </div>

          <div css={[s.infoStyle, { paddingBottom: "2.5rem" }]}>
            <FlagSquareIcon width={26} height={26} aria-hidden="true" />
            <div css={s.textStyle}>
              <p>{date}</p>
              <div css={s.circleStyle} />
              <p>
                {startTime} ~ {endTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBlock;
