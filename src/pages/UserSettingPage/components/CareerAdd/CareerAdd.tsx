import { PlusBlueIcon } from "@/assets/svg";
import { Button, CheckBox, Divider, Input } from "@/components";
import { PATH } from "@/constants/path";
import CareerDetailChip from "@/pages/UserSettingPage/components/CareerDetailChip/CareerDetailChip";
import * as s from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit.styles";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import { useCareerValidation } from "@/pages/UserSettingPage/hooks/useCareerValidation";
import { useEditCareerForm } from "@/pages/UserSettingPage/hooks/useEditCareerForm";
import { usePostExperience } from "@/pages/UserSettingPage/hooks/usePostExperience";
import { useState } from "react";
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
    setCareerData,
  } = useEditCareerForm();
  const { isContentError, isTitleError } = useCareerValidation(careerData);

  const { mutate: addExperience } = usePostExperience();

  const handleStartDateChange = (value: string) => {
    const date = new Date(value);
    setCareerData((prev) => ({
      ...prev,
      startDate: [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
      ],
    }));
  };

  const handleEndDateChange = (value: string) => {
    const date = new Date(value);
    setCareerData((prev) => ({
      ...prev,
      endDate: [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
      ],
    }));
  };

  const handleSubmit = () => {
    const updateCareerData = {
      title: careerData.title,
      contentList: careerData.contentList,
      startDate: careerData.startDate,
      endDate: careerData.endDate,
    };

    addExperience(updateCareerData);
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
            <div css={{ position: "relative" }}>
              <Input
                type="datetime-local"
                onChange={(e) => handleStartDateChange(e.target.value)}
                variant="secondary"
              />
            </div>
            <p css={{ marginRight: "1.3rem" }}>부터</p>
            <div css={{ position: "relative" }}>
              <Input
                value={
                  careerData.endDate
                    ? new Date(
                        careerData.endDate[0],
                        careerData.endDate[1] - 1,
                        careerData.endDate[2],
                        careerData.endDate[3],
                        careerData.endDate[4],
                        careerData.endDate[5],
                      )
                        .toISOString()
                        .slice(0, 16)
                    : ""
                }
                onChange={(e) => handleEndDateChange(e.target.value)}
                variant="secondary"
                disabled={!careerData.endDate}
              />
            </div>
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
                onChange={() => {
                  setCareerData((prev) => ({
                    ...prev,
                    endDate: prev.endDate ? null : [new Date().getFullYear(), new Date().getMonth() + 1],
                  }));
                }}
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
