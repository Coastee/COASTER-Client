import { CloseCircleIcon, PlusIcon } from "@/assets/svg";
import { Button } from "@/components";
import { deleteStyle } from "@/components/TagChip/TagChip.styles";
import { careerData } from "@/pages/MyPage/constants/dummy";
import CareerBoxChip from "@/pages/UserSettingPage/components/CareerBoxChip/CareerBoxChip";
import * as s from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit.styles";
import { useNavigate } from "react-router-dom";

const CareerEdit = () => {
  const navigate = useNavigate();

  return (
    <div css={s.pageStyle}>
      <div css={s.fixedLayoutStyle}>
        <h1 css={s.titleStyle}>경력 편집</h1>
        <button type="button" css={s.plusButtonStyle} onClick={() => {}}>
          <PlusIcon width={20} height={20} />
        </button>
      </div>
      <ul css={s.listStyle}>
        {careerData.map((career, index) => (
          <li key={`${index}-${career.title}`}>
            <CareerBoxChip {...career} css={{ position: "relative" }} />
            <button type="button" css={deleteStyle}>
              <CloseCircleIcon width={18} />
            </button>
          </li>
        ))}
      </ul>
      <div css={s.buttonLayoutStyle}>
        <Button variant="tertiary" size="medium" onClick={() => navigate("/mypage")}>
          뒤로 가기
        </Button>
      </div>
    </div>
  );
};

export default CareerEdit;
