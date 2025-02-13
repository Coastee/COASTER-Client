import * as s from "@/components/UserBox/UserBox.styles";
import { getInitials } from "@/utils/getInitials";

const UserBox = ({ name }: { name: string }) => {
  return <div css={s.wrapperStyle}>{getInitials(name)}</div>;
};

export default UserBox;
