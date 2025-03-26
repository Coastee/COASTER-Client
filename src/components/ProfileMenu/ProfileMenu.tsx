import { VerifyIcon } from "@/assets/svg";
import UserBox from "@/components/UserBox/UserBox";

import * as s from "@/components/ProfileMenu/ProfileMenu.styles";
import { PATH } from "@/constants/path";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ ...info }) => {
  const [isDMSelected, setIsDMSelected] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${PATH.MYPAGE}/${info.id}`);
  };

  const handleDM = async () => {
    setIsDMSelected(true);

    if (info.dmRoomId === null) {
      console.log("디엠방이 없습니다.");
    } else {
      console.log("디엠방이 있습니다.");
    }
  };
  return (
    <article css={s.wrapperStyle}>
      <div css={s.layoutStyle}>
        <UserBox name={info.name} size="medium" />
        <div css={s.infoLayoutStyle}>
          <h1 css={s.nameStyle}>{info.name}</h1>
          <div css={s.infoStyle}>
            <h2>{info.expYears}</h2>
            <p>년차</p>
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
      <div css={s.buttonLayoutStyle}>
        <button type="button" onClick={handleDM}>
          DM 보내기
        </button>
        <button type="button" onClick={handleNavigate}>
          상세 프로필 보러가기
        </button>
      </div>
    </article>
  );
};

export default ProfileMenu;
