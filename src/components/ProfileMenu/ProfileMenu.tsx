import { VerifyIcon } from "@/assets/svg";
import UserBox from "@/components/UserBox/UserBox";

import * as s from "@/components/ProfileMenu/ProfileMenu.styles";
import { PATH } from "@/constants/path";
import { getInitials } from "@/utils/getInitials";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ ...info }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${PATH.MYPAGE}/${info.id}`);
  };

  console.log(info);
  console.log(getInitials(info.nickname));

  return (
    <article css={s.wrapperStyle}>
      <div css={s.layoutStyle}>
        <UserBox name={info.nickname} size="medium" profileImage={info.profileImage} />
        <div css={s.infoLayoutStyle}>
          <h1 css={s.nameStyle}>{info.nickname}</h1>
          <div css={s.infoStyle}>
            <h2>{info.userIntro.expYears}</h2>
            <p>년차</p>
            <h2>{info.userIntro.job}</h2>
          </div>
        </div>
      </div>
      {info.linkedInVerify && (
        <div css={s.verifyLayoutStyle}>
          <VerifyIcon width={20} height={20} />
          LinkedIn 인증
        </div>
      )}
      <div css={s.buttonLayoutStyle}>
        <button type="button">DM 보내기</button>
        <button type="button" onClick={handleNavigate}>
          상세 프로필 보러가기
        </button>
      </div>
    </article>
  );
};

export default ProfileMenu;
