import CareerBox from "@/pages/MyPage/components/CareerBox/CareerBox";
import * as s from "@/pages/MyPage/components/CareerList/CareerList.styles";
import { careerData } from "@/pages/MyPage/constants/dummy";

const CareerList = () => {
  return (
    <div>
      <h1 css={s.titleStyle}>나의 경력</h1>
      <ul css={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
        {careerData.map((career, index) => (
          <CareerBox key={`${index}-${career.title}`} {...career} />
        ))}
      </ul>
    </div>
  );
};

export default CareerList;
