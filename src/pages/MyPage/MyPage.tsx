import { PATH } from "@/constants/path";
import * as s from "@/pages/MyPage/MyPage.styles";
import CareerList from "@/pages/MyPage/components/CareerList/CareerList";
import ProfileBox from "@/pages/MyPage/components/ProfileBox/ProfileBox";
import RecommendedProfiles from "@/pages/MyPage/components/RecommendedProfiles/RecommendedProfiles";
import { useFetchUserDetail } from "@/pages/MyPage/hooks/useFetchUserDetail";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      navigate(PATH.ONBOARDING);
    }
  }, [userId, navigate]);

  if (!userId) return null;

  const { data } = useFetchUserDetail(Number(userId));

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
