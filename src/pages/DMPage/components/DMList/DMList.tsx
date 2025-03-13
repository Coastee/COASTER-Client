import { Logo4Icon } from "@/assets/svg";
import { Divider } from "@/components";
import DMItem from "@/pages/DMPage/components/DMItem/DMItem";
import type { DMRoomTypes } from "@/pages/DMPage/types/dmTypes";
import { theme } from "@/styles/theme/theme";
import * as s from "@pages/DMPage/components/DMList/DMList.styles";

interface ChatRoomProps {
  dmList: DMRoomTypes[];
  setRoomId: (id: number) => void;
  setUserId: (id: number) => void;
  setIsChatting: (value: boolean) => void;
}

const DMList = ({ dmList, setRoomId, setUserId ,  setIsChatting}: ChatRoomProps) => {
  return (
    <section css={s.sectionStyle}>
      <header css={s.headerStyle}>
        <Logo4Icon width={164} height={57} />
        <h1>메시지</h1>
        <Divider css={{ backgroundColor: `${theme.color.dark2}` }} />
      </header>
      <ul css={[s.listStyle]}>
        {dmList.map((item, index) => (
          <DMItem key={`${item.user.nickname}-${index}`} {...item} id={item.id} setRoomId={setRoomId} setUserId={setUserId} setIsChatting={setIsChatting}/>
        ))}
      </ul>
    </section>
  );
};

export default DMList;
