import { Logo4Icon } from "@/assets/svg";
import { Divider } from "@/components";
import DMItem from "@/pages/DMPage/components/DMItem/DMItem";
import type { DmListProps } from "@/pages/DMPage/types/dmTypes";
import { createDMClient } from "@/sockets/dmSocketClient";
import { theme } from "@/styles/theme/theme";
import * as s from "@pages/DMPage/components/DMList/DMList.styles";
import { useEffect, useState } from "react";

const DMList = ({ dmList, setRoomId, setNewDmRoomId, setUserId, nickname }: DmListProps) => {
  const [latestDmList, setLatestDmList] = useState(dmList);

  const myId = Number(localStorage.getItem("userId"));

  const handleItemClick = ({ roomId, userId }: { roomId: number; userId: number }) => {
    setRoomId(roomId);
    setUserId(userId);
  };

  useEffect(() => {
    setLatestDmList(dmList);
  }, [dmList]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Ignore unnecessary dependency warning
  useEffect(() => {
    const client = createDMClient(myId, (msg) => {
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

        const updated = [
          {
            ...msg,
            user: { ...msg.user, nickname: msg.user.id === myId ? nickname : msg.user.nickname },
          },
          ...list,
        ];

        if (!list.some((room) => room.id === msg.id)) {
          setTimeout(() => {
            setNewDmRoomId(msg.id);
          }, 0);
        }

        return updated;
      });
    });

    return () => {
      client.deactivate();
    };
  }, [myId]);

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
            key={`${item.id}-${index}`}
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
