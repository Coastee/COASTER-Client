import { PlusBlueIcon } from "@/assets/svg";
import { Button, CheckBox, Divider, Input } from "@/components";
import CareerDetailChip from "@/pages/UserSettingPage/components/CareerDetailChip/CareerDetailChip";
import * as s from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit.styles";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import { useCareerValidation } from "@/pages/UserSettingPage/hooks/useCareerValidation";
import { useEditCareerForm } from "@/pages/UserSettingPage/hooks/useEditCareerForm";
import { formatDateArray } from "@/utils/dateTime";
import { useState } from "react";

const CareerAdd = () => {
  const [isTitleFocused, setIsTitleFocused] = useState(false);

  const {
    careerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    setIsCurrentJob,
  } = useEditCareerForm();

  const { handleSupportingText, isContentError, isDateError, isTitleError } = useCareerValidation(careerData);

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
            supportingText={isTitleError ? handleSupportingText("title") : ""}
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
              value={formatDateArray(careerData.startDate)}
              onChange={() => {}}
              isError={isDateError}
              supportingText={handleSupportingText("startDate")}
            />
            <p css={{ marginRight: "1.3rem" }}>부터</p>
            <Input
              variant="secondary"
              value={careerData.endDate ? formatDateArray(careerData.endDate) : ""}
              onChange={() => {}}
              isError={isDateError}
              supportingText={handleSupportingText("endDate")}
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
                onChange={() => setIsCurrentJob(!careerData.endDate)}
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
                supportingText={handleSupportingText("contentList", index)}
                onChange={(e) => handleDetailChange(index, e.target.value)}
              />
            ) : (
              <CareerDetailChip
                key={index}
                value={detail}
                onDelete={() => handleDeleteDetailInput(index)}
                onChange={(e) => handleDetailChange(index, e.target.value)}
                isError={isContentError[index]}
                supportingText={handleSupportingText("contentList", index)}
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
        <Button size="medium" variant="tertiary">
          뒤로 가기
        </Button>
        <Button size="medium">추가 하기</Button>
      </div>
    </div>
  );
};

export default CareerAdd;
