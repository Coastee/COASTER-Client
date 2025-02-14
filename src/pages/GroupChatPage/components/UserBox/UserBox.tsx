import { getInitials } from "@/utils/getInitials";
import * as s from "@pages/GroupChatPage/components/UserBox/UserBox.styles";

const UserBox = ({ name }: { name: string }) => {
  return <div css={s.wrapperStyle}>{getInitials(name)}</div>;
};

export default UserBox;
