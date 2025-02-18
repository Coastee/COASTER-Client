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
import { TEXT_MAX_LENGTH } from "@/pages/GroupChatListPage/constants/textMaxLength";
import { useAddGroupChat } from "@/pages/GroupChatListPage/hooks/useAddGroupChat";
import { useState } from "react";
import * as s from "./AddGroupChatModal.styles";

interface AddGroupChatModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

interface AddGroupChatTypes {
  title: string;
  content: string;
  hashTags: string[];
}

const AddGroupChatModal = ({
  isVisible,
  setIsVisible,
}: AddGroupChatModalProps) => {
  const [request, setRequest] = useState<AddGroupChatTypes>({
    title: "",
    content: "",
    hashTags: [],
  });

  const { handleInputChange, handleFocus, handleBlur, isFieldError } =
    useAddGroupChat({
      request,
      setRequest,
      maxLengths: TEXT_MAX_LENGTH,
    });

  const { addHashtag, removeHashtag } = useHashtag<AddGroupChatTypes>(
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
          </li>
          <li css={[s.questionContainer]}>
            <div css={s.textareaTitleStyle}>
              해시태그
              <span>해시태그는 최대 10개까지 입력 가능합니다.</span>
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
              {request.hashTags.length < 10 && (
                <HashtagInput addHashtag={addHashtag} />
              )}
            </ul>
          </li>
          <li css={s.questionContainer} style={{ maxWidth: "35rem" }}>
            <h1 css={s.textareaTitleStyle}>사진 등록하기</h1>
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
