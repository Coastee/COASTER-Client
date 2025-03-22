import { ShadowPlusIcon } from "@/assets/svg";
import * as s from "./AddButton.styles";

interface AddButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  setIsModalVisible: (value: boolean) => void;
}

const AddButton = ({ setIsModalVisible }: AddButtonProps) => {
  return (
    <button
      type="button"
      css={s.addButtonStyle}
      onClick={() => setIsModalVisible(true)}
    >
      <ShadowPlusIcon width={110} height={110} />
    </button>
  );
};

export default AddButton;
