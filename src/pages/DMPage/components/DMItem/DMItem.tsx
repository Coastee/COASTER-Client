import { UserBox } from "@/components";
import type { DMRoomTypes } from "@/pages/DMPage/types/dmTypes";
import { timeAgo } from "@/utils/dateTime";
import * as s from "@pages/DMPage/components/DMItem/DMItem.styles";

interface DMItemProps extends DMRoomTypes {}

const isRead = false;

const DMItem = ({ user, dm }: DMItemProps) => {
  return (
    <div css={s.itemWrapperStyle}>
      <div css={s.layoutStyle}>
        <UserBox name={user.nickname} profileImage={user.profileImage} />
        <div css={s.infoStyle}>
          <h2>{user.nickname}</h2>
          <div css={s.contentStyle}>
            <p css={s.messageStyle(isRead)}>{dm.content}</p>
            <div css={s.circleStyle} />
            <p css={s.timeStyle}>{timeAgo(dm.createdDate)}</p>
          </div>
        </div>
      </div>
      {/* {!isRead && <div css={s.blueCircleStyle} />} */}
    </div>
  );
};

export default DMItem;
