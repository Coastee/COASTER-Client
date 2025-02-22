import { CloseCircleIcon, RotateLogoIcon } from "@/assets/svg";
import { Divider } from "@/components";
import { deleteStyle } from "@/components/TagChip/TagChip.styles";
import * as s from "@/pages/MyPage/components/CareerBox/CareerBox.styles";

interface CareerBoxProps {
  title: string;
  period: string;
  descriptions?: string[];
}

const CareerBoxChip = ({ title, period, descriptions }: CareerBoxProps) => {
  return (
    <li css={{ marginRight: "1rem" }}>
      <section css={s.wrapperStyle}>
        <button type="button" css={deleteStyle} onClick={() => {}}>
          <CloseCircleIcon width={18} />
        </button>
        <div css={s.layoutStyle}>
          <header css={s.titleLayoutStyle}>
            <RotateLogoIcon width={15} height={13} css={{ flexShrink: "0" }} />
            <h1 css={s.titleStyle}>{title}&nbsp;&nbsp;&nbsp;·</h1>
          </header>
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

export default CareerBoxChip;
