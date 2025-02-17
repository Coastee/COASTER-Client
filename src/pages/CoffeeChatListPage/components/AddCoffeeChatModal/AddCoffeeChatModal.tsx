import { CounterMinusIcon, CounterPlusIcon } from "@/assets/svg";
import { Button, HashtagChip, Input, SideModal, Textarea } from "@/components";

import { HASH_TAGS_DUMMY } from "@/constants/hashTagsDummy";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import TimeDropdown from "@/pages/CoffeeChatListPage/components/TimeDropdown/TimeDropdown";
import { TEXT_MAX_LENGTH } from "@/pages/CoffeeChatListPage/constants/textMaxLength";
import useAddCoffeeChatForm from "@/pages/CoffeeChatListPage/hooks/useAddCoffeeChatForm";
import HashtagInput from "@/pages/GroupChatListPage/components/HashtagInput/HashtagInput";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
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
  const [request, setRequest] = useState({
    title: "",
    description: "",
    hashTags: HASH_TAGS_DUMMY,
    participants: 2,
    date: "2025. 1. 22 (수)",
    startTime: "오전 1 : 00",
    endTime: "오전 1 : 00",
    location: "",
    locationDetail: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const {
    fileInputRef,
    addHashtag,
    removeHashtag,
    handleFileChange,
    handleFileDelete,
    handleFileClick,
    handleInputChange,
    handleParticipantsChange,
    handleFocus,
    handleBlur,
    isFieldError,
  } = useAddCoffeeChatForm({
    request,
    setRequest,
    image,
    setImage,
    maxLengths: TEXT_MAX_LENGTH,
  });

  const isButtonDisabled =
    request.title.trim().length === 0 || request.location.trim().length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVisible(false);
  };

  return (
    <SideModal
      title="티타임 개설하기"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
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
              오프라인 커피챗 제목<span id="required">*</span>
            </label>
            <Input
              id="title"
              placeholder="오프라인 커피챗 제목을 입력해주세요."
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={request.title}
              onFocus={() => handleFocus("title")}
              onBlur={() => handleBlur("title")}
              isError={isFieldError("title", request.title, "required")}
              supportingText={SUPPORTING_TEXT.REQUIRED}
              maxLength={TEXT_MAX_LENGTH.title}
            />
          </li>
          <li css={s.questionContainer}>
            <label htmlFor="description" css={s.textareaTitleStyle}>
              오프라인 커피챗 상세 설명
            </label>
            <Textarea
              id="description"
              placeholder="오프라인 커피챗 상세 설명을 입력하세요"
              maxLength={TEXT_MAX_LENGTH.description}
              value={request.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              style={{ height: "12rem" }}
            />
          </li>
          <li css={[s.questionContainer]}>
            <div css={s.textareaTitleStyle}>
              해시태그
              <span id="sub">해시태그는 최대 10개까지 입력 가능합니다.</span>
            </div>
            <ul css={s.hashtagListContainer}>
              {request.hashTags.map((hashtag) => (
                <li key={hashtag.id}>
                  <HashtagChip
                    id={hashtag.id}
                    content={hashtag.content}
                    removeHashtag={removeHashtag}
                  />
                </li>
              ))}
              <HashtagInput addHashtag={addHashtag} />
            </ul>
          </li>
          <li css={[s.questionContainer, { paddingTop: "1.2rem" }]}>
            <label htmlFor="participants" css={s.textareaTitleStyle}>
              참여 인원<span id="required">*</span>
              <span id="sub">최소 참여 인원은 2명입니다</span>
            </label>
            <div css={s.counterStyle}>
              <CounterMinusIcon
                width={33}
                height={33}
                css={{ userSelect: "none" }}
                onClick={() => handleParticipantsChange("decrement")}
              />
              <p>{request.participants}</p>
              <CounterPlusIcon
                width={33}
                height={33}
                css={{ userSelect: "none" }}
                onClick={() => handleParticipantsChange("increment")}
              />
            </div>
          </li>
          <li css={[s.questionContainer, { paddingTop: "1.2rem" }]}>
            <label htmlFor="date-time" css={s.textareaTitleStyle}>
              진행 날짜 및 시간<span id="required">*</span>
            </label>
            <div css={s.dateTimeLayoutStyle}>
              <div css={{ display: "flex", gap: "1.2rem" }}>
                <div id="date-time" css={s.dateTimeContainerStyle}>
                  {request.date}
                </div>
                <TimeDropdown
                  type="start"
                  setRequest={(value) =>
                    setRequest((prev) => ({ ...prev, startTime: value }))
                  }
                />
                <TimeDropdown
                  type="end"
                  setRequest={(value) =>
                    setRequest((prev) => ({ ...prev, endTime: value }))
                  }
                />
              </div>
            </div>
          </li>

          <li css={[s.questionContainer, { paddingTop: "1.2rem" }]}>
            <label htmlFor="location" css={s.textareaTitleStyle}>
              진행 장소<span id="required">*</span>
            </label>
            <div css={{ maxWidth: "35rem" }}>
              <Input
                id="location"
                placeholder="진행할 장소를 입력하세요 (ex. 서울시 용산구 ㅇㅇ로)"
                onChange={(e) => handleInputChange("location", e.target.value)}
                value={request.location}
                onFocus={() => handleFocus("location")}
                onBlur={() => handleBlur("location")}
                isError={isFieldError("location", request.location, "required")}
                supportingText={SUPPORTING_TEXT.REQUIRED}
              />
            </div>

            <Input
              placeholder="장소에 대한 설명을 입력하세요 (ex. 강남역 6번출구)"
              onChange={(e) =>
                handleInputChange("locationDetail", e.target.value)
              }
              value={request.locationDetail}
              onFocus={() => handleFocus("locationDetail")}
              onBlur={() => handleBlur("locationDetail")}
              isError={isFieldError("locationDetail", request.locationDetail)}
              supportingText={SUPPORTING_TEXT.REQUIRED}
              maxLength={TEXT_MAX_LENGTH.locationDetail}
            />
          </li>
          <li
            css={s.questionContainer}
            style={{ maxWidth: "35rem", paddingTop: "1.2rem" }}
          >
            <div css={s.textareaTitleStyle}>사진 등록하기</div>
            <div
              css={s.fileButtonStyle}
              onClick={handleFileClick}
              onKeyDown={handleFileClick}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {image ? `${image.name}` : "이미지 파일을 첨부하세요 (0MB 이내)"}
            </div>

            {image && (
              <div css={s.editButtonListStyle}>
                <Button
                  variant="tertiary"
                  size="medium"
                  onClick={handleFileClick}
                >
                  수정하기
                </Button>
                <Button
                  variant="tertiary"
                  size="medium"
                  css={css`
                    color: ${theme.color.primaryPink0};
                  `}
                  onClick={handleFileDelete}
                >
                  삭제하기
                </Button>
              </div>
            )}
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
