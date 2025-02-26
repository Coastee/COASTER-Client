import { PlusIcon } from "@/assets/svg";
import { Button } from "@/components";
import { careerData } from "@/pages/MyPage/constants/dummy";
import CareerBoxChip from "@/pages/UserSettingPage/components/CareerBoxChip/CareerBoxChip";
import * as s from "@/pages/UserSettingPage/components/CareerSettingList/CareerSettingList.styles";
import { useNavigate } from "react-router-dom";

const CareerSettingList = () => {
  const navigate = useNavigate();

  return (
    <div css={s.pageStyle}>
      <div css={s.fixedLayoutStyle}>
        <h1 css={s.titleStyle}>경력 편집</h1>
        <button
          type="button"
          css={s.plusButtonStyle}
          onClick={() => {
            navigate("/mypage/setting-add-career");
          }}
        >
          <PlusIcon width={20} height={20} />
        </button>
      </div>
      <ul css={s.listStyle}>
        {careerData.map((career, index) => (
          <CareerBoxChip key={`${career.title}-${index}`} {...career} css={{ position: "relative" }} />
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

export default CareerSettingList;
