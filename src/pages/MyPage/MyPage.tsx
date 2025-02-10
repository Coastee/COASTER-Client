import * as s from "@/pages/MyPage/MyPage.styles";
import CareerList from "@/pages/MyPage/components/CareerList/CareerList";
import ProfileBox from "@/pages/MyPage/components/ProfileBox/ProfileBox";
import RecommendedProfiles from "@/pages/MyPage/components/RecommendedProfiles/RecommendedProfiles";

const MyPage = () => {
  return (
    <div css={s.wrapperStyle}>
      <div css={s.layoutStyle}>
        <ProfileBox />
        <CareerList />
      </div>
      <RecommendedProfiles />
    </div>
  );
};
export default MyPage;
