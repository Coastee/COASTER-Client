import { CounterMinusIcon, CounterPlusIcon } from "@/assets/svg";
import {
  Button,
  FileUploadBox,
  HashtagChip,
  HashtagInput,
  Input,
  SideModal,
  Textarea,
} from "@/components";
import { useFileUpload } from "@/components/FileUploadBox/hooks/useFileUpload";
import { useHashtag } from "@/components/HashtagChip/hooks/useHashtag";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { TimeDropdown } from "@/pages/CoffeeChatListPage/components/TimeDropdown/TimeDropdown";
import {
  DEFAULT_COFFEE_CHAT_VALUES,
  DEFAULT_DATE_TIME_VALUE,
} from "@/pages/CoffeeChatListPage/constants/coffeeChat";
import { useAddCoffeeChat } from "@/pages/CoffeeChatListPage/hooks/useAddCoffeeChat";

import {
  CHAT_FORM_FIELDS,
  MAX_LENGTH,
} from "@/pages/CoffeeChatListPage/constants/coffeeChat";
import type { AddCoffeeChatTypes } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";
import { useState } from "react";
import * as s from "./AddCoffeeChatModal.styles";

interface AddCoffeeChatModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const AddCoffeeChatModal = ({
  isVisible,
  setIsVisible,
}: AddCoffeeChatModalProps) => {
  const MAX_HASHTAG_COUNT = 10;
  const [request, setRequest] = useState(DEFAULT_COFFEE_CHAT_VALUES);
  const [dateTime, setDateTime] = useState(DEFAULT_DATE_TIME_VALUE);

  const {
    isFieldError,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleMaxCountChange,
    formatDateTime,
  } = useAddCoffeeChat({
    dateTime,
    setDateTime,
    setRequest,
    maxLengths: MAX_LENGTH,
  });

  const { addHashtag, removeHashtag } = useHashtag<AddCoffeeChatTypes>(
    request,
    setRequest
  );

  const {
    image,
    fileInputRef,
    handleFileChange,
    handleFileDelete,
    handleFileClick,
  } = useFileUpload();

  const isButtonDisabled =
    request.title.trim().length === 0 || request.location.trim().length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formatDateTime();
    setIsVisible(false);
  };

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
                  <HashtagChip
                    content={hashtag}
                    removeHashtag={removeHashtag}
                  />
                </li>
              ))}
              {request.hashTags.length < MAX_HASHTAG_COUNT && (
                <HashtagInput addHashtag={addHashtag} />
              )}
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
          <li css={[s.questionContainer, { paddingTop: "1.2rem" }]}>
            <label htmlFor="date-time" css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.dateTime.headerTxt}
              <span id="required">*</span>
            </label>
            <div css={s.dateTimeLayoutStyle}>
              <div css={{ display: "flex", gap: "1.2rem" }}>
                <div
                  id="date-time"
                  css={s.dateTimeContainerStyle(request.startDate[0] === 0)}
                >
                  {request.startDate[0] === 0
                    ? CHAT_FORM_FIELDS.dateTime.placeholder
                    : request.startDate}
                </div>
                <TimeDropdown
                  type="start"
                  setTime={(time) => setDateTime({ ...dateTime, start: time })}
                />
                <TimeDropdown
                  type="end"
                  setTime={(time) => setDateTime({ ...dateTime, end: time })}
                />
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
          <li
            css={s.questionContainer}
            style={{ maxWidth: "35rem", paddingTop: "1.2rem" }}
          >
            <div css={s.textareaTitleStyle}>
              {CHAT_FORM_FIELDS.file.headerTxt}
            </div>
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
