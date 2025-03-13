import { Logo4Icon } from "@/assets/svg";
import { Divider } from "@/components";
import DMItem from "@/pages/DMPage/components/DMItem/DMItem";
import { useDmList } from "@/pages/DMPage/hooks/useDm";
import { theme } from "@/styles/theme/theme";
import * as s from "@pages/DMPage/components/DMList/DMList.styles";
import { useEffect } from "react";

interface ChatRoomProps {
  setRoomId: (id: number) => void;
}

const DMList = ({ setRoomId }: ChatRoomProps) => {
  const { data } = useDmList();
  const dmList = data?.result.dmRoomList || [];

  useEffect(() => {
    console.log(dmList);
  }, [dmList]);



  return (
    <section css={s.sectionStyle}>
      <header css={s.headerStyle}>
        <Logo4Icon width={164} height={57} />
        <h1>메시지</h1>
        <Divider css={{ backgroundColor: `${theme.color.dark2}` }} />
      </header>
      <ul css={[s.listStyle]}>
        {dmList.map((item, index) => (
          <DMItem key={`${item.user.nickname}-${index}`} {...item} id={item.id} setRoomId={setRoomId} />
        ))}
      </ul>
    </section>
  );
};

export default DMList;
