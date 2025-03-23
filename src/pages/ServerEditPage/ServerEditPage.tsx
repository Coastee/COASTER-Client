import logo1Img from "@/assets/img/logo1Img.png";
import logo2Img from "@/assets/img/logo2Img.png";
import ServerEdit from "@/pages/ServerEditPage/components/ServerEdit/ServerEdit";
import * as s from "@/pages/SignupPage/SignupPage.styles";

const ServerEditPage = () => {
  return (
    <div css={s.wrapperStyle}>
      <img src={logo1Img} alt="로고1" css={s.logo1Style} />
      <img src={logo2Img} alt="로고2" css={s.logo2Style} />
      <ServerEdit />
    </div>
  );
};

export default ServerEditPage;
