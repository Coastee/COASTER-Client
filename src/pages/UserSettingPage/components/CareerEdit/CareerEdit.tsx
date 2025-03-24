import PlusBlueIcon from "@/assets/svg/PlusBlueIcon";
import { Button, CheckBox, Divider, Input } from "@/components";
import { PATH } from "@/constants/path";
import { useFetchUserDetail } from "@/pages/MyPage/hooks/useFetchUserDetail";
import CareerDetailChip from "@/pages/UserSettingPage/components/CareerDetailChip/CareerDetailChip";
import * as s from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit.styles";

import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import { useEditCareerForm } from "@/pages/UserSettingPage/hooks/useEditCareerForm";
import { useUpdateExperience } from "@/pages/UserSettingPage/hooks/useUpdateExperience";

import { formatDateArray } from "@/utils/dateTime";
import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CareerEdit = () => {
  const navigate = useNavigate();
  const { experienceId } = useParams();
  const userId = localStorage.getItem("userId");

  const { data } = useFetchUserDetail(Number(userId));
  const { mutate: updateCareer } = useUpdateExperience();

  const selectedExperience = data.experience.experienceList.find((exp) => exp.id === Number(experienceId));

  const {
    careerData,
    setCareerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    setIsCurrentJob,
  } = useEditCareerForm(selectedExperience);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    updateCareer({
      experienceId: Number(experienceId),
      data: {
        title: careerData.title,
        startDate: careerData.startDate,
        endDate: careerData.endDate,
        contentList: careerData.contentList,
      },
    });

    navigate(PATH.CAREER_SETTING);
  };

  return (
    <div css={s.pageStyle}>
      <h1 css={s.titleStyle}>경력 편집</h1>
      <form css={s.formStyle}>
        <div css={[s.fieldStyle, { maxWidth: "30rem" }]}>
          <label htmlFor="career-name" css={s.labelStyle}>
            경력명
          </label>
          <Input
            id="career-name"
            maxLength={MAX_LENGTH.CAREER_DETAIL_TITLE}
            variant="secondary"
            value={careerData.title}
            onChange={(e) => {
              const { value } = e.target;
              if (value.length > MAX_LENGTH.CAREER_DETAIL_TITLE) {
                setCareerData((prev) => ({ ...prev, title: value.slice(0, MAX_LENGTH.CAREER_DETAIL_TITLE) }));
              } else {
                handleInputChange("title", value);
              }
            }}
          />
        </div>
        <div css={s.fieldStyle}>
          <label htmlFor="period" css={s.labelStyle}>
            기간
          </label>
          <div css={s.datePickerStyle}>
            <Input variant="secondary" value={formatDateArray(careerData.startDate)} onChange={() => {}} />
            <p css={{ marginRight: "1.3rem" }}>부터</p>
            <Input
              variant="secondary"
              value={careerData.endDate ? formatDateArray(careerData.endDate) : ""}
              onChange={() => {}}
              disabled={!careerData.endDate}
            />
            <p>까지</p>
            <Divider direction="horizontal" />
            <div css={s.checkboxStyle}>
              <label htmlFor="current-job" css={s.labelStyle}>
                현직
              </label>
              <CheckBox
                id="current-job"
                variant="round"
                isChecked={careerData.endDate === null}
                onChange={() => setIsCurrentJob(careerData.endDate !== null)}
              />
            </div>
          </div>
        </div>
        <div css={s.fieldStyle}>
          <div css={{ display: "flex", gap: "0.73rem" }}>
            <label htmlFor="detail" css={s.labelStyle}>
              세부사항
            </label>
            <p css={s.labelStyle}>·</p>
            <span css={{ display: "flex" }}>
              <p css={s.lengthStyle}>{careerData.contentList.length}</p>
              <p css={s.labelStyle}>/{MAX_LENGTH.DETAIL_COUNT}</p>
            </span>
          </div>
          {careerData.contentList.map((detail, index) =>
            index === 0 ? (
              <Input
                key={index}
                variant="secondary"
                maxLength={MAX_LENGTH.DETAIL}
                value={detail}
                onChange={(e) => handleDetailChange(index, e.target.value)}
              />
            ) : (
              <CareerDetailChip
                key={index}
                value={detail}
                onDelete={() => handleDeleteDetailInput(index)}
                onChange={(e) => handleDetailChange(index, e.target.value)}
              />
            ),
          )}
          {careerData.contentList.length < MAX_LENGTH.DETAIL_COUNT && (
            <button type="button" css={s.iconStyle} onClick={handleAddDetailInput}>
              <PlusBlueIcon width={16} height={16} />
            </button>
          )}
        </div>
      </form>
      <div css={s.buttonLayoutStyle}>
        <Button size="medium" variant="tertiary" onClick={() => navigate(PATH.CAREER_SETTING)}>
          뒤로 가기
        </Button>
        <Button size="medium" onClick={handleSubmit}>
          추가 하기
        </Button>
      </div>
    </div>
  );
};
export default CareerEdit;
