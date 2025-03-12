import { DmIcon, EditIcon } from "@/assets/svg";
import { Button } from "@/components";
import * as s from "@/pages/MyPage/components/ProfileBox/ProfileBox.styles";
import { DUMMY_PROFILE } from "@/pages/MyPage/constants/dummy";
import type { UserDetailTypes } from "@/pages/MyPage/types";
import { useNavigate } from "react-router-dom";

const ProfileBox = (data: UserDetailTypes) => {
  const navigate = useNavigate();
  const userData = data.result;

  return (
    <section css={s.wrapperStyle}>
      <img src={DUMMY_PROFILE.backgroundImg} alt="프로필 배경" css={s.backgroundImgStyle} />
      <button type="button" css={s.editBtnStyle} onClick={() => navigate("/mypage/setting-profile")}>
        <EditIcon width={16} height={15} />
        편집하기
      </button>
      <img src={userData?.profileImage} alt="프로필" css={s.profileImgStyle} />
      <div css={s.layoutStyle}>
        <div css={s.rowStyle}>
          <h1 css={s.nameStyle}>{userData?.userIntro?.headline}</h1>
          <Button css={{ padding: "0.6rem 1rem", fontSize: "1.4rem" }}>
            <DmIcon width={12} height={12} css={{ flexShrink: "0" }} />
            DM
          </Button>
          <ul css={s.linkLayoutStyle}>
            {userData?.urlList.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div aria-label={`route to ${url}`} css={s.linkStyle} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p css={s.oneLineIntroStyle}>{userData?.userIntro?.job}</p>
        <p css={s.introStyle}>{userData?.bio}</p>
      </div>
    </section>
  );
};

export default ProfileBox;
