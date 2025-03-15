import { DmIcon, EditIcon } from "@/assets/svg";
import { Button } from "@/components";
import { PATH } from "@/constants/path";
import * as s from "@/pages/MyPage/components/ProfileBox/ProfileBox.styles";
import { DUMMY_PROFILE } from "@/pages/MyPage/constants/dummy";
import { IMAGE_PLACEHOLDER } from "@/pages/MyPage/constants/image";
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
      <img
        src={userData?.profileImage ?? IMAGE_PLACEHOLDER}
        alt="프로필"
        css={s.profileImgStyle}
        onError={(e) => {
          e.currentTarget.src = IMAGE_PLACEHOLDER;
        }}
      />
      <div css={s.layoutStyle}>
        <div css={s.rowStyle}>
          <h1 css={s.nameStyle}>{userData?.nickname}</h1>
          <div css={s.jobLayoutStyle}>
            <p>{userData?.userIntro?.job}</p>
            <p>·</p>
            <p>{userData?.userIntro?.expYears}년차</p>
          </div>
          <Button css={{ padding: "0.6rem 1rem", fontSize: "1.4rem" }} onClick={() => navigate(PATH.DM)}>
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
        <p css={s.oneLineIntroStyle}>{userData?.userIntro?.headline}</p>
        <p css={s.introStyle}>{userData?.bio}</p>
      </div>
    </section>
  );
};

export default ProfileBox;
