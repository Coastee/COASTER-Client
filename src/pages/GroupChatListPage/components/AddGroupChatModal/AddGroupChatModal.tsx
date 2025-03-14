import { Button, FileUploadBox, HashtagInput, Input, SideModal, TagChip, Textarea } from "@/components";
import { useFileUpload } from "@/components/FileUploadBox/hooks/useFileUpload";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import { useHashtag } from "@/components/TagChip/hooks/useHashtag";
import { SUPPORTING_TEXT } from "@/constants/supportingText";
import { TEXT_MAX_LENGTH } from "@/pages/GroupChatListPage/constants/textMaxLength";
import { useAddGroupChat } from "@/pages/GroupChatListPage/hooks/useAddGroupChat";
import { useGlobalServer } from "@/stores/useGlobalServerStore";
import { useState } from "react";
import * as s from "./AddGroupChatModal.styles";

interface AddGroupChatTypes {
  title: string;
  content: string;
  hashTags: string[];
}

const AddGroupChatModal = ({ isVisible, setIsVisible }: SideModalProps) => {
  const globalServer = useGlobalServer();

  const [request, setRequest] = useState<AddGroupChatTypes>({
    title: "",
    content: "",
    hashTags: [],
  });

  const { handleInputChange, handleFocus, handleBlur, isFieldError, uploadGroupChat } = useAddGroupChat({
    request,
    setRequest,
    maxLengths: TEXT_MAX_LENGTH,
  });

  const { addHashtag, removeHashtag } = useHashtag<AddGroupChatTypes>(request, setRequest);

  const { image, fileInputRef, handleFileChange, handleFileDelete, handleFileClick } = useFileUpload();

  const isButtonDisabled = isFieldError("title", request.title);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!globalServer) {
        console.log(globalServer);
        console.error("서버 정보가 없습니다.");
        return;
      }
      uploadGroupChat({
        serverId: globalServer.id,
        file: image || null,
      });
      setIsVisible(false);
    } catch (error) {
      console.error("그룹챗 생성 실패:", error);
    }
  };

  return (
    <SideModal title="그룹 채팅방 개설하기" isVisible={isVisible} setIsVisible={setIsVisible}>
      <form
        css={s.modalContentStyle}
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "TEXTAREA") {
            e.preventDefault();
          }
        }}
      >
        <ul css={s.contentListStyle}>
          <li css={[s.questionContainer, { maxWidth: "35rem" }]}>
            <label htmlFor="title" css={s.textareaTitleStyle}>
              채팅방 제목<span id="required">*</span>
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
              <span id="sub">해시태그는 최대 10개까지 입력 가능합니다.</span>
            </div>
            <ul css={s.hashtagListContainer}>
              {request.hashTags.map((hashtag, idx) => (
                <li key={idx}>
                  <TagChip id={idx} content={hashtag} removeHashtag={() => removeHashtag(hashtag)} />
                </li>
              ))}
              {request.hashTags.length < 10 && <HashtagInput addHashtag={addHashtag} />}
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
          <Button type="submit" variant="primary" disabled={!request.title.trim() || isButtonDisabled}>
            등록
          </Button>
        </div>
      </form>
    </SideModal>
  );
};

export default AddGroupChatModal;
