import { VerifyIcon } from "@/assets/svg";
import UserBox from "@/components/UserBox/UserBox";

import * as s from "@/components/ProfileMenu/ProfileMenu.styles";

const ProfileMenu = ({ ...info }) => {
  return (
    <article css={s.wrapperStyle}>
      <div css={s.layoutStyle}>
        <UserBox name={info.name} size="medium" />
        <div css={s.infoLayoutStyle}>
          <h1 css={s.nameStyle}>{info.name}</h1>
          <div css={s.infoStyle}>
            <h2>{info.expYears}</h2>
            <h2>{info.job}</h2>
          </div>
        </div>
      </div>
      {info.linkedInVerify && (
        <div css={s.verifyLayoutStyle}>
          <VerifyIcon width={20} height={20} />
          LinkedIn 인증
        </div>
      )}
      <div>
        <button type="button">DM 보내기</button>
        <button type="button">상세 프로필 보러가기</button>
        <button type="button">강퇴하기</button>
      </div>
    </article>
  );
};

export default ProfileMenu;
