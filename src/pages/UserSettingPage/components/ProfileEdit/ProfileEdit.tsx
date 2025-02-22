import { EditIcon, PlusIcon } from "@/assets/svg";
import { Button, Input, TagChip, Textarea } from "@/components";
import useImageUpload from "@/hooks/useImageUpload";
import { DUMMY_PROFILE } from "@/pages/MyPage/constants/dummy";
import * as s from "@/pages/UserSettingPage/components/ProfileEdit/ProfileEdit.styles";
import { useState } from "react";

const ProfileEdit = () => {
  const [imgUrl, setImgUrl] = useState("");

  const { onImageUpload } = useImageUpload({ setImgUrl });

  return (
    <div css={s.pageStyle}>
      <h1>프로필 편집</h1>

      <form css={s.wrapperStyle}>
        <img
          src={DUMMY_PROFILE.backgroundImg}
          alt="프로필 배경"
          css={s.backgroundImgStyle}
        />
        <label htmlFor="file" css={{ height: 0 }}>
          <img
            src={imgUrl === "" ? DUMMY_PROFILE.profileImg : imgUrl}
            alt="기본 프로필"
            css={s.profileImgStyle}
          />
          <div css={s.profileFrameStyle} />
          <EditIcon width={34} height={32} css={s.editIconStyle} />
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={onImageUpload}
            css={{ visibility: "hidden" }}
          />
        </label>
        <div css={s.layoutStyle}>
          <div css={s.boxLayoutStyle}>
            <div css={s.fieldStyle}>
              <label htmlFor="nickname" css={s.labelStyle}>
                닉네임
              </label>
              <Input id="nickname" variant="secondary" maxLength={10} />
            </div>
            <div css={[s.fieldStyle, { minWidth: "19rem" }]}>
              <label htmlFor="nickname" css={s.labelStyle}>
                링크
              </label>
              <div css={{ display: "flex", gap: "0.8rem" }}>
                <button type="button" css={s.plusBtnStyle}>
                  <PlusIcon width={14} height={14} />
                </button>
                <ul>
                  <li id="1">
                    <TagChip
                      id={1}
                      variant="link"
                      removeHashtag={() => {}}
                      content={<PlusIcon width={14} height={14} />}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div css={s.fieldStyle}>
            <label htmlFor="career" css={s.labelStyle}>
              직업 · 연차
            </label>
            <div css={s.boxLayoutStyle}>
              <div css={s.gridLayoutStyle}>
                <Input id="career" variant="secondary" maxLength={20} />
                <div css={{ display: "flex", gap: "0.8rem" }}>
                  <Input id="career" variant="secondary" />
                  <p css={s.textStyle}>년차</p>
                </div>
              </div>
              <button type="button" css={s.buttonStyle}>
                LinkedIn 인증하기
              </button>
            </div>
          </div>
          <div css={s.fieldStyle}>
            <label htmlFor="oneLineIntro" css={s.labelStyle}>
              한 줄 소개
            </label>
            <Input id="oneLineIntro" variant="secondary" maxLength={20} />
          </div>
          <div css={s.fieldStyle}>
            <label htmlFor="intro" css={s.labelStyle}>
              소개글
            </label>
            <Textarea id="intro" variant="secondary" maxLength={60} />
          </div>
        </div>
      </form>
      <div css={s.buttonLayout}>
        <Button variant="tertiary" size="medium">
          뒤로 가기
        </Button>
        <Button size="medium">편집 완료</Button>
      </div>
    </div>
  );
};

export default ProfileEdit;
