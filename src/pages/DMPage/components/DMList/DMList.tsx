import { Logo4Icon } from "@/assets/svg";
import { Divider } from "@/components";
import DMItem from "@/pages/DMPage/components/DMItem/DMItem";
import type { DmListProps } from "@/pages/DMPage/types/dmTypes";
import { createDMClient } from "@/sockets/\bstomp";
import { theme } from "@/styles/theme/theme";
import * as s from "@pages/DMPage/components/DMList/DMList.styles";
import { useEffect, useState } from "react";

const DMList = ({ dmList, setRoomId, setUserId }: DmListProps) => {
  const [latestDmList, setLatestDmList] = useState(dmList);

  const userId = 19; // 내 userId - 추후 전역상태로 관리

  const handleItemClick = ({ roomId, userId }: { roomId: number; userId: number }) => {
    setRoomId(roomId);
    setUserId(userId);
  };

  useEffect(() => {
    setLatestDmList(dmList);
  }, [dmList]);

  useEffect(() => {
    const client = createDMClient(userId, (msg) => {
      setLatestDmList((list) => {
        const idx = list.findIndex((room) => room.id === msg.id);

        if (idx !== -1) {
          const updated = [...list];
          updated[idx] = {
            ...updated[idx],
            dm: msg.dm,
          };
          updated.unshift(updated.splice(idx, 1)[0]);
          return updated;
        }

        const updated = [{ ...msg }, ...list];
        return updated;
      });
    });

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <section css={s.sectionStyle}>
      <header css={s.headerStyle}>
        <Logo4Icon width={164} height={57} />
        <h1>메시지</h1>
        <Divider css={{ backgroundColor: `${theme.color.dark2}` }} />
      </header>
      <ul css={[s.listStyle]}>
        {latestDmList.map((item, index) => (
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
