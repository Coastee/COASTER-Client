import { UserBox } from "@/components";
import type { DMRoomTypes } from "@/pages/DMPage/types/dmTypes";
import * as s from "@pages/DMPage/components/DMItem/DMItem.styles";

interface DMItemProps extends DMRoomTypes {
  setRoomId: (id: number) => void;
}
// user
// dm.content
// dm.createdDate
// isRead: false

const isRead = false;

const DMItem = ({ id, user, dm, setRoomId }: DMItemProps) => {
  return (
    <li css={s.itemWrapperStyle} onClick={() => setRoomId(id)}>
      <div css={s.layoutStyle}>
        <UserBox name={user.nickname} />
        <div css={s.infoStyle}>
          <h2>{user.nickname}</h2>
          <div css={s.contentStyle}>
            <p css={s.messageStyle(isRead)}>{dm.content}</p>
            <div css={s.circleStyle} />
            <p css={s.timeStyle}>{dm.createdDate.toString()}분</p>
          </div>
        </div>
      </div>
      {!isRead && <div css={s.blueCircleStyle} />}
    </li>
  );
};

export default DMItem;
