import * as s from "@components/TimeChip/TimeChip.styles";

interface TimeChipProps {
  time: string;
  size?: "medium" | "large";
}

const TimeChip = ({ time, size = "medium" }: TimeChipProps) => {
  return <span css={s.timeWrapperStyle(size)}>{time}</span>;
};

export default TimeChip;
