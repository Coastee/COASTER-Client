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
}

const DMList = ({ dmList, setRoomId, setUserId }: ChatRoomProps) => {
  const handleItemClick = ({ roomId, userId }: { roomId: number; userId: number }) => {
    setRoomId(roomId);
    setUserId(userId);
  };

  return (
    <section css={s.sectionStyle}>
      <header css={s.headerStyle}>
        <Logo4Icon width={164} height={57} />
        <h1>메시지</h1>
        <Divider css={{ backgroundColor: `${theme.color.dark2}` }} />
      </header>
      <ul css={[s.listStyle]}>
        {dmList.map((item, index) => (
          <li
            key={`${item.user.nickname}-${index}`}
            onClick={() => handleItemClick({ roomId: item.id, userId: item.user.id })}
            onKeyDown={() => handleItemClick({ roomId: item.id, userId: item.user.id })}
          >
            <DMItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DMList;
