import * as s from "@/pages/MyPage/MyPage.styles";
import ProfileBox from "@/pages/MyPage/components/ProfileBox/ProfileBox";
import RecommendedProfiles from "@/pages/MyPage/components/RecommendedProfiles/RecommendedProfiles";

const MyPage = () => {
  return (
    <div css={s.wrapperStyle}>
      <div css={s.layoutStyle}>
        <ProfileBox />
        <RecommendedProfiles />
      </div>
    </div>
  );
};

export default MyPage;
