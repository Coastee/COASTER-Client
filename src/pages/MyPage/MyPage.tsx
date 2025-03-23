import { PATH } from "@/constants/path";
import * as s from "@/pages/MyPage/MyPage.styles";
import CareerList from "@/pages/MyPage/components/CareerList/CareerList";
import ProfileBox from "@/pages/MyPage/components/ProfileBox/ProfileBox";
import RecommendedProfiles from "@/pages/MyPage/components/RecommendedProfiles/RecommendedProfiles";
import { useFetchUserDetail } from "@/pages/MyPage/hooks/useFetchUserDetail";
import { useUserId } from "@/stores/useUserId";

const MyPage = () => {
  const userId = useUserId();

  const { data } = useFetchUserDetail(Number(userId));

  if (!userId) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = PATH.ONBOARDING;
  }

  return (
    <div css={s.wrapperStyle}>
      <div css={s.layoutStyle}>
        {data && <ProfileBox {...data} />}
        {data && <CareerList {...data} />}
      </div>
      <RecommendedProfiles />
    </div>
  );
};

export default MyPage;
