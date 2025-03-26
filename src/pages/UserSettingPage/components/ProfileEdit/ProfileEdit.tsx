import { EditIcon, PlusIcon } from "@/assets/svg";
import { Button, Input, TagChip, Textarea } from "@/components";
import { PATH } from "@/constants/path";
import useImageUpload from "@/hooks/useImageUpload";
import { DUMMY_PROFILE } from "@/pages/MyPage/constants/dummy";
import { useFetchUserDetail } from "@/pages/MyPage/hooks/useFetchUserDetail";
import LinkModal from "@/pages/UserSettingPage/components/LinkModal/LinkModal";

import * as s from "@/pages/UserSettingPage/components/ProfileEdit/ProfileEdit.styles";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import { useEditProfileForm } from "@/pages/UserSettingPage/hooks/useEditProfileForm";
import { usePostUserProfile } from "@/pages/UserSettingPage/hooks/usePostUserProfile";
import { useCloseModal, useOpenModal } from "@/stores/useModal";
import { getProfileDomainIcon } from "@/utils/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();

  const { onImageUpload, file } = useImageUpload({ setImgUrl });

  const closeModal = useCloseModal();
  const openModal = useOpenModal();

  const userId = localStorage.getItem("userId");
  const { data: userData } = useFetchUserDetail(Number(userId));
  const { form, handleInfoChange } = useEditProfileForm(userData);

  const { mutate } = usePostUserProfile();

  const isDisabled = form.nickname === "" || form.bio === "" || form.job === "" || form.headline === "";

  const handleAddLink = (url: string) => {
    const updatedUrls = [...(form.urlList || []), url];
    handleInfoChange({ target: { value: updatedUrls } }, "urlList");

    closeModal();
  };

  const handleRemoveLink = (index: number) => {
    const updatedUrls = form.urlList?.filter((_, i) => i !== index) || [];
    handleInfoChange({ target: { value: updatedUrls } }, "urlList");
  };
  const handleSubmit = () => {
    mutate({
      file,
      data: {
        nickname: form.nickname,
        headline: form.headline,
        job: form.job,
        expYears: form.expYears,
        bio: form.bio,
        urlList: form.urlList,
      },
    });

    navigate(PATH.MYPAGE);
  };

  return (
    <div css={s.pageStyle}>
      <h1>프로필 편집</h1>

      <form css={s.wrapperStyle}>
        <img src={DUMMY_PROFILE.backgroundImg} alt="프로필 배경" css={s.backgroundImgStyle} />
        <label htmlFor="file" css={{ height: 0 }}>
          <img src={imgUrl === "" ? DUMMY_PROFILE.profileImg : imgUrl} alt="기본 프로필" css={s.profileImgStyle} />
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
              <Input
                id="nickname"
                variant="secondary"
                maxLength={MAX_LENGTH.NICKNAME}
                value={form.nickname}
                onChange={(e) => handleInfoChange(e, "nickname")}
              />
            </div>
            <div css={[s.fieldStyle, { minWidth: "19rem" }]}>
              <label css={s.labelStyle}>링크</label>
              <div css={{ display: "flex", gap: "0.8rem" }}>
                {form.urlList?.length < 5 && (
                  <button type="button" css={s.plusBtnStyle} onClick={() => openModal("link")}>
                    <PlusIcon width={14} height={14} />
                  </button>
                )}

                <ul css={{ display: "flex", gap: "0.8rem" }}>
                  {form.urlList?.map((url, index) => (
                    <li key={index}>
                      <TagChip
                        id={index}
                        variant="link"
                        content={getProfileDomainIcon(url)}
                        removeHashtag={() => handleRemoveLink(index)}
                      />
                    </li>
                  ))}
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
                <Input
                  id="career"
                  variant="secondary"
                  maxLength={MAX_LENGTH.CAREER}
                  value={form.job}
                  onChange={(e) => handleInfoChange(e, "job")}
                />
                <div css={{ display: "flex", gap: "0.8rem", height: "4rem" }}>
                  <Input
                    variant="secondary"
                    value={form.expYears}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/[^0-9]/g, "");
                      handleInfoChange({ target: { value: numericValue } }, "expYears");
                    }}
                  />
                  <p css={s.textStyle}>년차</p>
                </div>
              </div>
              <button type="button" css={s.buttonStyle} onClick={() => openModal("certification")}>
                LinkedIn 인증하기
              </button>
            </div>
          </div>
          <div css={s.fieldStyle}>
            <label htmlFor="oneLineIntro" css={s.labelStyle}>
              한 줄 소개
            </label>
            <Input
              id="oneLineIntro"
              variant="secondary"
              maxLength={MAX_LENGTH.ONELINE_INTRO}
              value={form.headline}
              onChange={(e) => handleInfoChange(e, "headline")}
            />
          </div>
          <div css={s.fieldStyle}>
            <label htmlFor="intro" css={s.labelStyle}>
              소개글
            </label>
            <Textarea
              id="intro"
              variant="secondary"
              maxLength={MAX_LENGTH.INTRO}
              value={form.bio}
              onChange={(e) => handleInfoChange(e, "bio")}
            />
          </div>
        </div>
      </form>
      <div css={s.buttonLayout}>
        <Button variant="tertiary" size="medium" onClick={() => navigate(PATH.MYPAGE)}>
          뒤로 가기
        </Button>
        <Button size="medium" onClick={handleSubmit} disabled={isDisabled}>
          편집 완료
        </Button>
      </div>
      <LinkModal onAddLink={handleAddLink} />
    </div>
  );
};

export default ProfileEdit;
