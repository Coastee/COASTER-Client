import { Button, HashtagChip, Input, SideModal, Textarea } from "@/components";
import { HASH_TAGS_DUMMY } from "@/constants/hashTagsDummy";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import HashtagInput from "@/pages/GroupChatListPage/components/HashtagInput/HashtagInput";
import { TEXT_MAX_LENGTH } from "@/pages/GroupChatListPage/constants/textMaxLength";
import useAddGroupChatForm from "@/pages/GroupChatListPage/hooks/useAddGroupChatForm";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
import { useState } from "react";
import * as s from "./AddGroupChatModal.styles";

interface AddGroupChatModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const AddGroupChatModal = ({
  isVisible,
  setIsVisible,
}: AddGroupChatModalProps) => {
  const [request, setRequest] = useState({
    title: "",
    content: "",
    hashTags: HASH_TAGS_DUMMY,
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
    handleFocus,
    handleBlur,
    isFieldError,
  } = useAddGroupChatForm({
    request,
    setRequest,
    image,
    setImage,
    maxLengths: TEXT_MAX_LENGTH,
  });

  const isButtonDisabled = isFieldError("title", request.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVisible(false);
  };

  return (
    <SideModal
      title="그룹 채팅방 개설하기"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <form css={s.modalContentStyle} onSubmit={handleSubmit}>
        <ul css={s.contentListStyle}>
          <li css={[s.questionContainer, { maxWidth: "35rem" }]}>
            <label htmlFor="title" css={s.textareaTitleStyle}>
              채팅방 제목<span>*</span>
            </label>
            <Input
              id="title"
              placeholder="채팅방 제목을 입력해주세요."
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={request.title}
              onFocus={() => handleFocus("title")}
              onBlur={() => handleBlur("title")}
              isError={isFieldError("title", request.title)}
              supportingText={SUPPORTING_TEXT.REQUIRED}
              maxLength={TEXT_MAX_LENGTH.title}
            />
          </li>
          <li css={s.questionContainer}>
            <label htmlFor="description" css={s.textareaTitleStyle}>
              채팅방 상세 설명
            </label>
            <Textarea
              id="description"
              placeholder="채팅방 상세 설명을 입력하세요"
              maxLength={TEXT_MAX_LENGTH.content}
              value={request.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
              style={{ height: "12rem" }}
            />
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
          <li css={s.questionContainer} style={{ maxWidth: "35rem" }}>
            <h1 css={s.textareaTitleStyle}>사진 등록하기</h1>
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
          <Button
            type="submit"
            variant="primary"
            disabled={!request.title.trim() || isButtonDisabled}
          >
            등록
          </Button>
        </div>
      </form>
    </SideModal>
  );
};

export default AddGroupChatModal;
