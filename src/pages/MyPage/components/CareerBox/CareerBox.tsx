import { RotateLogoIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/pages/MyPage/components/CareerBox/CareerBox.styles";

interface CareerBoxProps {
  title: string;
  period: string;
  descriptions?: string[];
}

const CareerBox = ({ title, period, descriptions }: CareerBoxProps) => {
  return (
    <li>
      <section css={s.wrapperStyle}>
        <div css={s.layoutStyle}>
          <div css={s.titleLayoutStyle}>
            <RotateLogoIcon width={15} height={13} css={{ flexShrink: "0" }} />
            <h1 css={s.titleStyle}>{title}&nbsp;&nbsp;&nbsp;·</h1>
          </div>
          <p css={s.periodStyle}>{period}</p>
        </div>
        <Divider />
        <ul css={s.listLayoutStyle}>
          {descriptions?.map((item, index) => (
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
