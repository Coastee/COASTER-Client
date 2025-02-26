import { PlusBlueIcon } from "@/assets/svg";
import { CheckBox, Divider, Input } from "@/components";
import CareerDetailChip from "@/pages/UserSettingPage/components/CareerDetailChip/CareerDetailChip";
import * as s from "@/pages/UserSettingPage/components/CareerEdit/CareerEdit.styles";
import { careerDummyData } from "@/pages/UserSettingPage/constants/dummy";

import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import { useEditCareerForm } from "@/pages/UserSettingPage/hooks/useEditCareerForm";
import { formatDateArray } from "@/utils/dateTime";

const CareerEdit = () => {
  const {
    careerData,
    handleInputChange,
    handleDetailChange,
    handleAddDetailInput,
    handleDeleteDetailInput,
    setIsCurrentJob,
    handleSupportingText,
    isContentError,
    isTitleError,
    isDateError,
  } = useEditCareerForm(careerDummyData);

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
            isError={isTitleError}
            supportingText={handleSupportingText("title")}
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
                isError={isContentError[0]}
                supportingText={handleSupportingText("contentList", index)}
                value={detail}
                onChange={(e) => handleDetailChange(index, e.target.value)}
              />
            ) : (
              <CareerDetailChip
                key={index}
                value={detail}
                isError={isContentError[index]}
                onDelete={() => handleDeleteDetailInput(index)}
                onChange={(e) => handleDetailChange(index, e.target.value)}
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
    </div>
  );
};

export default CareerEdit;
