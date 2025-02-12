import { Button, Input, ModalHashtag, SideModal, Textarea } from "@/components";
import { hashTagsDummy } from "@/constants/hashTagsDummy";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import HashtagInput from "@/pages/GroupChatListPage/components/HashtagInput/HashtagInput";
import useAddGroupChatForm from "@/pages/SignupPage/hooks/useAddGroupChatForm";
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
    hashTags: hashTagsDummy,
  });
  const [image, setImage] = useState<File | null>(null);

  const maxLengths = {
    title: 20,
    content: 80,
  };

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
  } = useAddGroupChatForm({ request, setRequest, image, setImage, maxLengths });

  const isButtonDisabled = isFieldError("title", request.title);

  const handleSubmit = () => {
    setIsVisible(false);
  };

  return (
    <SideModal
      title="그룹 채팅방 개설하기"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <div css={s.modalContentStyle}>
        <ul css={s.contentListStyle}>
          <li css={s.questionContainer} style={{ maxWidth: "35rem" }}>
            <h1 css={s.textareaTitleStyle}>
              채팅방 제목<span>*</span>
            </h1>
            <Input
              placeholder="채팅방 제목을 입력해주세요."
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={request.title}
              onFocus={() => handleFocus("title")}
              onBlur={() => handleBlur("title")}
              isError={isFieldError("title", request.title)}
              supportingText={SUPPORTING_TEXT.REQUIRED}
              maxLength={maxLengths.title}
            />
          </li>
          <li css={s.questionContainer}>
            <h1 css={s.textareaTitleStyle}>채팅방 상세 설명</h1>
            <Textarea
              placeholder="채팅방 상세 설명을 입력하세요"
              maxLength={maxLengths.content}
              value={request.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
              style={{ height: "12rem" }}
            />
            <ul css={s.hashtagListContainer}>
              {request.hashTags.map((hashtag) => (
                <li key={hashtag.id}>
                  <ModalHashtag
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
                <Button variant="small" onClick={handleFileClick}>
                  수정하기
                </Button>
                <Button
                  variant="small"
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
            onClick={handleSubmit}
            disabled={!request.title.trim() || isButtonDisabled}
          >
            등록
          </Button>
        </div>
      </div>
    </SideModal>
  );
};

export default AddGroupChatModal;
