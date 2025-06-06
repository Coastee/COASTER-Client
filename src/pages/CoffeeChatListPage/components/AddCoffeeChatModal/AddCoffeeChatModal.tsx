import { CounterMinusIcon, CounterPlusIcon } from "@/assets/svg";
import { Button, DatePicker, FileUploadBox, HashtagInput, Input, SideModal, TagChip, Textarea } from "@/components";
import { useFileUpload } from "@/components/FileUploadBox/hooks/useFileUpload";

import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import { useHashtag } from "@/components/TagChip/hooks/useHashtag";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { TimeDropdown } from "@/pages/CoffeeChatListPage/components/TimeDropdown/TimeDropdown";
import {
  CHAT_FORM_FIELDS,
  DEFAULT_COFFEE_CHAT_VALUES,
  DEFAULT_DATE_TIME_VALUE,
  MAX_HASHTAG_COUNT,
  MAX_LENGTH,
} from "@/pages/CoffeeChatListPage/constants/coffeeChat";
import { useAddCoffeeChat } from "@/pages/CoffeeChatListPage/hooks/useAddCoffeeChat";
import type { AddCoffeeChatTypes } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";
import { useGlobalServer } from "@/stores/useGlobalServerStore";
import { useState } from "react";
import * as s from "./AddCoffeeChatModal.styles";

const AddCoffeeChatModal = ({ isVisible, setIsVisible }: SideModalProps) => {
  const globalServer = useGlobalServer();

  const [request, setRequest] = useState(DEFAULT_COFFEE_CHAT_VALUES);
  const [dateTime, setDateTime] = useState(DEFAULT_DATE_TIME_VALUE);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [datePickerSelectedDate, setDatePickerSelectedDate] = useState<Date | null>(null);

  const { addHashtag, removeHashtag } = useHashtag<AddCoffeeChatTypes>(request, setRequest);
  const { image, fileInputRef, handleFileChange, handleFileDelete, handleFileClick } = useFileUpload();

  const isButtonDisabled = request.title.trim().length === 0 || request.location.trim().length === 0;

  const {
    isFieldError,
    handleDateChange,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleMaxCountChange,
    handleSubmit,
  } = useAddCoffeeChat({
    request,
    setRequest,
    dateTime,
    setDateTime,
    maxLengths: MAX_LENGTH,
    setIsVisible,
    globalServer,
    image,
  });

  return (
    <SideModal
      title="티타임 개설하기"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      modalStyle={{ padding: "4.4rem 4.4rem 5.4rem 5.4rem" }}
    >
      <form
        css={s.modalContentStyle}
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <ul css={s.contentListStyle}>
          <li css={[s.questionContainer, { maxWidth: "35rem" }]}>
            <label htmlFor="title" css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.title.headerTxt}
              <span id="required">*</span>
            </label>
            <Input
              id="title"
              placeholder={CHAT_FORM_FIELDS.title.placeholder}
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={request.title}
              onFocus={() => handleFocus("title")}
              onBlur={() => handleBlur("title")}
              isError={isFieldError("title", request.title, "required")}
              supportingText={SUPPORTING_TEXT.REQUIRED}
              maxLength={MAX_LENGTH.title}
            />
          </li>
          <li css={s.questionContainer}>
            <label htmlFor="content" css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.content.headerTxt}
            </label>
            <Textarea
              id="content"
              placeholder={CHAT_FORM_FIELDS.content.placeholder}
              maxLength={MAX_LENGTH.content}
              value={request.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
              style={{ height: "12rem" }}
            />
          </li>
          <li css={[s.questionContainer]}>
            <div css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.hashtags.headerTxt}
              <span id="sub"> {CHAT_FORM_FIELDS.hashtags.detailTxt}</span>
            </div>
            <ul css={s.hashtagListContainer}>
              {request.hashTags.map((hashtag, idx) => (
                <li key={idx}>
                  <TagChip id={idx} content={hashtag} removeHashtag={() => removeHashtag(hashtag)} />
                </li>
              ))}
              {request.hashTags.length < MAX_HASHTAG_COUNT && <HashtagInput addHashtag={addHashtag} />}
            </ul>
          </li>
          <li css={[s.questionContainer, { paddingTop: "1.2rem" }]}>
            <label htmlFor="participants" css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.maxCount.headerTxt}
              <span id="required">*</span>
              <span id="sub">{CHAT_FORM_FIELDS.maxCount.detailTxt}</span>
            </label>
            <div css={s.counterStyle}>
              <CounterMinusIcon
                width={33}
                height={33}
                css={{ userSelect: "none", cursor: "pointer" }}
                onClick={() => handleMaxCountChange("decrement")}
              />
              <p>{request.maxCount}</p>
              <CounterPlusIcon
                width={33}
                height={33}
                css={{ userSelect: "none", cursor: "pointer" }}
                onClick={() => handleMaxCountChange("increment")}
              />
            </div>
          </li>

          <li css={[s.questionContainer, { paddingTop: "1.2rem", position: "relative" }]}>
            <label htmlFor="date-time" css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.dateTime.headerTxt}
              <span id="required">*</span>
            </label>

            <div css={s.dateTimeLayoutStyle}>
              <div css={{ display: "flex", gap: "1.2rem" }}>
                <div
                  id="date-time"
                  onClick={() => setIsDatePickerVisible(!isDatePickerVisible)}
                  onKeyDown={() => setIsDatePickerVisible(!isDatePickerVisible)}
                  css={s.dateTimeContainerStyle(!dateTime.date)}
                >
                  {dateTime.date || CHAT_FORM_FIELDS.dateTime.placeholder}
                </div>

                <div css={s.datePickerContainerStyle}>
                  {isDatePickerVisible && (
                    <DatePicker
                      selectedDate={datePickerSelectedDate}
                      setSelectedDate={setDatePickerSelectedDate}
                      setIsVisible={setIsDatePickerVisible}
                      handleDateChange={handleDateChange}
                    />
                  )}
                </div>
                <TimeDropdown type="start" setTime={(time) => setDateTime({ ...dateTime, start: time })} />
                <TimeDropdown type="end" setTime={(time) => setDateTime({ ...dateTime, end: time })} />
              </div>
            </div>
          </li>
          <li css={[s.questionContainer, { paddingTop: "1.2rem" }]}>
            <label htmlFor="location" css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.location.headerTxt} <span id="required">*</span>
            </label>
            <div css={{ maxWidth: "35rem" }}>
              <Input
                id="location"
                placeholder={CHAT_FORM_FIELDS.location.placeholders[0]}
                onChange={(e) => handleInputChange("location", e.target.value)}
                value={request.location}
                onFocus={() => handleFocus("location")}
                onBlur={() => handleBlur("location")}
                isError={isFieldError("location", request.location, "required")}
                supportingText={SUPPORTING_TEXT.REQUIRED}
              />
            </div>
            <Input
              placeholder={CHAT_FORM_FIELDS.location.placeholders[1]}
              onChange={(e) => handleInputChange("details", e.target.value)}
              value={request.details}
              onFocus={() => handleFocus("details")}
              onBlur={() => handleBlur("details")}
              isError={isFieldError("details", request.details)}
              supportingText={SUPPORTING_TEXT.REQUIRED}
              maxLength={MAX_LENGTH.details}
            />
          </li>
          <li css={s.questionContainer} style={{ maxWidth: "35rem", paddingTop: "1.2rem" }}>
            <div css={s.textareaTitleStyle}>{CHAT_FORM_FIELDS.file.headerTxt}</div>
            <FileUploadBox
              image={image}
              fileInputRef={fileInputRef}
              handleFileChange={handleFileChange}
              handleFileDelete={handleFileDelete}
              handleFileClick={handleFileClick}
            />
          </li>
        </ul>
        <div css={s.buttonContainer}>
          <Button type="submit" variant="primary" disabled={isButtonDisabled}>
            등록
          </Button>
        </div>
      </form>
    </SideModal>
  );
};

export default AddCoffeeChatModal;
