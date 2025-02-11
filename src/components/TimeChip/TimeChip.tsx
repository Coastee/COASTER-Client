import * as s from "@components/TimeChip/TimeChip.styles";

const TimeChip = ({ time }: { time: string }) => {
  return <span css={s.timeWrapperStyle}>{time}</span>;
};

export default TimeChip;
