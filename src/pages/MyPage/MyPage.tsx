import { PATH } from "@/constants/path";
import * as s from "@/pages/MyPage/MyPage.styles";
import CareerList from "@/pages/MyPage/components/CareerList/CareerList";
import ProfileBox from "@/pages/MyPage/components/ProfileBox/ProfileBox";
import RecommendedProfiles from "@/pages/MyPage/components/RecommendedProfiles/RecommendedProfiles";
import { useFetchUserDetail } from "@/pages/MyPage/hooks/useFetchUserDetail";
import { useParams } from "react-router-dom";

const MyPage = () => {
  const { userId: paramUserId } = useParams();
  const currentUserId = Number(localStorage.getItem("userId"));
  const userId = paramUserId ? Number(paramUserId) : currentUserId;

  const { data } = useFetchUserDetail(userId);

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
