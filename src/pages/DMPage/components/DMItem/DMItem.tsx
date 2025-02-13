import { UserBox } from "@/components";
import { theme } from "@/styles/theme/theme";
import * as s from "@pages/DMPage/components/DMItem/DMItem.styles";

interface DMItemProps {
  name: string;
  latestMessage: string;
  sentTime: string; // 분 단위 가정
  isRead: boolean;
}

const DMItem = ({ name, latestMessage, sentTime, isRead }: DMItemProps) => {
  return (
    <li css={s.itemWrapperStyle}>
      <div css={s.layoutStyle}>
        <UserBox name={name} />
        <div css={s.infoStyle}>
          <h2>{name}</h2>
          <div css={s.contentStyle}>
            <p css={s.messageStyle(isRead)}>{latestMessage}</p>
            <div css={s.circleStyle} />
            <p css={{ fontWeight: 400, color: `${theme.color.gray2}` }}>{sentTime}분</p>
          </div>
        </div>
      </div>
      {!isRead && <div css={s.blueCircleStyle} />}
    </li>
  );
};

export default DMItem;
