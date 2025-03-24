import { PlusBlueIcon } from "@/assets/svg";
import { Button, CheckBox, Divider, Input } from "@/components";
import { PATH } from "@/constants/path";
import CareerDetailChip from "@/pages/UserSettingPage/components/CareerDetailChip/CareerDetailChip";
import * as s from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit.styles";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import { useCareerValidation } from "@/pages/UserSettingPage/hooks/useCareerValidation";
import { useEditCareerForm } from "@/pages/UserSettingPage/hooks/useEditCareerForm";
import { usePostExperience } from "@/pages/UserSettingPage/hooks/usePostExperience";
import { formatDate, parseDateStringToArray } from "@/pages/UserSettingPage/utils/date";
import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const CareerAdd = () => {
  const [isTitleFocused, setIsTitleFocused] = useState(false);

  const navigate = useNavigate();

  const {
    careerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    handleCheckBoxChange,
    handleDateInput,
  } = useEditCareerForm();

  const { isContentError, isTitleError } = useCareerValidation(careerData);

  const { mutate: createCareer } = usePostExperience();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createCareer({
      title: careerData.title,
      startDate: parseDateStringToArray(formatDate(careerData.startDate)) ?? [],
      endDate: careerData.endDate ? parseDateStringToArray(formatDate(careerData.endDate)) : null,
      contentList: careerData.contentList,
    });

    navigate(PATH.CAREER_SETTING);
  };

  return (
    <div css={s.pageStyle}>
      <h1 css={s.titleStyle}>새 경력 추가</h1>
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
            isError={isTitleFocused && isTitleError}
            onFocus={() => setIsTitleFocused(true)}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>
        <div css={s.fieldStyle}>
          <label htmlFor="period" css={s.labelStyle}>
            기간
          </label>
          <div css={s.datePickerStyle}>
            <Input
              variant="secondary"
              value={formatDate(careerData.startDate)}
              placeholder="YYYY.MM.DD"
              onChange={(e) => {
                handleDateInput(e, "startDate");
              }}
            />
            <p css={{ marginRight: "1.3rem" }}>부터</p>
            <Input
              variant="secondary"
              value={careerData.endDate ? formatDate(careerData.endDate) : ""}
              placeholder="YYYY.MM.DD"
              onChange={(e) => {
                handleDateInput(e, "endDate");
              }}
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
                isChecked={!careerData.endDate}
                onChange={handleCheckBoxChange}
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
                isError={isContentError[index]}
                onChange={(e) => handleDetailChange(index, e.target.value)}
              />
            ) : (
              <CareerDetailChip
                key={index}
                value={detail}
                onDelete={() => handleDeleteDetailInput(index)}
                onChange={(e) => handleDetailChange(index, e.target.value)}
                isError={isContentError[index]}
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
export default CareerAdd;
