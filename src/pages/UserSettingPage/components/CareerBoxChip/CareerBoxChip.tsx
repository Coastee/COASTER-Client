import { CloseCircleIcon, EditBlueIcon, RotateLogoIcon } from "@/assets/svg";
import { Divider } from "@/components";
import { deleteStyle } from "@/components/TagChip/TagChip.styles";
import * as s from "@/pages/UserSettingPage/components/CareerBoxChip/CareerBoxChip.styles";
import { useNavigate } from "react-router-dom";

interface CareerBoxProps {
  title: string;
  period: string;
  descriptions?: string[];
}

const CareerBoxChip = ({ title, period, descriptions }: CareerBoxProps) => {
  const navigate = useNavigate();

  return (
    <li>
      <section css={s.wrapperStyle}>
        <button type="button" css={deleteStyle} onClick={() => {}}>
          <CloseCircleIcon width={18} />
        </button>
        <header css={s.layoutStyle}>
          <div css={{ display: "flex", gap: "1.3rem" }}>
            <div css={s.titleLayoutStyle}>
              <RotateLogoIcon width={15} height={13} css={{ flexShrink: "0" }} />
              <h1 css={s.titleStyle}>{title}&nbsp;&nbsp;&nbsp;·</h1>
            </div>
            <p css={s.periodStyle}>{period}</p>
          </div>
          <EditBlueIcon width={19} css={s.editIconStyle} onClick={() => navigate("/mypage/setting-edit-career")} />
        </header>
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
