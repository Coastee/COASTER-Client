import { RotateLogoIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/pages/MyPage/components/CareerBox/CareerBox.styles";
import { formatDateRange } from "@/utils/dateTime";

interface CareerBoxProps {
  id: number;
  title: string;
  startDate: number[];
  endDate: number[];
  contentList?: string[];
}

const CareerBox = ({ id, title, startDate, endDate, contentList }: CareerBoxProps) => {
  return (
    <li key={id}>
      <section css={s.wrapperStyle}>
        <div css={s.layoutStyle}>
          <div css={s.titleLayoutStyle}>
            <RotateLogoIcon width={15} height={13} css={{ flexShrink: "0" }} />
            <h1 css={s.titleStyle}>{title}&nbsp;&nbsp;&nbsp;·</h1>
          </div>
          <div css={s.periodStyle}>
            {endDate ? `${formatDateRange(startDate, endDate)}` : formatDateRange(startDate, startDate)}
          </div>
        </div>
        <Divider />
        <ul css={s.listLayoutStyle}>
          {contentList?.map((item, index) => (
            <li key={`${index}-${item}`} css={s.itemStyle}>
              ·&nbsp;&nbsp;{item}
            </li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default CareerBox;
