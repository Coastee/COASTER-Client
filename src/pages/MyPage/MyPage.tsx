import * as s from "@/pages/MyPage/MyPage.styles";
import CareerBox from "@/pages/MyPage/components/CareerBox/CareerBox";
import ProfileBox from "@/pages/MyPage/components/ProfileBox/ProfileBox";
import RecommendedProfiles from "@/pages/MyPage/components/RecommendedProfiles/RecommendedProfiles";
import { careerData } from "@/pages/MyPage/constants/dummy";

const MyPage = () => {
  return (
    <div css={s.wrapperStyle}>
      <div css={s.layoutStyle}>
        <ProfileBox />
        <RecommendedProfiles />
      </div>
      <div css={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
        {careerData.map((career, index) => (
          <CareerBox key={`${index}-${career}`} {...career} />
        ))}
      </div>
    </div>
  );
};

export default MyPage;
