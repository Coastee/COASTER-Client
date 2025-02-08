import { Button, ModalHashtag, SideModal, Textarea } from "@/components";
import { type HashTagTypes, hashTagsDummy } from "@/constants/hashTagsDummy";
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

  const [hashTags, setHashTags] = useState<HashTagTypes[]>(hashTagsDummy);
  const [file, setFile] = useState<File | null>(null);

  const addHashtag = (content: string) => {
    setHashTags([...hashTags, { id: Date.now(), content }]);
  };

  const removeHashtag = (id: number) => {
    setHashTags(hashTags.filter((hashtag) => hashtag.id !== id));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileDelete = () => {
    setFile(null);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
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
            <h1 css={s.textareaTitleStyle}>채팅방 제목</h1>
            <Textarea
              placeholder="채팅방 제목을 입력해주세요."
              maxLength={20}
              variant="modalSingleLine"
            />
          </li>
          <li css={s.questionContainer}>
            <h1 css={s.textareaTitleStyle}>채팅방 상세 설명</h1>
            <Textarea
              placeholder="채팅방 상세 설명을 입력하세요"
              maxLength={80}
              variant="modalMultiLine"
            />
            <ul css={s.hashtagListContainer}>
              {hashTags.map((hashtag) => (
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
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {file ? `${file.name}` : "파일을 첨부하세요 (0MB 이내)"}
            </div>

            {file && (
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
          <Button variant="tertiary">등록</Button>
        </div>
      </div>
    </SideModal>
  );
};

export default AddGroupChatModal;
