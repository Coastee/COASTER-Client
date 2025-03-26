import { Button } from "@/components";
import { parseDateArray } from "@/utils/dateTime";
import * as s from "./DetailMeta.styles";

interface DetailMetaProps {
  location: string | null;
  details: string | null;
  startDate: number[] | null;
  endDate: number[] | null;
}

const DetailMeta = ({ location, details, startDate, endDate }: DetailMetaProps) => {
  const dateFormat = (dateArray: number[]) => {
    const parsed = parseDateArray(dateArray);

    const basicDate = `${parsed.year}. ${parsed.month}. ${parsed.day} (${parsed.dayOfWeek})`;

    const time = `${parsed.meridiem} ${parsed.hour} : ${String(parsed.minute).padStart(2, "0")}`;

    return { basicDate, time };
  };

  return (
    <>
      <div css={[s.infoStyle, { paddingBottom: "0.8rem" }]}>
        <Button variant="primary" size="medium" aria-hidden="true" css={s.noHoverStyle}>
          진행 장소
        </Button>
        <div css={s.textStyle(!!details)}>
          <p>{location}</p>
          {details && <div css={s.circleStyle} />}
          <p>{details}</p>
        </div>
      </div>

      <div css={[s.infoStyle, { paddingBottom: "2.5rem" }]}>
        <Button variant="primary" size="medium" aria-hidden="true" css={s.noHoverStyle}>
          진행 날짜
        </Button>
        {startDate && endDate && (
          <div css={s.textStyle()}>
            <p> {dateFormat(startDate).basicDate}</p>
            <div css={s.circleStyle} />
            <p>{`${dateFormat(startDate).time} ~ ${dateFormat(endDate).time}`}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailMeta;
