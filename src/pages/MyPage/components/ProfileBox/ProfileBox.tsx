import { DmIcon, EditIcon } from "@/assets/svg";
import { Button } from "@/components";
import * as s from "@/pages/MyPage/components/ProfileBox/ProfileBox.style";
import { DUMMY_PROFILE } from "@/pages/MyPage/constants/dummy";

const ProfileBox = () => {
  return (
    <section css={s.wrapperStyle}>
      <img src={DUMMY_PROFILE.backgroundImg} alt="프로필 배경" css={s.backgroundImgStyle} />
      <button type="button" css={s.editBtnStyle}>
        <EditIcon width={16} height={15} />
        편집하기
      </button>
      <img src={DUMMY_PROFILE.profileImg} alt="프로필" css={s.profileImgStyle} />
      <div css={s.layoutStyle}>
        <div css={s.rowStyle}>
          <h1 css={s.nameStyle}>{DUMMY_PROFILE.name}</h1>
          <Button css={{ padding: "0.6rem 1rem", fontSize: "1.4rem" }}>
            <DmIcon width={12} height={12} css={{ flexShrink: "0" }} />
            DM
          </Button>
          <ul css={s.linkLayoutStyle}>
            {DUMMY_PROFILE.urls.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div aria-label={`route to ${url}`} css={s.linkStyle} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p css={s.oneLineIntroStyle}>{DUMMY_PROFILE.oneLineIntro}</p>
        <p css={s.introStyle}>{DUMMY_PROFILE.Intro}</p>
      </div>
    </section>
  );
};

export default ProfileBox;
