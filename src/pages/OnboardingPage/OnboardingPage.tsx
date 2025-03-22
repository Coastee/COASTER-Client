import logo1Img from "@/assets/img/logo1Img.png";
import logo2Img from "@/assets/img/logo2Img.png";
import { GoogleIcon, KakaoIcon, Logo4WhiteIcon, NaverIcon } from "@/assets/svg";
import AuthContainer from "@/components/AuthContainer/AuthContainer";
import * as s from "@/pages/OnboardingPage/OnboardingPage.styles";
import { KAKAO_URL, NAVER_URL } from "@/pages/OnboardingPage/constants";
import { logo1Style, logo2Style, wrapperStyle } from "@/pages/SignupPage/SignupPage.styles";

const OnBoardingPage = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_URL;
  };

  const handleNaverLogin = () => {
    window.location.href = NAVER_URL;
  };

  return (
    <div css={wrapperStyle}>
      <img src={logo1Img} alt="로고1" css={logo1Style} />
      <img src={logo2Img} alt="로고2" css={logo2Style} />
      <AuthContainer
        title="시작하기"
        desc={
          <>
            Welcome to <Logo4WhiteIcon width={90} height={30} />
          </>
        }
      >
        <div css={s.sideStyle}>
          <button type="button" aria-label="Google로 시작하기" css={[s.commonBtnStyle, s.googleBtnStyle]}>
            <GoogleIcon width={22} height={22} />
            Google로 시작하기
          </button>
          <button
            type="button"
            aria-label="카카오로 시작하기"
            css={[s.commonBtnStyle, s.kakaoBtnStyle]}
            onClick={handleKakaoLogin}
          >
            <KakaoIcon width={21} height={19} />
            카카오로 시작하기
          </button>
          <button
            type="button"
            aria-label="네이버로 시작하기"
            css={[s.commonBtnStyle, s.naverBtnStyle]}
            onClick={handleNaverLogin}
          >
            <NaverIcon width={19} height={18} />
            네이버로 시작하기
          </button>
        </div>
      </AuthContainer>
    </div>
  );
};

export default OnBoardingPage;
