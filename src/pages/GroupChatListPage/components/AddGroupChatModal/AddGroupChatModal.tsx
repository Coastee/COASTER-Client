import { Button, ModalHashtag, SideModal, Textarea } from "@/components";
import { hashTagsDummy } from "@/constants/hashTagsDummy";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import HashtagInput from "@/pages/GroupChatListPage/components/HashtagInput/HashtagInput";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import * as s from "./AddGroupChatModal.styles";

interface AddGroupChatModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const AddGroupChatModal = ({
  isVisible,
  setIsVisible,
}: AddGroupChatModalProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [request, setRequest] = useState({
    title: "",
    content: "",
    hashTags: hashTagsDummy,
  });
  const [image, setImage] = useState<File | null>(null);
  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const addHashtag = (content: string) => {
    setRequest((prev) => ({
      ...prev,
      hashTags: [...prev.hashTags, { id: Date.now(), content }],
    }));
  };

  const removeHashtag = (id: number) => {
    setRequest((prev) => ({
      ...prev,
      hashTags: prev.hashTags.filter((hashtag) => hashtag.id !== id),
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleFileDelete = () => {
    setImage(null);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      title: e.target.value,
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      content: e.target.value,
    }));
  };

  const handleFocus = () => {
    if (!hasBeenFocused) {
      setHasBeenFocused(true);
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = () => {
    setHasBeenFocused(true);
  };

  const isError = hasBeenFocused && !isFocused && request.title.length === 0;

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
            <Textarea
              placeholder="채팅방 제목을 입력해주세요."
              isError={isError}
              supportingText={SUPPORTING_TEXT.REQUIRED}
              maxLength={20}
              variant="modalSingleLine"
              value={request.title}
              onChange={handleTitleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </li>
          <li css={s.questionContainer}>
            <h1 css={s.textareaTitleStyle}>채팅방 상세 설명</h1>
            <Textarea
              placeholder="채팅방 상세 설명을 입력하세요"
              maxLength={80}
              variant="modalMultiLine"
              value={request.content}
              onChange={handleContentChange}
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
          <Button variant="primary" onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </div>
    </SideModal>
  );
};

export default AddGroupChatModal;
