import { PinIcon } from "@/assets/svg";
import { Button } from "@/components";
import { SINGLE_LINE_NOTICE_DEFAULT } from "@/pages/HomePage/constants/noticeDummy";
import type { HomeDataTypes } from "@/pages/HomePage/types/homeDataTypes";
import * as s from "./GlobalChatPreview.styles";

interface GlobalChatPreviewProps {
  notice: HomeDataTypes["notice"];
  chat: HomeDataTypes["chat"];
}

const GlobalChatPreview = ({ notice, chat }: GlobalChatPreviewProps) => {
  return (
    <div css={s.layoutStyle}>
      <div css={s.noticeStyle}>
        <PinIcon width={10} height={13} />
        <p>[공지필독]</p>
        <p>{notice?.pageInfo.totalElements ? notice.noticeList[0].title : SINGLE_LINE_NOTICE_DEFAULT}</p>
      </div>
      <div css={s.chatStyle}>
        {chat?.chatList.slice(0, 6).map((chat) => {
          return (
            <div css={s.chatBarStyle} key={chat.id}>
              <Button variant="tertiary" size="medium">
                {chat.user.nickname}
              </Button>
              <p>{chat.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalChatPreview;
