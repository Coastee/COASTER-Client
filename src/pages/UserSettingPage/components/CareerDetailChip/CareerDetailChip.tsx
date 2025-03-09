import { CloseCircleIcon } from "@/assets/svg";
import { Input } from "@/components";
import { deleteStyle } from "@/components/TagChip/TagChip.styles";

import * as s from "@/pages/UserSettingPage/components/CareerDetailChip/CareerDetailChip.styles";
import { MAX_LENGTH } from "@/pages/UserSettingPage/constants/maxLength";
import type { ChangeEvent } from "react";

interface CareerDetailChipProps {
  value: string;
  onDelete: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
}

const CareerDetailChip = ({ value, onDelete, onChange, isError = false }: CareerDetailChipProps) => {
  return (
    <div css={s.wrapperStyle}>
      <button type="button" css={deleteStyle} onClick={onDelete}>
        <CloseCircleIcon width={18} />
      </button>
      <Input maxLength={MAX_LENGTH.DETAIL} variant="secondary" value={value} onChange={onChange} isError={isError} />
    </div>
  );
};

export default CareerDetailChip;
