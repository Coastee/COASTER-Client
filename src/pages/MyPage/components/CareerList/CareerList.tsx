import { EditIcon } from "@/assets/svg";
import { Button } from "@/components";
import CareerBox from "@/pages/MyPage/components/CareerBox/CareerBox";
import * as s from "@/pages/MyPage/components/CareerList/CareerList.styles";
import { careerData } from "@/pages/MyPage/constants/dummy";

const CareerList = () => {
  return (
    <div>
      <div css={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 css={s.titleStyle}>나의 경력</h1>
        <Button variant="secondary" css={{ border: "none", padding: "0.6rem 1rem" }}>
          <EditIcon width={16} height={15} />
          경력 편집하기
        </Button>
      </div>
      <ul css={s.listStyle}>
        {careerData.map((career, index) => (
          <CareerBox key={`${index}-${career.title}`} {...career} />
        ))}
      </ul>
    </div>
  );
};

export default CareerList;
