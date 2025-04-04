import { CloseCircleIcon, EditBlueIcon, RotateLogoIcon } from "@/assets/svg";
import { Divider } from "@/components";
import { deleteStyle } from "@/components/TagChip/TagChip.styles";
import * as s from "@/pages/UserSettingPage/components/CareerBoxChip/CareerBoxChip.styles";
import { useNavigate } from "react-router-dom";

interface CareerBoxProps {
  id: number;
  title: string;
  startDate: number[];
  endDate: number[];
  contentList?: string[];
  onDelete: (id: number) => void;
}

const CareerBoxChip = ({ id, onDelete, ...career }: CareerBoxProps) => {
  const navigate = useNavigate();

  const startDate = career.startDate.slice(0, 3).join(".");
  const endDate = career.endDate !== null ? career.endDate.slice(0, 3).join(".") : "현재";
  const period = `${startDate} ~ ${endDate}`;

  return (
    <li>
      <section css={s.wrapperStyle}>
        <button type="button" css={deleteStyle} onClick={() => onDelete(id)}>
          <CloseCircleIcon width={26} />
        </button>
        <header css={s.layoutStyle}>
          <div css={s.titleBoxStyle}>
            <div css={s.titleLayoutStyle}>
              <RotateLogoIcon width={15} height={13} css={{ flexShrink: "0" }} />
              <h1 css={s.titleStyle}>{career.title}&nbsp;&nbsp;&nbsp;·</h1>
            </div>
            <p css={s.periodStyle}>{period}</p>
          </div>
          <EditBlueIcon
            width={19}
            css={s.editIconStyle}
            onClick={() => navigate(`/mypage/setting-edit-career/${id}`)}
          />
        </header>
        <Divider />
        <ul css={s.listLayoutStyle}>
          {career?.contentList?.map((item, index) => (
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
