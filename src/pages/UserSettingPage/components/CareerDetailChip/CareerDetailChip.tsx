import { CloseCircleIcon } from "@/assets/svg";
import { Input } from "@/components";
import { deleteStyle } from "@/components/TagChip/TagChip.styles";
import * as s from "@pages/UserSettingPage/components/CareerDetailChip/CareerDetailChip.styles";
import type { ChangeEvent } from "react";

interface CareerDetailChipProps {
  value: string;
  onDelete: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CareerDetailChip = ({ value, onDelete, onChange }: CareerDetailChipProps) => {
  return (
    <div css={s.wrapperStyle}>
      <button type="button" css={deleteStyle} onClick={onDelete}>
        <CloseCircleIcon width={18} />
      </button>
      <Input maxLength={30} variant="secondary" value={value} onChange={onChange} />
    </div>
  );
};

export default CareerDetailChip;
