import { RotateLogoIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/pages/MyPage/components/CareerBox/CareerBox.styles";
import { formatDateRange } from "@/utils/dateTime";

interface CareerBoxProps {
  id: number;
  title: string;
  startDate: number[];
  endDate: number[] | null;
  contentList?: string[];
}

const CareerBox = ({ ...career }: CareerBoxProps) => {
  return (
    <li key={career.id}>
      <section css={s.wrapperStyle}>
        <div css={s.layoutStyle}>
          <div css={s.titleLayoutStyle}>
            <RotateLogoIcon width={15} height={13} css={{ flexShrink: "0" }} />
            <h1 css={s.titleStyle}>{career.title}&nbsp;&nbsp;&nbsp;·</h1>
          </div>
          <div css={s.periodStyle}>
            {career.startDate ? formatDateRange(career.startDate, career.endDate || career.startDate) : ""}
          </div>
        </div>
        <Divider />
        <ul css={s.listLayoutStyle}>
          {career.contentList?.map((item, index) => (
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
