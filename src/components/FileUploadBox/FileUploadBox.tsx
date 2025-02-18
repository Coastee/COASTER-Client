import Button from "@/components/Button/Button";
import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
import * as s from "./FileUploadBox.styles";

interface FileUploadBoxProps {
  handleFileClick: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileDelete: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  image: File | null;
}

const FileUploadBox = ({
  handleFileClick,
  handleFileChange,
  handleFileDelete,
  fileInputRef,
  image,
}: FileUploadBoxProps) => {
  return (
    <>
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
          <Button variant="tertiary" size="medium" onClick={handleFileClick}>
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
    </>
  );
};

export default FileUploadBox;
