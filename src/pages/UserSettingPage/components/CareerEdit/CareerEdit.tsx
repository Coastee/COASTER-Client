import { PlusIcon } from "@/assets/svg";
import { Button } from "@/components";
import CareerBox from "@/pages/MyPage/components/CareerBox/CareerBox";
import { careerData } from "@/pages/MyPage/constants/dummy";
import * as s from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit.styles";

const CareerEdit = () => {
  return (
    <div css={s.pageStyle}>
      <div css={s.fixedLayoutStyle}>
        <h1 css={s.titleStyle}>경력 편집</h1>
        <button type="button" css={s.plusButtonStyle}>
          <PlusIcon width={20} height={20} />
        </button>
      </div>
      <ul css={s.listStyle}>
        {careerData.map((career, index) => (
          <CareerBox key={`${index}-${career.title}`} {...career} />
        ))}
      </ul>
      <div css={s.buttonLayoutStyle}>
        <Button variant="tertiary" size="medium">
          뒤로 가기
        </Button>
      </div>
    </div>
  );
};

export default CareerEdit;
